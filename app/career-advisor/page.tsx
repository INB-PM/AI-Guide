import { Metadata } from "next";
import Hero from "@/components/Hero";
import CareerAdvisorClient from "@/components/CareerAdvisorClient";

export const metadata: Metadata = {
  title: "AI Career Advisor - Career Compass",
  description: "Use our interactive, local simulated AI Career Advisor to match your unique interests, skills, and work styles to the perfect high-paying professional career path.",
};

export default function CareerAdvisorPage() {
  return (
    <div className="pb-24">
      <Hero
        badge="Interactive Matchmaker"
        title="Simulated AI Career Advisor"
        subtitle="Complete our quick profile assessment below. Our local matching engine will analyze your inputs to output your ideal career roadmap and growth potential."
      />
      
      <CareerAdvisorClient />
    </div>
  );
}
