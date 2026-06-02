import { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import { books, courses, careerTips } from "@/data/resources";
import { faqs } from "@/data/faqs";
import { 
  BookOpen, 
  Video, 
  Lightbulb, 
  HelpCircle, 
  Quote, 
  CheckCircle,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Career FAQ - Career Compass",
  description: "Explore curated reading lists, recommended technical courses, expert career tips, and detailed answers to common career development questions.",
};

export default function ResourcesPage() {
  return (
    <div className="pb-24">
      <Hero
        badge="Resource Library"
        title="Learning Guides & Career FAQ"
        subtitle="Accelerate your professional growth with curated books, recommended specializations, practical resume and interview tips, and answers to common queries."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        
        {/* Books Section */}
        <section className="space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2.5">
              <BookOpen className="h-6 w-6 text-indigo-400" />
              Must-Read Books
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              Foundational publications recommended to reshape your habits, enhance code mastery, structure layouts, or scale business ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-zinc-950 border border-zinc-850 text-zinc-400">
                      {book.category}
                    </span>
                    <span className="text-xs text-zinc-500 font-semibold">#{index + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-medium">By {book.author}</p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {book.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-850 bg-indigo-500/5 rounded-xl p-3 border border-indigo-500/10">
                  <div className="flex gap-1.5 text-indigo-400 mb-1">
                    <Quote className="h-4 w-4 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Key Takeaway</span>
                  </div>
                  <p className="text-zinc-300 text-xs italic leading-relaxed">
                    &quot;{book.keyTakeaway}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2.5">
              <Video className="h-6 w-6 text-violet-400" />
              Recommended Specializations
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              High-value structured programs from recognized institutions and platforms designed to take you from a complete novice to job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300">
                      {course.platform}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <p className="text-zinc-450 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Skills Gained:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skillsGained.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-950 border border-zinc-850 text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors duration-300"
                  >
                    <GraduationCap className="h-4 w-4 text-violet-400" />
                    {course.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Tips Section */}
        <section className="space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2.5">
              <Lightbulb className="h-6 w-6 text-emerald-400" />
              Tactical Career Advice
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl">
              Professional execution tactics to structure your job hunt, streamline portfolio projects, or scale network connections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerTips.map((tip, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Visual marker */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                    {tip.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                </div>

                <ul className="space-y-3 pl-1">
                  {tip.tips.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="h-6 w-6 text-indigo-400" />
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Got questions about career transitions, portfolio structures, degrees, or certifications? We have compiled 10 detailed insights below.
            </p>
          </div>

          <FAQAccordion items={faqs} />
        </section>

      </div>
    </div>
  );
}
