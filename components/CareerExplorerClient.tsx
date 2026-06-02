"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Career } from "@/data/careers";
import SearchBar from "@/components/SearchBar";
import CareerCard from "@/components/CareerCard";
import { HelpCircle } from "lucide-react";

interface CareerExplorerClientProps {
  careers: Career[];
}

export default function CareerExplorerClient({ careers }: CareerExplorerClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync category if query parameters change
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Extract unique categories (excluding 'All')
  const categories = Array.from(new Set(careers.map((c) => c.category)));

  // Filter logic
  const filteredCareers = careers.filter((career) => {
    const matchesCategory = selectedCategory === "All" || career.category === selectedCategory;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      career.title.toLowerCase().includes(searchLower) ||
      career.overview.toLowerCase().includes(searchLower) ||
      career.skills.some((s) => s.toLowerCase().includes(searchLower)) ||
      career.roles.some((r) => r.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and filter controls */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Results grid */}
      {filteredCareers.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
          {filteredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-zinc-900/20 border border-zinc-800/65 rounded-2xl max-w-3xl mx-auto">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No Careers Found</h3>
          <p className="text-zinc-400 text-sm max-w-md">
            We couldn't find any career matching &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category. Try searching for something else or clearing your filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-6 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
