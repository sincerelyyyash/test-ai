import { Request, Response, NextFunction } from "express";
import Test from "../models/test.model";
import TestResult from "../models/test-result.model";
import dbConnect from "../lib/dbConnect";
import { ApiError } from "../lib/apiError";
import { ApiResponse } from "../lib/apiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import * as GeminiService from './gemini.controller';

export const createTest = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const testDetails = req.body;

  if (!testDetails) {
    throw new ApiError({ statusCode: 400, message: "Test details are required" });
  }

  await dbConnect();

  try {
    const questions = await GeminiService.generateQuestions(testDetails);

    const newTest = new Test({ ...testDetails, questions });
    await newTest.save();

    res.status(201).json(new ApiResponse({
      statusCode: 201,
      message: "Test created successfully.",
      data: { testId: newTest._id.toString() },
    }));
  } catch (error) {
    console.error("Error creating test:", error);
    throw new ApiError({ statusCode: 500, message: "Failed to create test" });
  }
});

export const submitTest = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { testId, userAnswers, userId } = req.body;

  if (!testId || !userAnswers || !userId) {
    throw new ApiError({ statusCode: 400, message: "Test ID, user answers, and user ID are required" });
  }

  await dbConnect();
  const test = await Test.findById(testId);

  if (!test) {
    throw new ApiError({ statusCode: 404, message: "Test not found" });
  }

  try {
    const geminiResult = await GeminiService.verifyTest(test, userAnswers);

    const questionsFormat = test.questions.map((question: any, index: number) => ({
      questionText: question.text,
      options: question.options,
      correctAnswer: question.correctAnswer,
      userAnswer: userAnswers[question._id],
      isCorrect: geminiResult.questionResults[index].isCorrect,
      explanation: geminiResult.questionResults[index].explanation,
    }));

    const testResult = new TestResult({
      userId,
      testId,
      difficulty: test.difficulty,
      score: geminiResult.score,
      correctAnswers: geminiResult.correctAnswers,
      wrongAnswers: geminiResult.wrongAnswers,
      analysis: geminiResult.analysis,
      questions: questionsFormat,
      userAnswers,
    });

    await testResult.save();

    res.status(201).json(new ApiResponse({
      statusCode: 201,
      message: "Test submitted and evaluated successfully.",
      data: { resultId: testResult._id.toString() },
    }));
  } catch (error) {
    console.error("Error submitting test:", error);
    throw new ApiError({ statusCode: 500, message: "Failed to submit test" });
  }
});


export const getTestById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { testId } = req.params;

  if (!testId) {
    throw new ApiError({ statusCode: 400, message: "Test ID is required" });
  }

  await dbConnect();
  const test = await Test.findById(testId);

  if (!test) {
    throw new ApiError({ statusCode: 404, message: "Test not found" });
  }

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "Test retrieved successfully.",
    data: test,
  }));
});


export const getTestResult = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { resultId, userId } = req.params;

  if (!resultId || !userId) {
    throw new ApiError({ statusCode: 400, message: "Result ID and User ID are required" });
  }

  await dbConnect();

  const testResult = await TestResult.findOne({ _id: resultId, userId })
    .populate("testId", "title questions");

  if (!testResult) {
    throw new ApiError({ statusCode: 404, message: "Test result not found" });
  }

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "Test result retrieved successfully.",
    data: testResult,
  }));
});

export const getUserTests = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError({ statusCode: 400, message: "User ID is required" });
  }

  await dbConnect();

  const testResults = await TestResult.find({ userId })
    .populate("testId", "title")
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "User's test history retrieved successfully.",
    data: testResults,
  }));
});

export const getAllTests = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  await dbConnect();

  const tests = await Test.find({}, {
    _id: 1,
    title: 1,
    description: 1,
    duration: 1,
    difficulty: 1,
    numQuestions: { $size: "$questions" },
  }).sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "All tests retrieved successfully.",
    data: tests,
  }));
});

export const getTestStats = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError({ statusCode: 400, message: "User ID is required" });
  }

  await dbConnect();

  const stats = await TestResult.aggregate([
    { $match: { userId } },
    {
      $lookup: {
        from: "tests",
        localField: "testId",
        foreignField: "_id",
        as: "testDetails",
      },
    },
    { $unwind: "$testDetails" },
    {
      $group: {
        _id: "$testDetails.difficulty",
        count: { $sum: 1 },
      },
    },
  ]);

  const easy = stats.find(stat => stat._id === "easy")?.count || 0;
  const medium = stats.find(stat => stat._id === "medium")?.count || 0;
  const hard = stats.find(stat => stat._id === "hard")?.count || 0;

  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "User's test statistics retrieved successfully.",
    data: { easy, medium, hard },
  }));
});
