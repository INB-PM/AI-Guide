"use client";

import { useState, useRef, useEffect } from "react";
import AdvisorForm from "@/components/AdvisorForm";
import RecommendationCard, { AdvisorRecommendation } from "@/components/RecommendationCard";
import { Compass, Bot, User, Loader2, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  content: string;
  isComponent?: boolean;
}

export default function CareerAdvisorClient() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "bot",
      content: "Hello! I am your Career Compass Advisor. I will analyze your interests, current skills, and working styles to match you with a career. Please complete the quiz below:",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [recommendation, setRecommendation] = useState<AdvisorRecommendation | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages or typing states change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleFormSubmit = (data: {
    interests: string[];
    skills: string[];
    workStyle: string;
  }) => {
    // 1. Add user confirmation message in chat logs
    const userMsgId = `user-msg-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        content: "I have submitted my preferences. Analyze my answers!",
      },
    ]);

    // 2. Trigger bot typing state to simulate intelligence
    setIsTyping(true);

    setTimeout(() => {
      // 3. Run match scorer logic
      const result = matchCareer(data.interests, data.skills, data.workStyle);
      setRecommendation(result);
      setIsTyping(false);

      // 4. Append bot recommendation response in chat
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-res-${Date.now()}`,
          sender: "bot",
          content: `Based on your selections, I have matched you with: ${result.careerTitle}! Read my analysis breakdown below:`,
        },
      ]);
    }, 1500);
  };

  const handleReset = () => {
    setRecommendation(null);
    setMessages([
      {
        id: `bot-msg-reset-${Date.now()}`,
        sender: "bot",
        content: "Quiz reset. Please select your options below to discover your matches:",
      },
    ]);
  };

  // Predefined client scoring matching logic
  const matchCareer = (interests: string[], skills: string[], workStyle: string): AdvisorRecommendation => {
    const scores: Record<string, number> = {
      "software-engineer": 0,
      "data-scientist": 0,
      "ui-ux-designer": 0,
      "digital-marketer": 0,
      "cybersecurity-analyst": 0,
      "product-manager": 0
    };

    // Interest factors
    if (interests.includes("coding")) {
      scores["software-engineer"] += 4;
      scores["cybersecurity-analyst"] += 2;
      scores["data-scientist"] += 1;
    }
    if (interests.includes("aesthetics")) {
      scores["ui-ux-designer"] += 4;
    }
    if (interests.includes("data")) {
      scores["data-scientist"] += 4;
      scores["software-engineer"] += 1;
    }
    if (interests.includes("business")) {
      scores["product-manager"] += 4;
      scores["digital-marketer"] += 2;
    }
    if (interests.includes("communication")) {
      scores["digital-marketer"] += 4;
      scores["product-manager"] += 3;
    }
    if (interests.includes("security")) {
      scores["cybersecurity-analyst"] += 4;
    }

    // Skill parameters
    if (skills.includes("problem-solving")) {
      scores["software-engineer"] += 3;
      scores["cybersecurity-analyst"] += 3;
      scores["data-scientist"] += 2;
      scores["product-manager"] += 1;
    }
    if (skills.includes("creativity")) {
      scores["ui-ux-designer"] += 3;
      scores["digital-marketer"] += 2;
    }
    if (skills.includes("math")) {
      scores["data-scientist"] += 3;
      scores["software-engineer"] += 1;
    }
    if (skills.includes("organization")) {
      scores["product-manager"] += 3;
    }
    if (skills.includes("writing")) {
      scores["digital-marketer"] += 3;
      scores["product-manager"] += 1;
    }
    if (skills.includes("networking")) {
      scores["cybersecurity-analyst"] += 3;
    }

    // Work style matches
    if (workStyle === "technical") {
      scores["software-engineer"] += 5;
      scores["cybersecurity-analyst"] += 4;
      scores["data-scientist"] += 2;
    } else if (workStyle === "analytical") {
      scores["data-scientist"] += 5;
      scores["cybersecurity-analyst"] += 4;
    } else if (workStyle === "creative") {
      scores["ui-ux-designer"] += 5;
      scores["digital-marketer"] += 3;
    } else if (workStyle === "communication") {
      scores["digital-marketer"] += 5;
      scores["product-manager"] += 3;
    } else if (workStyle === "leadership") {
      scores["product-manager"] += 5;
    }

    // Identify highest scoring career path
    let bestCareerId = "software-engineer";
    let maxScore = -1;
    for (const [id, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        bestCareerId = id;
      }
    }

    const basePercent = Math.min(100, Math.round((maxScore / 14) * 100));
    const matchScore = Math.max(70, Math.min(98, basePercent));

    const matchInsights: Record<string, { why: string; skills: string[]; growth: string }> = {
      "software-engineer": {
        why: "You demonstrate strong affinity for coding logic and technical building. Software Engineering leverages these exact competencies to create scalable applications, requiring structured problem-solving and clean system architecture.",
        skills: ["React Frameworks", "NodeJS / Python Backend", "SQL & NoSQL Querying", "Version Control (Git)"],
        growth: "Growing at a rate of 25% year-over-year. Tech platforms are expanding, creating massive pathways for senior engineers and tech leaders."
      },
      "data-scientist": {
        why: "Your interest in statistical models, mathematics, and data-driven analysis aligns perfectly with Data Science. This path allows you to transform messy datasets into predictive models and actionable business strategies.",
        skills: ["Python (Pandas, Numpy)", "Scikit-Learn modeling", "SQL Querying", "Tableau / GA4 Visualizations"],
        growth: "Very high demand. High-level corporate roles are expanding as companies seek machine learning specialists and data strategists."
      },
      "ui-ux-designer": {
        why: "Your creative eye, visual layout interests, and desire for intuitive user experiences make UI/UX Design your natural fit. You will design layouts, prototypes, and user interfaces that bridge aesthetics with software feasibility.",
        skills: ["Figma Design Systems", "High-fidelity Wireframes", "Interaction Animations", "Usability Testing protocols"],
        growth: "Steady growth of 15% yearly. UX is increasingly recognized as a key differentiator for subscription SaaS and consumer web platforms."
      },
      "digital-marketer": {
        why: "You pair communication strengths with strategic marketing interest. Digital Marketing leverages copywriting, search engine visibility, analytics, and funnel optimization to drive customer acquisition.",
        skills: ["SEO & SEM", "GA4 Traffic Analytics", "Email Nurture Flows", "Persuasive sales copywriting"],
        growth: "Expanding steadily as traditional marketing budgets continue to transition to TikTok, Google, Meta, and social search channels."
      },
      "cybersecurity-analyst": {
        why: "Your interests in computer networks, threat safety, and defensive tools match Cybersecurity Analysis. You will be responsible for scanning vulnerabilities, guarding servers, and locking out unauthorized hackers.",
        skills: ["Linux Shell Admin", "Wireshark Log Analysis", "Incident Containment", "Security compliance standards"],
        growth: "Outstanding. Global corporate data breaches and network safety regulations have elevated security compliance to a boardroom priority."
      },
      "product-manager": {
        why: "Your business-strategic mindset, organization, and leadership preferences indicate a strong alignment with Product Management. You will act as the orchestrator connecting design, development, and executive teams to build and scale products.",
        skills: ["Jira Sprint Boards", "RICE Prioritization frameworks", "Product Specs & PRDs", "User Metric Analytics"],
        growth: "High-paying track leading to C-suite roles. More companies are becoming product-led, putting PMs at the center of organizational scaling."
      }
    };

    const info = matchInsights[bestCareerId];
    return {
      careerId: bestCareerId,
      careerTitle: bestCareerId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
      whyMatches: info.why,
      keySkills: info.skills,
      suggestedRoadmapUrl: `/skills-roadmap?career=${bestCareerId}`,
      expectedGrowth: info.growth,
      matchScore: matchScore
    };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Simulated Chatbot Device Container */}
      <div className="border border-zinc-800 bg-zinc-950/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[750px] backdrop-blur-md">
        {/* Chatbot Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400">
                <Bot className="h-5 w-5" />
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-zinc-900 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">Advisor Compass AI</h4>
              <p className="text-zinc-500 text-xs flex items-center gap-1.5">
                Online • Powered by Logic Engine
              </p>
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-850">
            <Compass className="h-4 w-4 text-zinc-400" />
          </div>
        </div>

        {/* Scrollable Conversation Pane */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${isBot ? "self-start" : "ml-auto flex-row-reverse"}`}
              >
                <div className={`h-8 w-8 rounded-lg shrink-0 flex items-center justify-center border text-xs ${
                  isBot 
                    ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400" 
                    : "bg-violet-500/10 border-violet-500/20 text-violet-400"
                }`}>
                  {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>

                <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                  isBot 
                    ? "bg-zinc-900/60 border-zinc-850 text-zinc-300 rounded-tl-none" 
                    : "bg-zinc-900 border-zinc-800 text-white rounded-tr-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            );
          })}

          {/* Typing state bubble */}
          {isTyping && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-zinc-900/60 border border-zinc-850 p-4 rounded-2xl rounded-tl-none text-zinc-400 flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
                <span>Advisor is computing your scores...</span>
              </div>
            </div>
          )}

          {/* Render Questionnaire in message flow if no recommendation active */}
          {!recommendation && !isTyping && (
            <div className="animate-fade-in">
              <AdvisorForm onSubmit={handleFormSubmit} />
            </div>
          )}

          {/* Render Match Report in message flow */}
          {recommendation && !isTyping && (
            <div className="animate-fade-in pt-4">
              <RecommendationCard recommendation={recommendation} onReset={handleReset} />
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>
    </div>
  );
}
