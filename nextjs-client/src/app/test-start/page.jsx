"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
import Lottie from 'lottie-react';
import loadingAnimation from '../../../public/loading2.json';
import loadingAnimationDark from '../../../public/loading.json';

const TestStartPage = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [testDetails, setTestDetails] = useState({
    title: "",
    description: "",
    numQuestions: 10,
    difficulty: "medium",
    timeLimit: 30,
    tags: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Please log in to create a test", {
        duration: 3000,
        position: "top-center",
      });
      router.push("/signin");
    }
  }, [status, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestDetails((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1";
    try {
      const response = await Promise.race([
        fetch(`${baseUrl}/test/create-test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(testDetails),
        }).then((res) => res.json()),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 10000)
        ),
      ]);

      if (response?.statusCode === 201) {
        router.push(`/test/${response.data.testId}`);
      } else {
        toast.error(response?.message || "Failed to create test. Please try again.");
      }
    } catch (error) {
      console.error("Error during test creation:", error);
      toast.error(error.message || "Failed to create test. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  if (isLoading) {
    const animationData = document.body.classList.contains('dark') ? loadingAnimationDark : loadingAnimation;

    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-black fixed top-0 left-0 z-50">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-1/2 h-1/2"
        />
        <p className="mt-4 text-lg text-gray-800 dark:text-white bounce">AI is Generating a test for you...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl p-6">
      <Link href="/dashboard" className="right-4 z-10 flex justify-end">
        <Button
          variant="secondary"
          className="bg-black text-white dark:bg-white dark:text-black"
        >
          Back to Dashboard
        </Button>
      </Link>

      <div className="bg-white dark:bg-black border dark:border-zinc-800 shadow-lg rounded-lg p-6 mt-12">
        <h1 className="text-3xl font-bold mb-6">Initialize Test</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Test Title</Label>
            <Input
              id="title"
              name="title"
              value={testDetails.title}
              onChange={handleInputChange}
              required
              className="dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={testDetails.description}
              onChange={handleInputChange}
              required
              className="dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <div>
            <Label htmlFor="numQuestions">Number of Questions</Label>
            <Input
              type="number"
              id="numQuestions"
              name="numQuestions"
              value={testDetails.numQuestions}
              onChange={handleInputChange}
              min="1"
              required
              className="dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <div>
            <Label htmlFor="difficulty">Difficulty Level</Label>
            <select
              id="difficulty"
              name="difficulty"
              value={testDetails.difficulty}
              onChange={handleInputChange}
              className="w-full mt-1 rounded-md border border-gray-300 dark:border-neutral-600 shadow-sm px-4 py-2 bg-white dark:bg-neutral-800 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <Label htmlFor="timeLimit">
              Time Limit (minutes): {testDetails.timeLimit}
            </Label>
            <input
              type="range"
              id="timeLimit"
              name="timeLimit"
              value={testDetails.timeLimit}
              onChange={handleInputChange}
              min="5"
              max="180"
              step="5"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={testDetails.tags}
              onChange={handleInputChange}
              placeholder="e.g., math, science, history"
              className="dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <Button type="submit" className="w-full">
            {isLoading ? "Creating test..." : "Create Test With AI"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TestStartPage;
