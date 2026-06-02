import { Suspense } from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import SkillsRoadmapClient from "@/components/SkillsRoadmapClient";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills Roadmap - Career Compass",
  description: "Follow structured step-by-step roadmaps from beginner to professional developer, designer, marketer, or manager. Get certification lists and projects.",
};

export default function SkillsRoadmapPage() {
  return (
    <div className="pb-24">
      <Hero
        badge="Skills Timelines"
        title="Your Step-by-Step Learning Roadmap"
        subtitle="Follow a verified path from absolute beginner to high-income professional. Master tools sequentially and build critical portfolio projects along the way."
      />

      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-500 mb-4" />
          <p className="text-zinc-500 text-sm">Loading Skills Roadmaps...</p>
        </div>
      }>
        <SkillsRoadmapClient />
      </Suspense>
    </div>
  );
}
