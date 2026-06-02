import Link from "next/link";
import Hero from "@/components/Hero";
import CareerCard from "@/components/CareerCard";
import FAQAccordion from "@/components/FAQAccordion";
import { careers } from "@/data/careers";
import { faqs } from "@/data/faqs";
import { 
  ShieldAlert, 
  Map, 
  Compass, 
  Target, 
  TrendingUp, 
  ArrowRight,
  BrainCircuit
} from "lucide-react";

export default function HomePage() {
  // Select first 6 careers to feature
  const featuredCareers = careers.slice(0, 6);
  
  // Select first 3 FAQs for preview
  const previewFaqs = faqs.slice(0, 3);

  const planningPillars = [
    {
      icon: Target,
      title: "Clarity Over Confusion",
      desc: "Stop wasting time learning random libraries. Focus on curated tools that match real industry demand and engineering requirements.",
      color: "text-indigo-400"
    },
    {
      icon: Map,
      title: "Structured Milestones",
      desc: "Track your progression sequentially: Beginner ➔ Intermediate ➔ Advanced ➔ Professional. Know exactly what projects to construct.",
      color: "text-violet-400"
    },
    {
      icon: TrendingUp,
      title: "Maximize Earning Power",
      desc: "Identify industries hiring, average salary ranges, and growth trends to align your talents with high-paying modern careers.",
      color: "text-emerald-400"
    }
  ];

  const stats = [
    { value: "25%+", label: "Tech Demand Growth", desc: "Projected software demand growth" },
    { value: "$115K", label: "Average Entry Salary", desc: "Median salary across tech paths" },
    { value: "6 Paths", label: "Structured Roadmaps", desc: "Step-by-step visual guides" },
    { value: "100%", label: "Private & Static", desc: "Local algorithms, zero user tracking" }
  ];

  return (
    <div className="pb-24 space-y-24">
      {/* Hero Section */}
      <Hero
        badge="Introducing Career Compass"
        title="Discover Your Future Career Path"
        subtitle="Explore high-paying tech, design, marketing, and business careers. Follow structured learning roadmaps, study salary structures, and get simulated AI advisory matches."
        primaryCtaText="Find Your Match (Quiz)"
        primaryCtaHref="/career-advisor"
        secondaryCtaText="Explore Career Catalog"
        secondaryCtaHref="/career-explorer"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        
        {/* Why Career Planning Matters */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Strategic Career Planning Matters
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Setting up clear milestones and understanding salaries avoids educational fatigue and accelerates interview callbacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planningPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index}
                  className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700/60 p-6 rounded-2xl space-y-4 backdrop-blur-sm transition-all duration-300"
                >
                  <div className={`h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center ${pillar.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Statistics Showcase */}
        <section className="bg-zinc-900/30 border border-zinc-800 p-8 sm:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1.5 text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-purple tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Career Cards */}
        <section className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Featured Career Paths
              </h2>
              <p className="text-zinc-550 text-sm">
                Understand salary ranges, duties, and essential skills for modern roles.
              </p>
            </div>
            <Link
              href="/career-explorer"
              className="inline-flex items-center gap-1 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors py-2"
            >
              View Full Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCareers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        </section>

        {/* Advisor CTA Banner */}
        <section className="bg-gradient-to-tr from-indigo-500/10 via-violet-500/5 to-transparent border border-indigo-500/20 p-8 sm:p-12 rounded-3xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300">
              <BrainCircuit className="h-3.5 w-3.5" /> Assessment Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Unsure which path matches your strengths?
            </h2>
            <p className="text-zinc-405 text-sm sm:text-base leading-relaxed">
              Take our interactive chatbot advisor quiz. By scoring your interests, technical comfort, and work style, we will match you to the perfect career path in seconds.
            </p>
          </div>

          <Link
            href="/career-advisor"
            className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm sm:text-base hover:opacity-90 hover:scale-102 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Launch Advisor Chatbot
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* FAQ Preview Accordion */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              FAQ Preview
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              A quick look at common questions asked by students during career exploration.
            </p>
          </div>

          <div className="space-y-6">
            <FAQAccordion items={previewFaqs} />
            
            <div className="flex justify-center pt-4">
              <Link
                href="/resources#faqs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300"
              >
                View All FAQs & Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
