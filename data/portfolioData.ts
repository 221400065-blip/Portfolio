export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  experienceLevel: string;
  specialization: string;
  aboutMe: string;
  shortBio: string;
  editorialStatement: string;
}

export interface SocialLink {
  name: string;
  url: string;
  display: boolean;
  badge?: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend & AI" | "Mobile & Design";
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  isReal: boolean;
  type: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  features: string[];
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  experienceYears: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  score: string;
  description: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Ayesha Tahir",
    title: "Full Stack Developer & AI Chatbot Developer",
    roles: [
      "FULL STACK DEVELOPER",
      "AI CHATBOT DEVELOPER"
    ],
    location: "Pakistan",
    email: "ayeshatahirshehbaz@gmail.com",
    phone: "03286140499",
    experienceLevel: "1 Year Professional Experience",
    specialization: "Full Stack & AI Chatbots",
    aboutMe:
      "I am Ayesha Tahir, a Full Stack Developer with a passion for modern web technologies, AI-powered solutions, and creative problem-solving.",
    shortBio:
      "I build powerful digital experiences through modern web technologies, intelligent AI solutions, and thoughtful design.",
    editorialStatement:
      "BUILDING DIGITAL EXPERIENCES THAT MATTER."
  } as PersonalInfo,

  socialLinks: {
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayesha-tahir-918448383/",
      display: true,
      badge: "Connect"
    },
    fiverr: {
      name: "Fiverr",
      // Public Fiverr profile URL
      url: "https://www.fiverr.com/ayeshatahir",
      display: true,
      badge: "Order Services"
    },
    email: {
      name: "Email",
      url: "mailto:ayeshatahirshehbaz@gmail.com",
      display: true
    },
    phone: {
      name: "Phone",
      url: "tel:+923286140499",
      display: true
    }
  },

  // EXACT 10 TECHNICAL SKILLS (Strict requirement: no invented skill percentages)
  skills: [
    {
      name: "HTML",
      category: "Frontend",
      description: "Semantic structures, accessible layout trees, and standards-compliant document engineering."
    },
    {
      name: "CSS",
      category: "Frontend",
      description: "Modern CSS3 architectures, responsive grid & flexbox systems, and fluid micro-animations."
    },
    {
      name: "JavaScript",
      category: "Frontend",
      description: "Core ES6+, asynchronous programming, DOM APIs, and scalable modular logic."
    },
    {
      name: "React.js",
      category: "Frontend",
      description: "Component architecture, declarative state management, custom hooks, and interface lifecycle."
    },
    {
      name: "Next.js",
      category: "Frontend",
      description: "App Router, SSR, Turbopack, Server Components, and optimized high-performance deployments."
    },
    {
      name: "React Native",
      category: "Mobile & Design",
      description: "Cross-platform iOS and Android mobile development with fluid native interactions."
    },
    {
      name: "Python",
      category: "Backend & AI",
      description: "Backend development, automated scripting, clean data processing, and algorithmic workflows."
    },
    {
      name: "AI Chatbot Development",
      category: "Backend & AI",
      description: "Conversational system design, dialogue tree flows, natural language query handling, and automation."
    },
    {
      name: "UI/UX Designing",
      category: "Mobile & Design",
      description: "Editorial hierarchies, wireframing, high-contrast dark aesthetics, and neumorphic tactile interfaces."
    },
    {
      name: "Documentation",
      category: "Mobile & Design",
      description: "System architectures, API reference guides, developer handover specs, and technical manuals."
    }
  ] as SkillItem[],

  // EXACT 7 PROFESSIONAL SERVICES
  services: [
    {
      id: "website-dev",
      number: "01",
      title: "Website Development",
      description:
        "Custom, responsive, and SEO-optimized website engineering built with clean semantic code and fast load times.",
      features: [
        "100% Mobile & Desktop Responsive",
        "Semantic HTML5 & Modern CSS3",
        "Performance & Page Speed Tuning",
        "Cross-Browser Compatibility"
      ]
    },
    {
      id: "full-stack-dev",
      number: "02",
      title: "Full Stack Development",
      description:
        "End-to-end web applications combining robust frontend user interfaces with secure, reliable backend logic and databases.",
      features: [
        "Next.js App Router Architecture",
        "REST API Design & Integration",
        "Database Schema Engineering",
        "Full Application Lifecycle"
      ]
    },
    {
      id: "ai-chatbot-dev",
      number: "03",
      title: "AI Chatbot Development",
      description:
        "Intelligent conversational assistants engineered to handle client inquiries, support automation, and lead generation 24/7.",
      features: [
        "Automated Query Resolution",
        "Custom Dialogue Flow Architecture",
        "Web Application Embeds",
        "Context-Aware Fallback Systems"
      ]
    },
    {
      id: "react-native-dev",
      number: "04",
      title: "React Native App Development",
      description:
        "Performant cross-platform mobile apps for iOS and Android with intuitive touch ergonomics and smooth screen transitions.",
      features: [
        "Cross-Platform Mobile Codebase",
        "Fluid Micro-Interactions",
        "Responsive Touch Interfaces",
        "Modular Component Architecture"
      ]
    },
    {
      id: "ui-ux-design",
      number: "05",
      title: "UI/UX Designing",
      description:
        "Editorial-grade design systems, typography hierarchy, user wireframing, and subtle neumorphic tactile aesthetics.",
      features: [
        "Editorial Monochrome Aesthetics",
        "Tactile Neumorphic Systems",
        "User Journey & Wireframing",
        "Design System Consistency"
      ]
    },
    {
      id: "python-dev",
      number: "06",
      title: "Python Development",
      description:
        "Reliable Python scripting, task automation, backend endpoints, and structured data handling workflows.",
      features: [
        "Task & Workflow Automation",
        "API Integration & Scripting",
        "Maintainable Object-Oriented Code",
        "Data Validation & Processing"
      ]
    },
    {
      id: "documentation",
      number: "07",
      title: "Documentation",
      description:
        "Exhaustive technical documentation, architectural diagrams, API guides, and maintenance manuals.",
      features: [
        "System Architecture Schematics",
        "API Guides & Endpoints Specs",
        "Developer Handover Manuals",
        "Structured Markdown Documentation"
      ]
    }
  ] as ServiceItem[],

  // EXACT 6 PROJECTS (5 Real Codqor projects + 1 Modern Personal Portfolio)
  projects: [
    {
      id: "proj-ledger",
      number: "01",
      title: "Ledger Management System",
      isReal: true,
      type: "Completed Project (Codqor Technologies)",
      description:
        "Full-stack financial ledger application engineered for credit and debit tracking, dynamic account balancing, transaction logging, and verifiable financial records.",
      technologies: ["React.js", "Python", "Database Development", "Full Stack"],
      thumbnail: "/images/projects/real-ledger.svg",
      features: [
        "Double-entry bookkeeping validation",
        "Dynamic balance calculation and statements",
        "Structured transaction logs with audit history",
        "Administrative reporting and data queries"
      ]
    },
    {
      id: "proj-hr",
      number: "02",
      title: "HR Management System",
      isReal: true,
      type: "Completed Project (Codqor Technologies)",
      description:
        "Comprehensive human resources management platform supporting employee directories, attendance records, department hierarchies, and status workflows.",
      technologies: ["Full Stack", "React.js", "Database Development", "UI/UX Designing"],
      thumbnail: "/images/projects/real-hr.svg",
      features: [
        "Centralized employee directory records",
        "Department hierarchy and role assignment",
        "Attendance and leave request tracking",
        "Administrative dashboard overviews"
      ]
    },
    {
      id: "proj-school",
      number: "03",
      title: "School Management System",
      isReal: true,
      type: "Completed Project (Codqor Technologies)",
      description:
        "Institutional management platform providing student enrollment management, class schedules, fee tracking, and academic record keeping.",
      technologies: ["Frontend Development", "Backend Development", "Database", "HTML/CSS"],
      thumbnail: "/images/projects/real-school.svg",
      features: [
        "Student enrollment and academic lifecycle records",
        "Class schedule and subject allocation",
        "Fee record maintenance and invoice logging",
        "Separated administrative and faculty views"
      ]
    },
    {
      id: "proj-ecommerce",
      number: "04",
      title: "E-commerce Website",
      isReal: true,
      type: "Completed Project (Codqor Technologies)",
      description:
        "Full-stack commercial storefront featuring dynamic product catalogs, inventory display, shopping cart management, and order checkout flows.",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Full Stack"],
      thumbnail: "/images/projects/real-ecommerce.svg",
      features: [
        "Dynamic product catalog and category filters",
        "Cart state management and order checkout flow",
        "Responsive design across mobile and desktop",
        "Backend database synchronization for product listings"
      ]
    },
    {
      id: "proj-chatbot",
      number: "05",
      title: "AI Chatbot",
      isReal: true,
      type: "Completed Project (Codqor Technologies)",
      description:
        "Intelligent conversational AI chatbot developed for customer query resolution, interactive assistance, and automated communication.",
      technologies: ["AI Chatbot Development", "Python", "Full Stack", "Documentation"],
      thumbnail: "/images/projects/real-chatbot.svg",
      features: [
        "Context-aware query handling and responses",
        "Smooth conversation flow with fallbacks",
        "Integration into web frontend interfaces",
        "Documented architecture and dialogue rules"
      ]
    },
    {
      id: "proj-portfolio",
      number: "06",
      title: "Modern Personal Portfolio",
      isReal: false,
      type: "Demonstration / Portfolio Concept",
      description:
        "High-end editorial developer portfolio combining cinematic monochrome aesthetics, subtle tactile neumorphism, ATS-friendly CV export, and responsive mobile architecture.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      thumbnail: "/images/projects/demo-portfolio.svg",
      features: [
        "Editorial typography and monochrome art direction",
        "Neumorphic dual-shadow tactile surfaces",
        "ATS-friendly PDF CV generator integration",
        "Fluid entrance and scroll-reveal animations"
      ]
    }
  ] as ProjectItem[],

  // EXACT EXPERIENCE (Codqor Technologies, 1 Year, 4 responsibilities)
  experience: [
    {
      company: "Codqor Technologies",
      position: "Full Stack Developer",
      duration: "2025 – 2026",
      experienceYears: "1 Year",
      responsibilities: [
        "Frontend Development",
        "Backend Development",
        "Database Development",
        "Full Stack Application Development"
      ]
    }
  ] as ExperienceItem[],

  // EXACT EDUCATION (3 institutions)
  education: [
    {
      degree: "BS Software Engineering",
      institution: "Gift University, Gujranwala",
      year: "2026",
      status: "Graduating 2026"
    },
    {
      degree: "Intermediate / Higher Secondary",
      institution: "Post Graduate College, Satellite Town, Gujranwala",
      year: "Prior",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (Matriculation)",
      institution: "Govt Girls High School, Gujranwala",
      year: "Prior",
      status: "Completed"
    }
  ] as EducationItem[],

  // EXACT ACHIEVEMENT (NSCT, 2026, 90% marks, HEC-associated)
  achievement: {
    title: "National Skill Competency Test (NSCT)",
    organization: "Higher Education Commission (HEC)",
    year: "2026",
    score: "90%",
    description:
      "Achieved 90% marks in the National Skill Competency Test (NSCT) associated with the Higher Education Commission (HEC), demonstrating verified mastery of core software engineering competencies and technical foundations."
  } as AchievementItem,

  cvFile: {
    name: "Ayesha-Tahir-CV.pdf",
    downloadUrl: "/Ayesha-Tahir-CV.pdf",
    lastUpdated: "2026",
    atsOptimized: true
  }
};
