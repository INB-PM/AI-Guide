export interface Career {
  id: string;
  title: string;
  category: 'Technology' | 'Design' | 'Marketing' | 'Business';
  overview: string;
  roles: string[];
  salaryRange: string;
  averageSalary: string;
  skills: string[];
  education: string;
  growth: string;
  pros: string[];
  cons: string[];
  industries: string[];
}

export const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    category: "Technology",
    overview: "Software Engineers design, develop, test, and maintain software applications and systems. They apply engineering principles to solve complex problems, write clean and efficient code, and collaborate with cross-functional teams to build scalable technological solutions.",
    roles: [
      "Write clean, maintainable, and efficient code for web, mobile, or desktop applications.",
      "Analyze user requirements and translate them into technical specifications.",
      "Collaborate with product managers, designers, and other engineers to deliver high-quality software.",
      "Debug and troubleshoot application issues, optimizing software performance.",
      "Conduct code reviews and mentor junior developers to ensure code quality.",
      "Participate in agile ceremonies, including sprint planning, daily standups, and retrospectives."
    ],
    salaryRange: "$80,000 - $160,000",
    averageSalary: "$115,000",
    skills: ["JavaScript/TypeScript", "Python or Java", "Data Structures & Algorithms", "Git & Version Control", "APIs & Web Services", "Database Management (SQL/NoSQL)"],
    education: "Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent practical experience / coding bootcamp graduation).",
    growth: "Excellent. With the rapid digitization of industries, the demand for software engineers is projected to grow by 25% over the next decade. Opportunities include specializing as a Tech Lead, Solutions Architect, or transitioning into engineering management.",
    pros: [
      "High earning potential and competitive compensation packages.",
      "Abundant remote and flexible work options.",
      "Continuous learning opportunities in a rapidly evolving field."
    ],
    cons: [
      "Can lead to high stress and burnout, especially during tight deployment deadlines.",
      "Requires long hours sitting in front of screens, potentially causing physical strain.",
      "Continuous pressure to keep up with fast-changing technologies."
    ],
    industries: ["Software & SaaS Companies", "Finance & Fintech", "Healthcare & Biotech", "E-commerce & Retail", "Entertainment & Gaming"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Technology",
    overview: "Data Scientists analyze complex, raw data sets to uncover hidden patterns, trends, and actionable insights. By combining statistics, computer science, and business knowledge, they build machine learning models that help organizations make data-driven, strategic decisions.",
    roles: [
      "Gather, clean, and preprocess large volumes of structured and unstructured data.",
      "Develop predictive models and machine learning algorithms to solve business problems.",
      "Conduct exploratory data analysis (EDA) and formulate statistical hypotheses.",
      "Create data visualizations and dashboards to communicate findings to stakeholders.",
      "Collaborate with data engineers to build robust data pipelines and architecture.",
      "Stay up-to-date with statistical modeling techniques and AI/ML advancements."
    ],
    salaryRange: "$90,000 - $175,000",
    averageSalary: "$125,000",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "R Programming", "SQL", "Statistics & Probability", "Machine Learning & Deep Learning", "Data Visualization (Tableau, PowerBI)"],
    education: "Bachelor's, Master's, or PhD in Data Science, Statistics, Mathematics, Computer Science, or a quantitative field.",
    growth: "Outstanding. The rise of Big Data and AI has made data scientists crucial across all business sectors. Standard career progression goes from Junior Data Scientist to Senior Data Scientist, Principal Analyst, or Chief Data Officer.",
    pros: [
      "Highly intellectual and intellectually stimulating work resolving complex puzzles.",
      "Extremely high demand across diverse sectors, ensuring strong job security.",
      "Direct, measurable influence on business strategy and decision-making."
    ],
    cons: [
      "A large percentage of time (up to 70-80%) is spent on tedious data cleaning and preprocessing.",
      "Managing expectations from non-technical managers who expect instant magical solutions.",
      "High educational barrier to entry, frequently requiring advanced graduate degrees."
    ],
    industries: ["Tech Giants & Social Platforms", "Consulting Firms", "Banking & Investment Institutions", "Healthcare & Research", "Marketing & AdTech"]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Design",
    overview: "UI/UX Designers focus on creating intuitive, user-friendly, and visually appealing digital interfaces for websites, apps, and software. They bridge the gap between user needs and technical implementation by designing optimal user journeys, wireframes, prototypes, and layouts.",
    roles: [
      "Conduct user research, user interviews, and usability tests to understand user behavior.",
      "Create user personas, journey maps, and information architecture diagrams.",
      "Design wireframes, user flows, and low-fidelity prototypes.",
      "Craft high-fidelity UI designs, style guides, and design systems.",
      "Build interactive prototypes to demonstrate animations and transitions to developers.",
      "Collaborate closely with product managers and engineers to ensure design feasibility."
    ],
    salaryRange: "$65,000 - $130,000",
    averageSalary: "$90,000",
    skills: ["Figma / Adobe XD", "Wireframing & Prototyping", "User Research & Testing", "Visual Design & Typography", "Information Architecture", "Interaction Design"],
    education: "Degrees in Interaction Design, Graphic Design, Human-Computer Interaction (HCI), or a portfolio demonstrating strong case studies.",
    growth: "Strong. As businesses realize that poor user experience directly leads to lost revenue, the role of UI/UX design is expanding. Path leads to Senior Designer, UX Architect, Product Designer, Design System Lead, or VP of Design.",
    pros: [
      "Combines creativity with analytical problem-solving.",
      "Very rewarding to see users navigate and enjoy products you designed.",
      "Diverse specializations (UX research, UI design, copywriting, motion design)."
    ],
    cons: [
      "Subjective feedback from clients/stakeholders can lead to frustrating revision loops.",
      "Constantly balancing user advocacy against technical limitations and business goals.",
      "Need to always justify design decisions with research and data."
    ],
    industries: ["Design Agencies & Digital Studios", "SaaS & Consumer Software", "E-commerce & Retailers", "Creative Consulting", "Mobile App Development Startups"]
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    category: "Marketing",
    overview: "Digital Marketers plan and execute online marketing strategies to build brand awareness, drive traffic, acquire customers, and boost sales. They manage organic and paid campaigns across various channels, including search engines, social media, email, and websites.",
    roles: [
      "Plan and manage Search Engine Optimization (SEO) and Search Engine Marketing (SEM/PPC) campaigns.",
      "Design and execute content strategies for social media platforms and email newsletters.",
      "Analyze website traffic and campaign performance using Google Analytics and tracking tools.",
      "Optimize website landing pages and user funnels for higher conversion rates (CRO).",
      "Coordinate with copywriters and designers to produce engaging creative assets.",
      "Manage marketing budgets and calculate return on investment (ROI) for active campaigns."
    ],
    salaryRange: "$55,000 - $115,000",
    averageSalary: "$78,000",
    skills: ["SEO & SEM", "Content Strategy & Copywriting", "Web Analytics (Google Analytics)", "Social Media Marketing", "Email Marketing & Automation", "A/B Testing & CRO"],
    education: "Bachelor's degree in Marketing, Communications, Business, or certifications in Digital Marketing (Google, HubSpot, Meta) with case study experience.",
    growth: "Good. As advertising budgets continue to shift from traditional media to digital spaces, digital marketers remain highly sought after. Progression: Specialist ➔ Marketing Manager ➔ Director of Growth ➔ Chief Marketing Officer (CMO).",
    pros: [
      "Highly creative, dynamic, and fast-paced environment.",
      "Results-oriented and data-backed, making it clear when your campaigns succeed.",
      "Low barrier to entry; easy to start freelance consulting or self-learn."
    ],
    cons: [
      "Platform algorithms (Google, Meta, TikTok) change frequently, disrupting existing strategies.",
      "Can feel like a constant grind to keep generating fresh content and ideas.",
      "Pressure to deliver immediate conversions and revenue increases with limited budget."
    ],
    industries: ["Ad Agencies & Marketing Firms", "E-commerce & Direct-to-Consumer Brands", "SaaS & Technology Startups", "Entertainment & Media Companies", "Education & Non-Profits"]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Technology",
    overview: "Cybersecurity Analysts protect an organization's computer networks, systems, databases, and digital infrastructure from cyber threats, hacks, and unauthorized access. They monitor network traffic, identify vulnerabilities, handle security incidents, and enforce security policies.",
    roles: [
      "Monitor network traffic and security alerts for suspicious activity and active breaches.",
      "Conduct vulnerability assessments, penetration tests, and risk audits.",
      "Install and configure firewalls, encryption tools, and security software.",
      "Respond to and investigate security incidents, documenting root cause analyses.",
      "Train employees on cybersecurity awareness, phishing detection, and safe practices.",
      "Ensure compliance with government regulations and industry security standards (e.g., ISO 27001)."
    ],
    salaryRange: "$75,000 - $145,000",
    averageSalary: "$105,000",
    skills: ["Network Security & Protocols", "Incident Response & Forensics", "Vulnerability Scanning Tools", "Linux & Scripting (Python/Bash)", "Threat Intelligence", "Ethical Hacking & Penetration Testing"],
    education: "Degree in Cybersecurity, Computer Science, Information Technology, or certifications (Security+, CEH, CISSP) with hands-on lab experience.",
    growth: "Exceptional. The escalating frequency and sophistication of cyber warfare, ransomware, and corporate data breaches make security a non-negotiable priority. Career path: Analyst ➔ Security Engineer ➔ Security Architect ➔ CISO.",
    pros: [
      "Extremely high job security and increasing global demand.",
      "Exciting, high-stakes work dealing with real-world threat actors.",
      "Highly respected role with excellent compensation and clear impact."
    ],
    cons: [
      "On-call schedules can be demanding, requiring response to emergencies at any hour.",
      "High stress levels: a single overlooked configuration can lead to catastrophic breach.",
      "Continuous pressure to stay ahead of evolving hacker techniques."
    ],
    industries: ["Financial & Banking Sectors", "Government & Defense Agencies", "Enterprise IT Consulting", "Healthcare & Medical Providers", "Cloud Computing & Hosting Providers"]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    category: "Business",
    overview: "Product Managers (PMs) are responsible for the overall success of a digital product. They act as the 'glue' between business, technology, and design, defining the product vision, roadmap, and core features, and leading cross-functional teams to build and launch them.",
    roles: [
      "Define product vision, strategy, and long-term roadmap based on market research.",
      "Write detailed product requirement documents (PRDs) and user stories.",
      "Align stakeholders (engineering, design, sales, marketing, executives) on priorities.",
      "Conduct user research and analyze usage metrics to guide feature development.",
      "Manage and prioritize the product backlog, planning sprints and release schedules.",
      "Track and report product performance KPIs, ensuring alignment with business goals."
    ],
    salaryRange: "$85,000 - $165,000",
    averageSalary: "$120,000",
    skills: ["Product Strategy & Roadmap Creation", "Agile & Scrum Methodologies", "User Research & Data Analysis", "Market Analysis & Business Case Design", "UX/UI Principles", "Stakeholder Communication"],
    education: "Degrees in Business, Engineering, Computer Science, or equivalent experience. Many PMs transition from software development, UI/UX design, or marketing.",
    growth: "Outstanding. Product management is considered one of the fast tracks to executive leadership (CPO, CEO). Demand is robust as organizations prioritize building product-led growth engines.",
    pros: [
      "High level of ownership and autonomy over product direction.",
      "Work changes day-to-day, spanning design, engineering, business, and marketing.",
      "Excellent pathway to startup leadership or founding your own company."
    ],
    cons: [
      "High responsibility but zero authority: you must lead and influence without direct managerial power.",
      "Pulled in many directions by conflicting demands of developers, users, and executives.",
      "Requires constant context-switching, which can be exhausting."
    ],
    industries: ["SaaS & Enterprise Tech", "Consumer Web & Mobile Apps", "Fintech & Payment Systems", "Healthcare Tech & E-health", "Automotive & Smart Devices"]
  }
];
