"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { roadmaps } from "@/data/roadmaps";
import RoadmapCard from "@/components/RoadmapCard";
import { Code, Database, Palette, Megaphone, ShieldAlert, Award } from "lucide-react";

const careerIcons = {
  "software-engineer": Code,
  "data-scientist": Database,
  "ui-ux-designer": Palette,
  "digital-marketer": Megaphone,
  "cybersecurity-analyst": ShieldAlert,
  "product-manager": Award,
} as const;

export default function SkillsRoadmapClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial career selection from URL, fallback to software-engineer
  const initialCareer = searchParams.get("career") || "software-engineer";
  
  // Verify career exists in roadmaps key list, otherwise fallback
  const defaultCareer = roadmaps[initialCareer] ? initialCareer : "software-engineer";
  const [selectedCareer, setSelectedCareer] = useState(defaultCareer);

  // Sync state if url parameter changes
  useEffect(() => {
    const careerParam = searchParams.get("career");
    if (careerParam && roadmaps[careerParam]) {
      setSelectedCareer(careerParam);
    }
  }, [searchParams]);

  // Handle click on tab
  const handleCareerChange = (id: string) => {
    setSelectedCareer(id);
    // Update url parameter without full page reload
    router.push(`/skills-roadmap?career=${id}`, { scroll: false });
  };

  const selectedRoadmap = roadmaps[selectedCareer];

  return (
    <div className="space-y-12">
      {/* Selection Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-800 pb-6">
          {Object.keys(roadmaps).map((key) => {
            const roadmap = roadmaps[key];
            const Icon = careerIcons[key as keyof typeof careerIcons] || Code;
            const isActive = selectedCareer === key;

            return (
              <button
                key={key}
                onClick={() => handleCareerChange(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500/15 to-violet-500/15 border border-indigo-500/60 text-white shadow-md shadow-indigo-500/5"
                    : "border border-zinc-850 bg-zinc-900/20 text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-indigo-400" : ""}`} />
                <span>{roadmap.careerTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Roadmap Showcase */}
      {selectedRoadmap && (
        <div className="animate-fade-in">
          <RoadmapCard roadmap={selectedRoadmap} />
        </div>
      )}
    </div>
  );
}
