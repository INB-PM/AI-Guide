"use client";

import { useState } from "react";
import { CareerRoadmap, SkillPhase } from "@/data/roadmaps";
import { 
  Clock, 
  Award, 
  ExternalLink, 
  FolderGit2, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from "lucide-react";

interface RoadmapCardProps {
  roadmap: CareerRoadmap;
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const [activeStep, setActiveStep] = useState<'beginner' | 'intermediate' | 'advanced' | 'professional'>('beginner');

  const steps = [
    { key: 'beginner', label: 'Beginner', phase: roadmap.beginner },
    { key: 'intermediate', label: 'Intermediate', phase: roadmap.intermediate },
    { key: 'advanced', label: 'Advanced', phase: roadmap.advanced },
    { key: 'professional', label: 'Professional', phase: roadmap.professional },
  ] as const;

  const currentPhase = roadmap[activeStep];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 px-4 sm:px-6">
      {/* Timeline Header Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl backdrop-blur-md">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Estimated Investment</span>
          <h4 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <Clock className="h-5 w-5 text-indigo-400" />
            {roadmap.timeline}
          </h4>
        </div>
        <div className="h-px w-full sm:h-10 sm:w-px bg-zinc-800" />
        <div className="text-center sm:text-right">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Total Certifications</span>
          <p className="text-xl font-bold text-white flex items-center justify-center sm:justify-end gap-2">
            <Award className="h-5 w-5 text-violet-400" />
            {roadmap.certifications.length} Industry Standards
          </p>
        </div>
      </div>

      {/* Timeline Stepper Component */}
      <div className="space-y-6">
        <div className="relative">
          {/* Connecting Line (for desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 hidden md:block z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.key;
              return (
                <button
                  key={step.key}
                  onClick={() => setActiveStep(step.key)}
                  className={`flex flex-col items-center p-4 rounded-xl border text-center transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-b from-indigo-500/10 to-violet-500/10 border-indigo-500 text-white shadow-lg shadow-indigo-500/5 scale-102"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 border transition-all duration-300 ${
                    isActive 
                      ? "bg-indigo-500 border-indigo-400 text-white shadow-md shadow-indigo-500/20"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400"
                  }`}>
                    {idx + 1}
                  </div>
                  <span className="text-sm font-semibold tracking-wide">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Details Box */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          
          <div className="space-y-2">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Selected Phase</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{currentPhase.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPhase.skills.map((skill, index) => (
              <div key={index} className="flex gap-3 bg-zinc-900/60 border border-zinc-850 p-4 rounded-xl hover:border-zinc-800 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-white">{skill.name}</h5>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications & Resource Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recommended Certifications */}
        <div className="bg-zinc-900/20 border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-violet-400" />
            Recommended Certifications
          </h4>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Validating your expertise through recognized credentials significantly increases screening callbacks from tech recruitment.
          </p>
          <div className="space-y-3">
            {roadmap.certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between border border-zinc-850 p-4 rounded-xl bg-zinc-900/40 hover:border-zinc-800 transition-all duration-300">
                <div className="space-y-0.5">
                  <h5 className="text-sm font-bold text-white">{cert.name}</h5>
                  <p className="text-zinc-500 text-xs">{cert.issuer}</p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 text-zinc-500">
                  <Award className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-zinc-900/20 border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-6 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-400" />
            Curated Resources
          </h4>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Top directories and guides recommended to start learning the technologies mentioned in this roadmap.
          </p>
          <div className="space-y-3">
            {roadmap.resources.map((res, index) => (
              <div key={index} className="flex items-start gap-4 border border-zinc-850 p-4 rounded-xl bg-zinc-900/40 hover:border-zinc-800 transition-all duration-300">
                <span className="inline-flex shrink-0 px-2 py-0.5 text-[10px] font-extrabold rounded-md uppercase border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 mt-0.5">
                  {res.type}
                </span>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-white">{res.name}</h5>
                  <p className="text-zinc-400 text-xs leading-relaxed">{res.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Projects */}
      <div className="space-y-6">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <FolderGit2 className="h-5 w-5 text-emerald-400" />
          Common Projects to Build
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.projects.map((proj, index) => (
            <div key={index} className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 space-y-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
              <div className="space-y-1">
                <h5 className="text-base font-bold text-white">{proj.name}</h5>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-0.5 text-[11px] font-semibold text-zinc-300 bg-zinc-950 border border-zinc-800/80 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
