// ============================================================
// Portfolio Data — Single source of truth
// ============================================================

export const personal = {
  name: "Tanmay Tambat",
  headline: "Software Engineering Intern at Josh Software",
  location: "Nashik, India",
  about:
    "Final-year Computer Engineering student at Josh Software, working on production systems. I have a strong passion for clean, maintainable code and understanding how systems behave over time. Previously built real-time inspection software at Medhavyn Technologies and won Smart India Hackathon 2024. Comfortable with Node.js, React, TypeScript, and Python; I enjoy debugging and performance work.",
  email: "tanmaytambat01@gmail.com",
  github: "https://github.com/OldStager01",
  linkedin: "https://www.linkedin.com/in/tanmay-tambat",
  portfolio: "https://tanmaytambat.vercel.app",
  resume: "/Tanmay_Resume.pdf",
} as const;

// ============================================================
// Experience
// ============================================================

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "Josh Software Inc.",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Present",
    location: "Pune, India",
    description: [
      "Worked on production-grade backend and frontend features for client-facing systems.",
      "Designed and implemented REST APIs and background workflows using Go, focusing on correctness and maintainability.",
      "Contributed to frontend components in React.js, improving usability and fixing edge-case bugs.",
      "Collaborated with senior engineers on code reviews, debugging production issues, and improving system reliability.",
    ],
    technologies: ["GoLang", "React.js", "AWS"],
  },
  {
    company: "Medhavyn Technologies",
    role: "Full-Stack Developer Intern",
    period: "Jun 2025 – Nov 2025",
    location: "Nashik, India",
    description: [
      "Worked on a live industrial project for real-time part inspection and object detection integrated with an ERP system.",
      "Built full-stack features using Node.js, Express.js, TypeScript, and React.js with seamless frontend–backend integration.",
      "Implemented real-time updates and scalable APIs using WebSockets, Redis, MikroORM, Redux, and TanStack Query.",
      "Optimized the object detection pipeline, improving inference time by 80% for real-time processing.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "React.js",
      "Redis",
      "WebSockets",
      "MikroORM",
    ],
  },
];

// ============================================================
// Projects (curated top 5)
// ============================================================

export interface Project {
  name: string;
  tagline: string;
  description: string[];
  technologies: string[];
  github: string;
  website?: string;
}

export const projects: Project[] = [
  {
    name: "Cloud Autoscaler",
    tagline:
      "Real-time cluster autoscaling platform with metrics visualization",
    description: [
      "Developed a full-stack autoscaling platform with a concurrent Go backend, REST APIs, metrics collection, and CPU/memory-based scaling.",
      "Built a real-time React + TypeScript dashboard and Dockerized the stack using Docker Compose, PostgreSQL, and TimescaleDB.",
    ],
    technologies: [
      "Go",
      "React",
      "TypeScript",
      "PostgreSQL",
      "TimescaleDB",
      "Docker",
    ],
    github: "https://github.com/OldStager01/cloud-autoscaler",
  },
  {
    name: "Fintech Fraud Detection",
    tagline:
      "Real-time fraud detection dashboard with transaction monitoring and risk analytics",
    description: [
      "Built a React + Vite frontend using TanStack Query, Redux, and Radix UI with interactive fraud visualizations and real-time risk scoring.",
      "Powered by a Rails API with PostgreSQL (Supabase), Solid Queue async jobs, SMTP alerts, SSL, and deployed on Render.",
    ],
    technologies: [
      "React",
      "Vite",
      "Ruby on Rails",
      "PostgreSQL",
      "Supabase",
      "Solid Queue",
      "REST APIs",
    ],
    github: "https://github.com/<your-username>/fintech-fraud-detection",
    website: "https://fintech-fraud-detection.vercel.app/",
  },
  {
    name: "Flicksta",
    tagline: "Curated Flickr image sharing platform",
    description: [
      "Built a curated image sharing platform with crawling and ranking powered by AWS and Redis, handling 50K+ images.",
      "Used HTMX, Jinja, and Alpine.js for a fast, SEO-optimized server-rendered UI with ~40% faster page loads.",
    ],
    technologies: ["Django", "AWS", "PostgreSQL", "Redis", "HTMX"],
    github: "https://github.com/OldStager01/flicksta",
    website: "https://flicksta.onrender.com",
  },
  {
    name: "Secure Banking Service App",
    tagline: "AI-powered banking platform",
    description: [
      "Developed a secure banking service app with offline face authentication and AI-powered ticket automation achieving 95%+ accuracy.",
      "Enforced SLAs and data validation using Zod across services.",
      "Built for the Smart India Hackathon 2024 (National Winner).",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Zod"],
    github: "https://github.com/OldStager01/vyom_ext_union_bank",
  },
  {
    name: "P2P File Transfer",
    tagline: "Cross-platform peer-to-peer file sharing",
    description: [
      "Built a cross-platform P2P file transfer app for fast local and cloud-based file sharing.",
      "Implemented secure transfers with TCP sockets and Supabase, achieving ~25% faster speeds than HTTP sharing.",
    ],
    technologies: ["React Native", "TypeScript", "TCP Sockets", "Supabase"],
    github: "https://github.com/OldStager01/p2p-file-transfer",
  },
  {
    name: "Institute Analysis & Ranking",
    tagline: "SIH 2024 Winner - AI-based classroom monitoring — Copyrighted",
    description: [
      "Built an AI-based real-time classroom monitoring system analyzing 30+ students per session using facial and activity detection.",
      "Delivered automated session analytics, improving instructor feedback by ~45%.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "React.js",
      "Python",
      "PyTorch",
    ],
    github: "",
  },
  {
    name: "Tree Plantation Management",
    tagline: "NGO platform connecting individuals and organizations",
    description: [
      "Built a platform connecting individuals and NGOs to promote tree planting with role-based access and AI-powered features.",
      "Used Node.js and Express.js for a scalable backend API, Firebase for secure authentication and role management.",
    ],
    technologies: ["Node.js", "Express.js", "Firebase", "Gemini API"],
    github: "https://github.com/OldStager01/Tree-Plantation",
  },
];

// ============================================================
// Open Source
// ============================================================

export const openSource = {
  project: "React Native Document Picker",
  role: "Contributor",
  stat: "170K+ weekly downloads",
  url: "https://react-native-documents.github.io/",
} as const;

// ============================================================
// Achievements (ordered by impact)
// ============================================================

export interface Achievement {
  title: string;
  event: string;
  organizer: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Winner",
    event: "Smart India Hackathon 2024 — Software Edition",
    organizer: "Government of India",
    year: "2024",
  },
  {
    title: "Finalist",
    event: "iDEA Hackathon 2025",
    organizer: "Union Bank of India",
    year: "2025",
  },
  {
    title: "Winner",
    event: "Code Quest 2.0 2025",
    organizer: "Debuggers Club",
    year: "2025",
  },
  {
    title: "Runner-Up",
    event: "Web Battles 2024",
    organizer: "K.K.W.I.E.E.R.",
    year: "2024",
  },
  {
    title: "Winner",
    event: "Coda-a-Thon 2023 & Blind Coding 2023",
    organizer: "K.K.W.I.E.E.R.",
    year: "2023",
  },
];

