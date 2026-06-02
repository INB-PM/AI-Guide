import { Suspense } from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import CareerExplorerClient from "@/components/CareerExplorerClient";
import { careers } from "@/data/careers";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Explorer - Career Compass",
  description: "Browse detailed career choices in technology, design, marketing, and business. Understand salaries, duties, education requirements, and pros/cons.",
};

export default function CareerExplorerPage() {
  return (
    <div className="pb-24">
      <Hero
        badge="Career Directory"
        title="Explore Your Professional Choices"
        subtitle="Search and filter through detailed guides detailing salary ranges, day-to-day responsibilities, growth trends, and required skills for top roles."
      />
      
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-500 mb-4" />
          <p className="text-zinc-500 text-sm">Loading Career Explorer...</p>
        </div>
      }>
        <CareerExplorerClient careers={careers} />
      </Suspense>
    </div>
  );
}
