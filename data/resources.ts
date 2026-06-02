export interface Book {
  title: string;
  author: string;
  description: string;
  keyTakeaway: string;
  category: string;
}

export interface Course {
  title: string;
  platform: string;
  description: string;
  skillsGained: string[];
  linkText: string;
}

export interface CareerTip {
  category: string;
  title: string;
  tips: string[];
}

export const books: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship. It details how to write code that is readable, maintainable, and elegant, providing concrete code examples of refactoring and code smell identification.",
    keyTakeaway: "Code is read much more often than it is written. Write code for your teammates, not just the compiler.",
    category: "Software Development"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An incredibly practical guide to breaking bad habits and establishing good ones. It explains how tiny 1% daily improvements compound into massive long-term professional and personal growth.",
    keyTakeaway: "You do not rise to the level of your goals. You fall to the level of your systems.",
    category: "Personal Growth & Productivity"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Argues that the ability to focus without distraction is a superpower in our modern, hyper-connected knowledge economy, offering actionable advice to build strict deep-work routines.",
    keyTakeaway: "High-Quality Work Produced = (Time Spent) x (Intensity of Focus). Eliminate distractions to master hard skills.",
    category: "Productivity"
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    description: "The seminal text explaining human-centered design. It explores why some products satisfy users while others frustrate them, showing how visibility, feedback, and constraints guide interaction.",
    keyTakeaway: "Products must guide users naturally. If a user fails to understand how to use an item, it is a failure of design, not the user.",
    category: "Design & UX"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "Introduces the methodology of continuous innovation, validation, and rapid experimentation. It explains how to build MVPs (Minimum Viable Products) to validate business assumptions quickly.",
    keyTakeaway: "Build-Measure-Learn. Validate assumptions with actual customer behavior before committing massive budgets.",
    category: "Business & Product Strategy"
  }
];

export const courses: Course[] = [
  {
    title: "The Web Developer Bootcamp",
    platform: "Udemy / Coursera",
    description: "A comprehensive introduction to modern full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and database structures.",
    skillsGained: ["HTML/CSS/JS", "React framework", "REST APIs", "Database structures"],
    linkText: "View Course Guide"
  },
  {
    title: "Applied Data Science with Python Specialization",
    platform: "Coursera (University of Michigan)",
    description: "A 5-course series teaching statistical methods, data cleaning, information visualization, text analysis, and machine learning using Python libraries.",
    skillsGained: ["Python Data Science Stack", "Statistical Modeling", "Matplotlib Visualization", "Machine Learning"],
    linkText: "View Specialization Details"
  },
  {
    title: "Google UX Design Professional Certificate",
    platform: "Coursera (Google)",
    description: "Hands-on training in user research, wireframing, high-fidelity design prototyping in Figma, and conducting usability studies.",
    skillsGained: ["Figma & Prototyping", "User Research", "Interaction Design", "UX Case Studies"],
    linkText: "View Certificate Path"
  },
  {
    title: "Google Digital Marketing & E-commerce Certificate",
    platform: "Coursera (Google)",
    description: "Learn to manage digital marketing funnels, build SEO strategies, launch paid advertising, and measure campaign performance in Google Analytics.",
    skillsGained: ["Google Ads & SEO", "GA4 Analytics", "Email Automations", "E-commerce Funnels"],
    linkText: "View Certificate Path"
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    platform: "Coursera (Google)",
    description: "Get prepared for an entry-level security analyst job. Learn to monitor network traffic, identify system vulnerabilities, and automate tasks with Python.",
    skillsGained: ["Network Defense Protocols", "SIEM Tools & Wireshark", "Python & Linux Shells", "Incident Investigation"],
    linkText: "View Certificate Path"
  }
];

export const careerTips: CareerTip[] = [
  {
    category: "Resume Building",
    title: "Crafting a High-Impact Resume",
    tips: [
      "Keep it to one page if you have less than 5 years of experience.",
      "Use the Google X-Y-Z formula for bullet points: 'Accomplished [X] as measured by [Y], by doing [Z]'. For example: 'Increased website traffic by 25% over 3 months by optimizing keyword indexing.'",
      "Tailor your resume for each application by matching terms from the job description to get past automated Applicant Tracking Systems (ATS).",
      "Ensure all links (GitHub, Portfolio, LinkedIn) are active and correct."
    ]
  },
  {
    category: "Interview Preparation",
    title: "Acing the Interview",
    tips: [
      "Use the STAR method (Situation, Task, Action, Result) to structure answers to behavioral questions.",
      "Do mock interviews with friends or use online simulator platforms to practice verbalizing your thought process.",
      "Research the company thoroughly before the interview: know their product, target audience, and recent press releases.",
      "Prepare 3-4 thoughtful questions to ask the interviewer about company culture and team structure."
    ]
  },
  {
    category: "Networking",
    title: "Building Meaningful Connections",
    tips: [
      "Optimize your LinkedIn profile with a clear headshot, descriptive headline, and detailed summary of your skills.",
      "Send personalized connection requests on LinkedIn to professionals in your field. Ask for short, 15-minute informational interviews.",
      "Attend local meetups, conferences, and industry workshops to build relationships.",
      "Share your learning journey or small project updates online to naturally attract industry peers."
    ]
  },
  {
    category: "Portfolio Development",
    title: "Creating a Showcase Portfolio",
    tips: [
      "Show, don't just tell. Include case studies detailing the entire lifecycle of 2-3 high-quality projects rather than listing 10 basic ones.",
      "For developers, link to clean GitHub code. For designers, show the evolution of sketches, wireframes, and final mockups.",
      "Write brief explanations describing the problem, your solution, your technical choices, and the results.",
      "Ensure your portfolio is responsive and looks excellent on mobile devices."
    ]
  },
  {
    category: "Continuous Learning",
    title: "Staying Ahead in Your Career",
    tips: [
      "Set aside 30 minutes every day to read industry news, tech articles, or practice a new skill.",
      "Build side projects that challenge you to use unfamiliar tech stacks or design paradigms.",
      "Subscribe to top curators (like newsletters, subreddits, and podcasts) to follow trends.",
      "Teach what you learn. Writing articles or explaining code to others forces deep mastery."
    ]
  }
];
