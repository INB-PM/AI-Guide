"use client";

import { useState } from "react";
import { FAQItem } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-4 sm:px-6">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden transition-all duration-300 hover:border-zinc-700/80"
          >
            {/* Header / Toggle Button */}
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full flex items-start sm:items-center justify-between p-5 text-left font-semibold text-white transition-colors hover:text-indigo-400 gap-4"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-zinc-550 shrink-0 mt-1 sm:mt-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-indigo-400" : ""
                }`}
              />
            </button>

            {/* Answer Panel */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 border-t border-zinc-850" : "max-h-0"
              }`}
            >
              <div className="p-5 text-zinc-400 text-xs sm:text-sm leading-relaxed bg-zinc-950/20">
                <span className="inline-flex shrink-0 px-2 py-0.5 text-[9px] font-extrabold rounded-md uppercase border border-indigo-500/25 bg-indigo-500/5 text-indigo-300 mb-3">
                  {item.category}
                </span>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
