export interface SkillPhase {
  title: string;
  skills: { name: string; desc: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface Resource {
  name: string;
  type: 'Book' | 'Course' | 'Website' | 'Video';
  desc: string;
  url?: string;
}

export interface Project {
  name: string;
  desc: string;
  tech: string[];
}

export interface CareerRoadmap {
  careerId: string;
  careerTitle: string;
  timeline: string;
  beginner: SkillPhase;
  intermediate: SkillPhase;
  advanced: SkillPhase;
  professional: SkillPhase; // Representing "Professional" step in Beginner -> Intermediate -> Advanced -> Professional
  certifications: Certification[];
  resources: Resource[];
  projects: Project[];
}

export const roadmaps: Record<string, CareerRoadmap> = {
  "software-engineer": {
    careerId: "software-engineer",
    careerTitle: "Software Engineer",
    timeline: "6 - 12 Months (assuming 15-20 hours/week)",
    beginner: {
      title: "Beginner: Fundamental Programming",
      skills: [
        { name: "Programming Core", desc: "Master basic syntax, loops, conditionals, and variables in Python, JavaScript, or Java." },
        { name: "Git & Version Control", desc: "Learn to track code edits, resolve conflicts, and commit work to GitHub/GitLab." },
        { name: "Command Line Basics", desc: "Comfortably navigate systems, run commands, and script basic files in terminal shells." },
        { name: "HTML & CSS Basics", desc: "Build the structural layout and style simple web documents using markup." }
      ]
    },
    intermediate: {
      title: "Intermediate: Advanced UI & Architecture",
      skills: [
        { name: "Data Structures & Algorithms", desc: "Understand arrays, lists, maps, trees, search/sort algorithms, and space/time complexity." },
        { name: "Modern Frameworks", desc: "Learn component-based UI building using React, Next.js, or Vue." },
        { name: "Databases & API Integration", desc: "Create RESTful or GraphQL APIs, and run queries against SQL (PostgreSQL) or NoSQL (MongoDB)." },
        { name: "Testing Principles", desc: "Write unit, integration, and end-to-end tests using Jest, Vitest, or Cypress." }
      ]
    },
    advanced: {
      title: "Advanced: System Design & Scaling",
      skills: [
        { name: "System Design", desc: "Study load balancing, caching mechanisms, microservices, databases scaling, and CDNs." },
        { name: "CI/CD & DevOps", desc: "Automate code deployments using GitHub Actions, Docker containers, and Cloud Hosting (AWS/Vercel)." },
        { name: "Security & Authentication", desc: "Secure endpoints with JWTs, OAuth 2.0, SSL encryption, and prevent SQL injection/XSS." }
      ]
    },
    professional: {
      title: "Professional: Leadership & Optimization",
      skills: [
        { name: "Architecture Patterns", desc: "Apply Clean Architecture, Domain-Driven Design (DDD), and design patterns." },
        { name: "Performance Optimization", desc: "Optimize page loading times, database index tuning, and runtime profiling." },
        { name: "Technical Leadership", desc: "Lead project design decisions, mentor other developers, and write RFC technical proposals." }
      ]
    },
    certifications: [
      { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services (AWS)" },
      { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta (via Coursera)" },
      { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "The Linux Foundation" }
    ],
    resources: [
      { name: "The Odin Project", type: "Website", desc: "A free, full-stack open-source curriculum focused on JavaScript and Ruby on Rails." },
      { name: "LeetCode", type: "Website", desc: "Excellent practice ground to train for technical coding interviews." },
      { name: "Full Stack Open", type: "Course", desc: "Deep-dive course by University of Helsinki on React, Node.js, GraphQL, and Docker." }
    ],
    projects: [
      { name: "Collaborative Task Manager", desc: "A real-time Kanban board where multiple users can register, assign tasks, and see updates instantly.", tech: ["Next.js", "Tailwind CSS", "Node.js", "Socket.io", "MongoDB"] },
      { name: "E-Commerce Gateway", desc: "A store frontend and checkout API featuring catalog search, cart sessions, stripe payment processing, and admin dashboard.", tech: ["TypeScript", "React", "PostgreSQL", "Stripe API", "Express"] }
    ]
  },
  "data-scientist": {
    careerId: "data-scientist",
    careerTitle: "Data Scientist",
    timeline: "9 - 15 Months",
    beginner: {
      title: "Beginner: Mathematics & Foundations",
      skills: [
        { name: "Python Programming", desc: "Learn core Python syntax, lists, functions, and file structures." },
        { name: "Linear Algebra & Calculus", desc: "Understand vectors, matrices, derivatives, gradients, and optimization concepts." },
        { name: "SQL Basics", desc: "Write relational database queries using SELECT, JOIN, WHERE, and GROUP BY." },
        { name: "Data Manipulation Basics", desc: "Use Python libraries like Pandas and NumPy to clean and filter table rows." }
      ]
    },
    intermediate: {
      title: "Intermediate: Modeling & Analytics",
      skills: [
        { name: "Exploratory Data Analysis", desc: "Perform outlier detection, handle missing data, and analyze statistical correlations." },
        { name: "Supervised Learning", desc: "Build regression and classification models using Scikit-Learn (Linear Regression, Decision Trees)." },
        { name: "Data Visualization", desc: "Plot clean plots with Matplotlib/Seaborn and build corporate dashboards in Tableau or PowerBI." },
        { name: "Feature Engineering", desc: "Learn scaling, one-hot encoding, feature selection, and dimensionality reduction." }
      ]
    },
    advanced: {
      title: "Advanced: Deep Learning & Big Data",
      skills: [
        { name: "Unsupervised Learning", desc: "Apply K-Means clustering, PCA, and anomaly detection algorithms." },
        { name: "Deep Learning Foundations", desc: "Understand neural networks, activation functions, backpropagation using PyTorch or TensorFlow." },
        { name: "Big Data Processing", desc: "Query databases distributed across clusters using Apache Spark (PySpark) and Hadoop." }
      ]
    },
    professional: {
      title: "Professional: ML Ops & Strategy",
      skills: [
        { name: "Model Deployment & MLOps", desc: "Deploy models as web APIs using Flask/FastAPI, containerized with Docker and tracked with MLflow." },
        { name: "NLP & Generative AI", desc: "Fine-tune LLMs, design Retrieval-Augmented Generation (RAG) pipelines, and process textual data." },
        { name: "Business Analytics Strategy", desc: "Define data projects that map directly to ROI and business targets, advising C-suite leaders." }
      ]
    },
    certifications: [
      { name: "Google Professional Data Engineer", issuer: "Google Cloud" },
      { name: "IBM Data Science Professional Certificate", issuer: "IBM (via Coursera)" },
      { name: "TensorFlow Developer Certificate", issuer: "TensorFlow (via DeepLearning.AI)" }
    ],
    resources: [
      { name: "Kaggle", type: "Website", desc: "The ultimate hub for datasets, coding notebooks, and competitive machine learning challenges." },
      { name: "Introduction to Statistical Learning", type: "Book", desc: "The gold-standard text outlining core statistical methods and modeling equations." },
      { name: "Machine Learning Specialization", type: "Course", desc: "Andrew Ng's world-famous introduction to machine learning concepts." }
    ],
    projects: [
      { name: "Real Estate Price Predictor", desc: "A regression pipeline analyzing historical house listings to forecast sales prices, deployed as a web API.", tech: ["Python", "Scikit-Learn", "FastAPI", "Docker", "Heroku"] },
      { name: "Customer Churn Classifier", desc: "A classification system identifying telecommunication clients prone to cancellation, providing insight matrices.", tech: ["Python", "Pandas", "XGBoost", "Streamlit", "PowerBI"] }
    ]
  },
  "ui-ux-designer": {
    careerId: "ui-ux-designer",
    careerTitle: "UI/UX Designer",
    timeline: "6 - 9 Months",
    beginner: {
      title: "Beginner: Core Design Principles",
      skills: [
        { name: "Design Theory", desc: "Understand composition, grid layouts, typography hierarchies, contrast, and color palettes." },
        { name: "Figma Fundamentals", desc: "Learn layers, frames, vectors, component building, and basic layout tools." },
        { name: "UX Foundations", desc: "Learn key laws of UX (Fitts's Law, Jakob's Law) and user-centered design frameworks." }
      ]
    },
    intermediate: {
      title: "Intermediate: Research & Prototyping",
      skills: [
        { name: "User Research & Persona", desc: "Conduct qualitative user interviews, distribute surveys, and write detailed persona files." },
        { name: "Wireframing & Workflows", desc: "Translate user research into structured low-fidelity site wireframes and navigation flows." },
        { name: "High-Fidelity Prototyping", desc: "Connect Figma frames using triggers, transitions, and smart-animate rules for realistic mocks." },
        { name: "Usability Testing", desc: "Run interactive sessions where users test prototypes to log navigation errors and friction." }
      ]
    },
    advanced: {
      title: "Advanced: Scale & Systems",
      skills: [
        { name: "Design Systems", desc: "Build comprehensive component libraries (atoms, molecules) using Figma auto-layout and variables." },
        { name: "UX Writing & Copy", desc: "Write engaging, clean, and helpful microcopy for error screens, tooltips, and menu buttons." },
        { name: "Accessibility (WCAG)", desc: "Ensure designs comply with contrast ratios, screen-reader requirements, and font sizes." }
      ]
    },
    professional: {
      title: "Professional: Design Strategy & Handoff",
      skills: [
        { name: "Developer Handoff", desc: "Annotate design measurements, explain responsive design shifts, and organize clean file layers." },
        { name: "Design Strategy & Metrics", desc: "Map UI enhancements directly to business metrics like conversion rate, retention, and NPS." },
        { name: "Leadership & Critique", desc: "Facilitate productive review workshops, direct creative design squads, and shape product strategy." }
      ]
    },
    certifications: [
      { name: "Google UX Design Professional Certificate", issuer: "Google (via Coursera)" },
      { name: "Nielsen Norman Group UX Certification", issuer: "Nielsen Norman Group (NN/g)" },
      { name: "Interaction Design Foundation membership", issuer: "IxDF" }
    ],
    resources: [
      { name: "Laws of UX", type: "Website", desc: "A collection of the maxim principles designers must follow when creating user interfaces." },
      { name: "Refactoring UI", type: "Book", desc: "A highly practical book explaining how to make software look beautiful using developer-friendly rules." },
      { name: "Growth.design", type: "Website", desc: "Interactive comic-book style case studies analyzing UX design successes and failures of major apps." }
    ],
    projects: [
      { name: "EcoRoute Transit Mobile App", desc: "A complete mobile app UI designed in Figma facilitating eco-friendly navigation routes. Includes user testing docs.", tech: ["Figma", "FigJam", "Miro", "Maze (Testing)"] },
      { name: "Recipe Swap Desktop Portal", desc: "A desktop community website design containing a custom style guide, fluid grid, and complex search filter views.", tech: ["Figma Design Systems", "UI Kit Development"] }
    ]
  },
  "digital-marketer": {
    careerId: "digital-marketer",
    careerTitle: "Digital Marketer",
    timeline: "4 - 8 Months",
    beginner: {
      title: "Beginner: Core Channels",
      skills: [
        { name: "Marketing Fundamentals", desc: "Understand target markets, marketing funnels (AIDA), customer segments, and value propositions." },
        { name: "Social Media Basics", desc: "Manage and create engaging content updates for Facebook, Instagram, LinkedIn, and TikTok." },
        { name: "Content Creation", desc: "Learn to write persuasive headlines, social media posts, and design simple graphics in Canva." }
      ]
    },
    intermediate: {
      title: "Intermediate: Search & Copywriting",
      skills: [
        { name: "Search Engine Optimization", desc: "Master keyword research, on-page optimization, site audit tools, and link-building tactics." },
        { name: "Email Marketing", desc: "Draft marketing newsletters, design signup lead magnets, and use automations (Mailchimp/Klaviyo)." },
        { name: "Web Analytics", desc: "Install tracking tags, read traffic dashboards in Google Analytics 4, and track marketing UTMs." }
      ]
    },
    advanced: {
      title: "Advanced: Paid Acquisition & CRO",
      skills: [
        { name: "Paid Advertising (PPC)", desc: "Set up target audiences and launch ad sets in Google Ads and Meta Ads Manager." },
        { name: "Copywriting & Storytelling", desc: "Write highly persuasive, long-form landing page copy and advertising sales hooks." },
        { name: "Conversion Optimization (CRO)", desc: "Conduct A/B tests on button placements, hero headlines, and form layouts to increase sales." }
      ]
    },
    professional: {
      title: "Professional: Growth & Strategy",
      skills: [
        { name: "Marketing Automation", desc: "Build advanced multi-step nurture funnels triggered by behavioral events and purchase actions." },
        { name: "Budget Optimization", desc: "Allocate advertising budgets across channels, calculating customer acquisition cost (CAC) and LTV." },
        { name: "Growth Hacking", desc: "Implement viral referral loops and creative engineering tactics to multiply word-of-mouth growth." }
      ]
    },
    certifications: [
      { name: "Google Analytics 4 Certification", issuer: "Google Digital Academy" },
      { name: "HubSpot Inbound Marketing Certification", issuer: "HubSpot Academy" },
      { name: "Meta Certified Digital Marketing Associate", issuer: "Meta Blueprint" }
    ],
    resources: [
      { name: "Backlinko SEO Hub", type: "Website", desc: "Detailed, step-by-step guides to understanding SEO, backlinks, and search updates." },
      { name: "HubSpot Academy", type: "Website", desc: "Free online courses covering inbound marketing, sales, content creation, and software tutorials." },
      { name: "Marketing Examples", type: "Website", desc: "A gallery of brilliant copy, advertising layout, and growth strategies from actual companies." }
    ],
    projects: [
      { name: "Local Gym Launch Campaign", desc: "A comprehensive digital launch campaign plan covering keyword lists, ad creative copies, and funnel layout drafts.", tech: ["Canva", "Google Ads Planner", "Mailchimp", "Figma"] },
      { name: "E-Commerce Email Funnel", desc: "A full set of automated email flows (Welcome Series, Abandoned Cart, Post-Purchase) with written copy and triggers.", tech: ["Klaviyo", "Copywriting", "Figma"] }
    ]
  },
  "cybersecurity-analyst": {
    careerId: "cybersecurity-analyst",
    careerTitle: "Cybersecurity Analyst",
    timeline: "8 - 14 Months",
    beginner: {
      title: "Beginner: Networks & Operating Systems",
      skills: [
        { name: "Computer Networking", desc: "Master OSI model, TCP/IP protocol suite, subnets, routing, DNS, and port numbering." },
        { name: "Linux Administration", desc: "Learn file system structure, permissions, process monitoring, and bash scripting command basics." },
        { name: "Security Core", desc: "Understand encryption concepts, sym/asymmetric keys, hashing, and access control models." }
      ]
    },
    intermediate: {
      title: "Intermediate: Operations & Defenses",
      skills: [
        { name: "Vulnerability Management", desc: "Perform system vulnerability scans using tools like Nessus, evaluating threat severities." },
        { name: "SIEM & Monitoring", desc: "Analyze network traffic logs and system event logs using platforms like Splunk or Wireshark." },
        { name: "Firewalls & Endpoint Security", desc: "Configure system firewalls, IDS/IPS rules, and manage antivirus/EDR installations." },
        { name: "Incident Response", desc: "Learn standard playbooks to contain, eradicate, and recover systems after malware or network breaches." }
      ]
    },
    advanced: {
      title: "Advanced: Pentesting & Offenses",
      skills: [
        { name: "Ethical Hacking basics", desc: "Understand attack methods, port scanning, system enumeration, and exploitation in lab servers." },
        { name: "Web Application Security", desc: "Analyze the OWASP Top 10 vulnerabilities (XSS, SQL Injection, CSRF) and remediation methods." },
        { name: "Python for Security", desc: "Write scripts to automate scanning, parse logs, or generate custom test requests." }
      ]
    },
    professional: {
      title: "Professional: Architecture & Compliance",
      skills: [
        { name: "Security Architecture", desc: "Design zero-trust systems, secure network zones, cloud environment setups, and identity structures." },
        { name: "Audits & Compliance", desc: "Prepare infrastructure audit logs to comply with SOC2, ISO 27001, HIPAA, and GDPR regulations." },
        { name: "Disaster Recovery", desc: "Build organizational business continuity policies, backup plans, and command structure for crisis management." }
      ]
    },
    certifications: [
      { name: "CompTIA Security+", issuer: "CompTIA" },
      { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
      { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC2 (Usually requires 5 years of experience)" }
    ],
    resources: [
      { name: "TryHackMe", type: "Website", desc: "An outstanding gamified learning platform with virtual labs teaching security concepts hands-on." },
      { name: "PortSwigger Web Security Academy", type: "Website", desc: "Free, world-class training tutorials and labs focusing on web application security exploits." },
      { name: "Cybrary", type: "Course", desc: "A comprehensive video library offering training on cybersecurity certifications and job paths." }
    ],
    projects: [
      { name: "Intrusion Detection System Lab", desc: "A virtual network lab using Snort IDS rules to monitor mock server traffic and trigger alerts on port scanning.", tech: ["Linux", "Snort", "Wireshark", "VirtualBox"] },
      { name: "Secure Web Application Server", desc: "A mock login application constructed with security filters, JWT session validation, input sanitization, and SQL escape.", tech: ["Node.js", "Express", "SQLite", "HelmetJS", "HTTPS"] }
    ]
  },
  "product-manager": {
    careerId: "product-manager",
    careerTitle: "Product Manager",
    timeline: "6 - 10 Months",
    beginner: {
      title: "Beginner: Product Foundations",
      skills: [
        { name: "Product Lifecycle", desc: "Understand product development phases from ideation and validation to MVP, scaling, and decline." },
        { name: "Agile Framework", desc: "Learn scrum ceremonies, write user stories, write acceptance criteria, and navigate Jira." },
        { name: "Market Research", desc: "Analyze competitor products, construct feature tables, and search for gaps in user markets." }
      ]
    },
    intermediate: {
      title: "Intermediate: Metrics & Execution",
      skills: [
        { name: "Product Analytics", desc: "Track usage analytics using Amplitude/Mixpanel and define key metrics (North Star, retention, LTV)." },
        { name: "User Research & Testing", desc: "Design focus group questionnaires, run prototype interviews, and synthesize feedback." },
        { name: "Backlog Management", desc: "Prioritize features using frameworks like RICE (Reach, Impact, Confidence, Effort) or MoSCoW." }
      ]
    },
    advanced: {
      title: "Advanced: Strategy & Alignment",
      skills: [
        { name: "Roadmap Creation", desc: "Build strategic roadmaps that group features into thematic goals (Now, Next, Later)." },
        { name: "Stakeholder Negotiation", desc: "Manage engineering bandwidth, alignment with designers, and reporting timelines to executives." },
        { name: "Business Modeling", desc: "Analyze unit economics, pricing strategies, subscription tiering, and market viability." }
      ]
    },
    professional: {
      title: "Professional: Product Leadership",
      skills: [
        { name: "Product-Led Growth (PLG)", desc: "Build self-serve onboarding flows and viral loops that drive user acquisition through the product." },
        { name: "Product Portfolio Management", desc: "Manage multiple product lines, allocate resources, and orchestrate brand positioning." },
        { name: "Vision & Leadership", desc: "Inspire large cross-functional teams, hire design and engineering talent, and write business strategies." }
      ]
    },
    certifications: [
      { name: "Pragmatic Product Management Certification", issuer: "Pragmatic Institute" },
      { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" },
      { name: "Product Management Certificate", issuer: "Product School" }
    ],
    resources: [
      { name: "Inspired", type: "Book", desc: "Marty Cagan's ultimate handbook on how to build software products customers love." },
      { name: "Lenny's Newsletter", type: "Website", desc: "The number one newsletter detailing real product advice, growth frameworks, and career tips." },
      { name: "Product Alliance", type: "Course", desc: "Deep-dive video lessons preparing candidates to pass product management interviews." }
    ],
    projects: [
      { name: "PetConnect App MVP Spec", desc: "A complete Product Requirement Document (PRD) detailing user stories, visual wireframes, user testing logs, and feature release maps.", tech: ["Jira", "Figma", "Google Docs", "Product School PRD Template"] },
      { name: "SaaS Dashboard Redesign Roadmap", desc: "A strategic roadmap detailing the modernization of a billing platform using RICE score priority tables.", tech: ["Miro", "RICE Matrix", "Productboard"] }
    ]
  }
};
