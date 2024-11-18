
import React, { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/blocks/features-section";
import { JoinNowSection } from "@/components/JoinNowSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { OurTeamSection } from "@/components/OurTeam";

export default function Home() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1";

    const intervalId = setInterval(() => {
      fetch(`${baseUrl}/user/alive`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // console.log("Server is alive:", data.message);
        })
        .catch((error) => {
          console.error("Failed to ping server:", error);
        });
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-['Roboto']"
    >
      <Hero />
      <FeaturesSection />
      <JoinNowSection />
      <TestimonialSection />
      <OurTeamSection />
    </div>
  );
}