// ============================================================
// Education
// ============================================================

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Engineering",
    institution: "K.K. Wagh Institute of Engineering Education and Research",
    period: "2022 – 2026",
    score: "8.80",
    scoreLabel: "CGPA",
  },
  {
    degree: "HSC (12th)",
    institution: "K.V.N. Naik Junior College, Nashik",
    period: "2020 – 2022",
    score: "82.33%",
    scoreLabel: "Percentage",
  },
];

// ============================================================
// Certifications (curated)
// ============================================================

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Academy Graduate",
    issuer: "AWS",
    year: "2025",
    url: "https://tanmaytambat.vercel.app/images/certifications/aws_academy_grad.jpg",
  },
  {
    name: "Programming in Modern C++",
    issuer: "NPTEL",
    year: "2023",
    url: "https://tanmaytambat.vercel.app/images/certifications/Programming_In_Modern_Cpp.jpg",
  },
  {
    name: "Google Cloud Study Jam",
    issuer: "Google Cloud",
    year: "2024",
    url: "https://tanmaytambat.vercel.app/images/certifications/STUDY_JAM_CERTIFICATES_67-67.jpg",
  },
];

// ============================================================
// Skills — flat list, grouped loosely. No icons, no grids.
// ============================================================

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "SQL",
      "GoLang",
      "Java",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "Node.js",
      "React.js",
      "Next.js",
      "Express.js",
      "Django",
      "React Native",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "AWS", "Redis"],
  },
];

// ============================================================
// Leadership
// ============================================================

export interface Leadership {
  title: string;
  role: string;
  period: string;
  description: string;
}

export const leadership: Leadership[] = [
  {
    title: "M.I.B.C.S. Club, K.K.W.I.E.E.R.",
    role: "Technical Head",
    period: "2024 – 2025",
    description:
      "Led a team of 20+ members, organizing 5+ events and workshops with 600+ participants.",
  },
  {
    title: "M.I.B.C.S. Club, K.K.W.I.E.E.R.",
    role: "Core-Committee Member",
    period: "2023 – 2024",
    description:
      "Organized 4+ events and workshops with 300+ participants, including coding competitions and tech talks.",
  },
  {
    title: "AWS EC2 & Git/GitHub Workshop",
    role: "Speaker",
    period: "2025",
    description:
      "Delivered a hands-on workshop to 100+ participants with 90%+ completion rate.",
  },
];

// ============================================================
// Navigation
// ============================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
