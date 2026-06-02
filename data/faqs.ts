export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Skills' | 'Career Growth' | 'Transition';
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I choose the right career path if I have multiple interests?",
    answer: "It's normal to have multiple interests. Start by identifying the intersections between what you enjoy, what you are good at, and what the market pays for. Try hands-on projects or online tutorials in your interest areas to see what the actual day-to-day work looks like. Use our Career Advisor quiz to map your interests, skills, and work styles to recommended options."
  },
  {
    id: "faq-2",
    category: "Skills",
    question: "Do I need a university degree to land a job in tech or design?",
    answer: "No, many fields (like Software Engineering, UI/UX Design, and Digital Marketing) prioritize a strong portfolio of real-world projects, proven skills, and practical experience over formal degrees. However, highly technical roles like Data Science or Cybersecurity may still prefer quantitative or specialized degrees. Continuous self-directed learning and certifications can bridge the gap."
  },
  {
    id: "faq-3",
    category: "Career Growth",
    question: "What is the difference between a Specialist and a Generalist path?",
    answer: "A Specialist focuses deeply on a single domain (e.g., a React Developer or database tuning specialist) and is highly valued for solving specific, high-complexity problems. A Generalist knows a broader range of topics (e.g., a Full-Stack developer or Product Manager) and is great at connecting different parts of a project. A popular model is the 'T-shaped' professional: broad knowledge across many areas, but deep expertise in one."
  },
  {
    id: "faq-4",
    category: "Transition",
    question: "How can I transition into a new career field with no prior experience?",
    answer: "Start by identifying transferable skills (e.g., organization, communication, analytics) from your previous field. Dedicate time to learning the technical foundations of your new field, and build 2-3 significant projects to show your ability. Leverage networking, attend events, obtain relevant certifications, and target junior or internship opportunities to get your foot in the door."
  },
  {
    id: "faq-5",
    category: "General",
    question: "How do I build a professional portfolio that stands out to recruiters?",
    answer: "Focus on quality over quantity. Instead of listing 10 basic tutorial projects, showcase 2-3 unique, complex projects. For each project, write a brief case study explaining: 1) The problem you solved, 2) Your design/technical choices, 3) The challenges you overcame, and 4) The final results. Make sure to link to live demos and clean code repositories."
  },
  {
    id: "faq-6",
    category: "Skills",
    question: "How important are certifications compared to personal projects?",
    answer: "In fields like Cybersecurity and Cloud Computing, certifications (like Security+, AWS Developer) are highly valued by HR departments to pass screening filters. In Software Engineering and UI/UX Design, custom projects and a clean portfolio are far more important because they demonstrate actual ability to build. Ideally, combine a baseline certification with impressive, original projects."
  },
  {
    id: "faq-7",
    category: "Career Growth",
    question: "What is engineering/product 'burnout' and how do I prevent it?",
    answer: "Burnout is physical or mental exhaustion caused by prolonged stress, tight deadlines, and constant screen time. Prevent it by setting clear boundaries for work hours, taking regular breaks, avoiding checking notifications late at night, and dedicating time to offline hobbies. Speak to your manager early if workloads become unsustainable."
  },
  {
    id: "faq-8",
    category: "Transition",
    question: "Can I transition from a software engineer role into product management?",
    answer: "Yes, software engineering is a common springboard for product management because technical understanding is a major asset in product planning. To transition, start taking on more user-facing or feature-scoping responsibilities in your engineering role. Work closely with your current PM, study business strategy, and practice communicating technical challenges in simple terms."
  },
  {
    id: "faq-9",
    category: "General",
    question: "How do I research average salaries for different careers?",
    answer: "You can find local salary data on websites like Glassdoor, Levels.fyi, and Indeed. Keep in mind that salaries vary significantly based on your location, years of experience, company size, and specific industry. For example, tech companies and financial firms typically offer higher base salaries and equity options."
  },
  {
    id: "faq-10",
    category: "Skills",
    question: "What soft skills are most important for technical careers?",
    answer: "Communication is the most critical soft skill. You must be able to explain complex technical ideas to non-technical teammates. Collaboration, empathy, and active listening are also crucial for working in cross-functional squads. Finally, adaptability is vital since tools and technologies change rapidly in any career path."
  }
];
