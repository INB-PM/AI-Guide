import Link from "next/link";
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Award,
  BookOpen,
  RotateCcw
} from "lucide-react";

export interface AdvisorRecommendation {
  careerId: string;
  careerTitle: string;
  whyMatches: string;
  keySkills: string[];
  suggestedRoadmapUrl: string;
  expectedGrowth: string;
  matchScore: number;
}

interface RecommendationCardProps {
  recommendation: AdvisorRecommendation;
  onReset: () => void;
}

export default function RecommendationCard({ recommendation, onReset }: RecommendationCardProps) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-md animate-fade-in">
      {/* Visual Header Banner */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />

      <div className="p-6 sm:p-8 space-y-8">
        {/* Recommendation Main Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-850 pb-6">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-widest text-indigo-400 uppercase">
              <Sparkles className="h-3 w-3" /> Career Compass Match
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {recommendation.careerTitle}
            </h3>
          </div>
          
          <div className="flex flex-col items-start sm:items-end shrink-0">
            <span className="text-[10px] text-zinc-500 uppercase font-semibold">Match Score</span>
            <div className="text-2xl font-extrabold text-gradient-purple">
              {recommendation.matchScore}% Match
            </div>
          </div>
        </div>

        {/* Why It Matches */}
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
            <Compass className="h-4 w-4 text-indigo-400" />
            Why it matches your profile:
          </h4>
          <p className="text-zinc-450 text-sm sm:text-base leading-relaxed bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl">
            {recommendation.whyMatches}
          </p>
        </div>

        {/* Growth & Core Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Skills */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-violet-400" />
              Core Skills to Learn:
            </h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.keySkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-300 rounded-lg bg-zinc-950 border border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* expectedGrowth */}
          <div className="space-y-3">
            <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              Industry Growth Trend:
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {recommendation.expectedGrowth}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-850">
          <button
            onClick={onReset}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm transition-all duration-300"
          >
            <RotateCcw className="h-4 w-4" />
            Retake Advisor Quiz
          </button>

          <Link
            href={recommendation.suggestedRoadmapUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-xs sm:text-sm hover:opacity-90 hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            Open Skills Roadmap
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
