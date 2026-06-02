import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  extraContent?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  badge,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  extraContent,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 flex flex-col justify-center items-center text-center px-4">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-500/10 to-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

      {badge && (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 mb-6 backdrop-blur-md animate-fade-in">
          {badge}
        </div>
      )}

      <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        {title.split(" ").map((word, i) => {
          // Highlight key words (e.g. Future, Career, Path)
          const highlightWords = ["Future", "Career", "Path", "Compass", "Roadmap", "Advisor", "Resources"];
          const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          if (highlightWords.includes(cleanedWord)) {
            return (
              <span key={i} className="text-gradient-purple mr-2 sm:mr-3 inline-block">
                {word}{" "}
              </span>
            );
          }
          return <span key={i} className="mr-2 sm:mr-3 inline-block">{word}</span>;
        })}
      </h1>

      <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 leading-relaxed">
        {subtitle}
      </p>

      {(primaryCtaText || secondaryCtaText) && (
        <div className="flex flex-wrap gap-4 justify-center items-center z-10">
          {primaryCtaText && primaryCtaHref && (
            <Link
              href={primaryCtaHref}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              {primaryCtaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:bg-zinc-900 font-semibold text-sm transition-all duration-300"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      )}

      {extraContent && (
        <div className="mt-12 w-full max-w-5xl z-10">
          {extraContent}
        </div>
      )}
    </section>
  );
}
