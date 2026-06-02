"use client";

import { useState } from "react";
import { Sparkles, BrainCircuit } from "lucide-react";

interface AdvisorFormProps {
  onSubmit: (data: {
    interests: string[];
    skills: string[];
    workStyle: string;
  }) => void;
}

export default function AdvisorForm({ onSubmit }: AdvisorFormProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedWorkStyle, setSelectedWorkStyle] = useState<string>("");

  const interestOptions = [
    { id: "coding", label: "Building apps & writing logic" },
    { id: "aesthetics", label: "Visual design, layout & aesthetics" },
    { id: "data", label: "Analyzing patterns, numbers & statistics" },
    { id: "business", label: "Business strategy, pricing & markets" },
    { id: "communication", label: "Public speaking, writing & selling" },
    { id: "security", label: "Hacking, lockouts & networking safety" },
  ];

  const skillOptions = [
    { id: "problem-solving", label: "Logical puzzle solving" },
    { id: "creativity", label: "Creative visual drawing" },
    { id: "math", label: "Math & statistics" },
    { id: "organization", label: "Project coordination" },
    { id: "writing", label: "Persuasive writing & copy" },
    { id: "networking", label: "Computer network structures" },
  ];

  const workStyleOptions = [
    { id: "creative", label: "Creative (Focus on imagination & style)", desc: "Best for UI/UX & Marketing" },
    { id: "analytical", label: "Analytical (Focus on statistics & models)", desc: "Best for Data Science & Cybersecurity" },
    { id: "technical", label: "Technical (Focus on system coding)", desc: "Best for Software Engineering & Security" },
    { id: "communication", label: "Communication (Focus on writing & pitches)", desc: "Best for Marketing & Product" },
    { id: "leadership", label: "Leadership (Focus on leading team goals)", desc: "Best for Product Management" },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedInterests.length === 0 || selectedSkills.length === 0 || !selectedWorkStyle) {
      alert("Please select at least one interest, one skill, and your preferred work style!");
      return;
    }
    onSubmit({
      interests: selectedInterests,
      skills: selectedSkills,
      workStyle: selectedWorkStyle,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto backdrop-blur-md">
      <div className="flex items-center gap-3 border-b border-zinc-850 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Career Alignment Quiz</h3>
          <p className="text-zinc-500 text-xs sm:text-sm">Select options that match you best to compute your career direction.</p>
        </div>
      </div>

      {/* Interests selection */}
      <div className="space-y-3">
        <label className="block text-sm font-bold text-white uppercase tracking-wider">
          1. What topics excite you the most?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {interestOptions.map((opt) => {
            const isChecked = selectedInterests.includes(opt.id);
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggleInterest(opt.id)}
                className={`flex items-center justify-start px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all duration-300 ${
                  isChecked
                    ? "bg-indigo-500/10 border-indigo-500 text-white"
                    : "bg-zinc-900/60 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <div className={`h-4 w-4 rounded border mr-3 flex items-center justify-center transition-all ${
                  isChecked ? "bg-indigo-500 border-indigo-400 text-white" : "border-zinc-700 bg-zinc-950"
                }`}>
                  {isChecked && "✓"}
                </div>
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills selection */}
      <div className="space-y-3">
        <label className="block text-sm font-bold text-white uppercase tracking-wider">
          2. Which skills do you excel at or wish to train?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skillOptions.map((opt) => {
            const isChecked = selectedSkills.includes(opt.id);
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggleSkill(opt.id)}
                className={`flex items-center justify-start px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all duration-300 ${
                  isChecked
                    ? "bg-indigo-500/10 border-indigo-500 text-white"
                    : "bg-zinc-900/60 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <div className={`h-4 w-4 rounded border mr-3 flex items-center justify-center transition-all ${
                  isChecked ? "bg-indigo-500 border-indigo-400 text-white" : "border-zinc-700 bg-zinc-950"
                }`}>
                  {isChecked && "✓"}
                </div>
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Work Style selection */}
      <div className="space-y-3">
        <label className="block text-sm font-bold text-white uppercase tracking-wider">
          3. Select your core working style preference:
        </label>
        <div className="space-y-2">
          {workStyleOptions.map((opt) => {
            const isSelected = selectedWorkStyle === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setSelectedWorkStyle(opt.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-violet-500/10 border-violet-500 text-white"
                    : "bg-zinc-900/60 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                    isSelected ? "bg-violet-500 border-violet-400" : "border-zinc-700 bg-zinc-950"
                  }`}>
                    {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <span className="font-bold">{opt.label.split(" (")[0]}</span>
                    <span className="text-zinc-500 text-xs hidden sm:inline-block ml-2">— {opt.desc}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-zinc-850 flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm hover:opacity-90 hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
        >
          <Sparkles className="h-4 w-4" />
          Analyze Career Match
        </button>
      </div>
    </form>
  );
}
