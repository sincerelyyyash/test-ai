"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TestQuestion from "@/components/TestQuestion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function TestPage({ params }) {
  const { testId } = params;
  const { data: session, status } = useSession();
  const router = useRouter();
  const [test, setTest] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadingStates = [
    { text: "Preparing your test submission..." },
    { text: "Validating your answers..." },
    { text: "Submitting your test..." },
    { text: "Test submitted successfully!" },
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Please log in to take the test");
      router.push("/signin");
    } else if (status === "authenticated") {
      fetchTest();
    }
  }, [status, router, testId]);

  const fetchTest = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1";

    try {
      const response = await fetch(`${baseUrl}/test/${testId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.statusCode === 200) {
        setTest(result.data);
      } else {
        toast.error(result.message || "Test not found");
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching test:", error);
      toast.error("Failed to fetch test. Please try again.");
      router.push("/");
    }
  };
  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1";
    if (!session || !session.user) {
      toast.error("Please log in to submit the test");
      return;
    }

    const unansweredQuestions = test.questions.filter(
      (question) => !userAnswers[question._id]
    );

    if (unansweredQuestions.length > 0) {
      toast.error("You must answer all questions");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/test/submit-test`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          testId,
          userAnswers,
          userId: session.user.id,
        }),
      });

      const result = await response.json();

      setIsSubmitting(false);

      if (response.ok && result.statusCode === 201) {
        toast.success("Test submitted successfully");
        router.push(`/test-result/${result.data.resultId}`);
      } else {
        toast.error(result.message || "Failed to submit test");
        console.error("Submit error:", result.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting test:", error);
      toast.error("An error occurred while submitting the test. Please try again.");
    }
  };
  const handleNext = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTimeUp = () => {
    toast.error("Time's up! Submitting your test.");
    handleSubmit();
  };

  if (status === "loading" || !test) {
    return (
      <div>
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  const currentQuestion = test.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === test.questions.length - 1;

  return (
    <div className="container mx-auto max-w-3xl p-6">
      <CountdownTimer timeLimit={test.timeLimit} onTimeUp={handleTimeUp} />
      <div className="px-4">
        <h1 className="text-3xl font-bold mb-4">{test.title}</h1>
        <p className="mb-4">{test.description}</p>
        <div className="mb-4">
          <strong>Difficulty:</strong> {test.difficulty}
        </div>
        <div className="mb-4">
          <strong>Time Limit:</strong> {test.timeLimit} minutes
        </div>
        <div className="mb-6">
          <strong>Tags:</strong> {test.tags.join(", ")}
        </div>
      </div>
      <div className="space-y-8">
        <TestQuestion
          key={currentQuestion._id}
          question={currentQuestion}
          index={currentQuestionIndex}
          onChange={(answer) => handleAnswerChange(currentQuestion._id, answer)}
          userAnswer={userAnswers[currentQuestion._id]}
        />
      </div>

      <div className="mt-8 flex justify-between">
        {currentQuestionIndex > 0 && (
          <Button onClick={handlePrevious} className="w-1/2 mr-2">
            Previous Question
          </Button>
        )}
        {!isLastQuestion ? (
          <Button onClick={handleNext} className="w-1/2">
            Next Question
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-1/2"
          >
            {isSubmitting ? "Submitting..." : "Submit Test"}
          </Button>
        )}
      </div>

      {/* MultiStepLoader for submission */}
      <MultiStepLoader
        loading={isSubmitting}
        loadingStates={loadingStates}
        duration={2000}
        loop={false}
      />
    </div>
  );
}
