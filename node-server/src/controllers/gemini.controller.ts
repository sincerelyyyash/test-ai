
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ApiError } from '../lib/apiError';
import { z } from 'zod';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const testDetailsSchema = z.object({
  numQuestions: z.number().min(1, "Number of questions must be at least 1"),
  difficulty: z.string().min(1, "Difficulty level is required"),
  tags: z.string().min(1, "Tags are required"),
  title: z.string().min(1, "Test title is required"),
  description: z.string().min(1, "Test description is required"),
});

export type TestDetails = z.infer<typeof testDetailsSchema>;

function cleanAndParseJSON(text: string) {
  text = text.replace(/```json\n?|\n?```/g, "").trim();
  text = text.replace(/^\s+|\s+$/g, "");
  return JSON.parse(text);
}

export async function generateQuestions(testDetails: TestDetails) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Generate ${testDetails.numQuestions} multiple-choice questions for a ${testDetails.difficulty} level test on ${testDetails.tags}. 
  The test title is "${testDetails.title}" and the description is "${testDetails.description}". 
  For each question, provide the following details:
  - 'text': The question text as a string.
  - 'options': An array of 4 distinct answer options (as strings).
  - 'correctAnswer': The correct answer as a string, matching one of the options.

  Format the response as a JSON array of objects, each containing 'text', 'options', and 'correctAnswer'. 
  Do not include any markdown formatting or additional text outside of the JSON array.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    const parsedQuestions = cleanAndParseJSON(response);

    if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
      throw new ApiError({ statusCode: 400, message: "Invalid question format returned from AI." });
    }

    return parsedQuestions;
  } catch (error) {
    console.error("Error generating questions:", error);
    throw new ApiError({ statusCode: 500, message: "Failed to generate questions" });
  }
}

export interface TestVerificationResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  analysis: string;
  questionResults: Array<{
    isCorrect: boolean;
    explanation: string;
  }>;
}

export async function verifyTest(test: any, userAnswers: any): Promise<TestVerificationResult> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Analyze the following test results:
    Test: ${JSON.stringify(test)}
    User Answers: ${JSON.stringify(userAnswers)}

    Please provide:
    1. The score (percentage of correct answers)
    2. Number of correct answers
    3. Number of wrong answers
    4. A brief analysis of the user's performance, including topics they need to improve
    5. For each question, provide:
       - Whether the user's answer was correct or not
       - A brief explanation of why it was correct or incorrect

    Format the response as a JSON object with the following structure:
    {
      "score": number,
      "correctAnswers": number,
      "wrongAnswers": number,
      "analysis": string,
      "questionResults": [
        {
          "isCorrect": boolean,
          "explanation": string
        },
        ...
      ]
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const analysisText = await result.response.text();
    return cleanAndParseJSON(analysisText);
  } catch (error) {
    console.error("Error verifying test results:", error);
    throw new ApiError({ statusCode: 500, message: "Failed to verify test results" });
  }
}
