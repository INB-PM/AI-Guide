"use client";

import { useState } from "react";
import Link from "next/link";
import { Career } from "@/data/careers";
import { 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight,
  DollarSign
} from "lucide-react";

interface CareerCardProps {
  career: Career;
  featured?: boolean;
}

export default function CareerCard({ career, featured = false }: CareerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Category based color themes
  const categoryThemes = {
    Technology: {
      border: "hover:border-indigo-500/50",
      badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
      iconColor: "text-indigo-400",
      glow: "shadow-indigo-500/5"
    },
    Design: {
      border: "hover:border-pink-500/50",
      badge: "border-pink-500/30 bg-pink-500/10 text-pink-300",
      iconColor: "text-pink-400",
      glow: "shadow-pink-500/5"
    },
    Marketing: {
      border: "hover:border-cyan-500/50",
      badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
      iconColor: "text-cyan-400",
      glow: "shadow-cyan-500/5"
    },
    Business: {
      border: "hover:border-amber-500/50",
      badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
      iconColor: "text-amber-400",
      glow: "shadow-amber-500/5"
    }
  };

  const theme = categoryThemes[career.category] || categoryThemes.Technology;

  return (
    <div 
      className={`relative w-full rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${theme.glow} ${theme.border} overflow-hidden group`}
    >
      {/* Glow highlight on card top border */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent group-hover:via-indigo-500/50 transition-all duration-500" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Category & Title */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md ${theme.badge}`}>
              {career.category}
            </span>
            <div className="flex items-center gap-1 text-emerald-400 font-semibold text-sm bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <DollarSign className="h-3.5 w-3.5" />
              <span>{career.averageSalary} avg</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{career.title}</h3>
        </div>

        {/* Overview */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-3">
          {career.overview}
        </p>

        {/* Essential Skills (Preview) */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Key Skills Required:</h4>
          <div className="flex flex-wrap gap-1.5">
            {career.skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2.5 py-1 text-xs rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Primary CTA and Toggle */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white transition-colors py-2 focus:outline-none"
          >
            {isExpanded ? (
              <>
                Collapse Details <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read Details <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>

          <Link
            href={`/skills-roadmap?career=${career.id}`}
            className="inline-flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500/80 to-violet-500/80 rounded-xl hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:scale-102 transition-all duration-300"
          >
            View Roadmap <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Expandable Section */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[1500px] border-t border-zinc-850 pt-6 mt-6 space-y-6" : "max-h-0"
          }`}
        >
          {/* Roles & Responsibilities */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              <Briefcase className={`h-4 w-4 ${theme.iconColor}`} />
              Roles and Responsibilities
            </h4>
            <ul className="list-disc pl-5 text-zinc-400 text-sm space-y-2 leading-relaxed">
              {career.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>

          {/* Education & Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                <GraduationCap className={`h-4 w-4 ${theme.iconColor}`} />
                Education Requirements
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {career.education}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                <TrendingUp className={`h-4 w-4 ${theme.iconColor}`} />
                Career Growth Opportunities
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {career.growth}
              </p>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 space-y-3">
              <h5 className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                <CheckCircle className="h-4 w-4" /> Pros
              </h5>
              <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm pl-1">
                {career.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-500/5 border border-rose-500/10 rounded-xl p-4 space-y-3">
              <h5 className="flex items-center gap-2 text-sm font-bold text-rose-400">
                <AlertTriangle className="h-4 w-4" /> Cons
              </h5>
              <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm pl-1">
                {career.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hiring Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Hiring Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {career.industries.map((ind) => (
                <span 
                  key={ind} 
                  className="px-3 py-1 text-xs font-medium text-zinc-300 rounded-lg bg-zinc-900 border border-zinc-800"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
