import { ExperienceItem, WorkflowStep } from "@/types";

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "programming-basics",
    phase: "Phase 1",
    title: "Learning Programming",
    description:
      "Started with C++ and Python, solving fundamental problems and understanding core CS concepts like data structures, algorithms, and OOP.",
    year: "2021",
    icon: "BookOpen",
    technologies: ["C++", "Python", "DSA"],
  },
  {
    id: "frontend",
    phase: "Phase 2",
    title: "Frontend Development",
    description:
      "Mastered React, built responsive UIs, and learned the art of creating delightful user experiences with modern CSS and component architectures.",
    year: "2022",
    icon: "Monitor",
    technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
  },
  {
    id: "backend",
    phase: "Phase 3",
    title: "Backend Development",
    description:
      "Built scalable REST APIs and learned server-side engineering with Node.js, Express, databases, authentication, and deployment.",
    year: "2023",
    icon: "Server",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    id: "ai-engineering",
    phase: "Phase 4",
    title: "AI Engineering",
    description:
      "Dived deep into machine learning, LLMs, and building AI-powered products using OpenAI, LangChain, and custom model fine-tuning.",
    year: "2024",
    icon: "Brain",
    technologies: ["Python", "OpenAI", "LangChain", "TensorFlow", "PyTorch","Sk-learn"],
  },
  {
    id: "full-stack",
    phase: "Phase 5",
    title: "Building Real Products",
    description:
      "Combining all skills to architect and ship full-stack products — from ideation to production, with a focus on performance, UX, and business impact.",
    year: "2025",
    icon: "Rocket",
    technologies: ["Next.js", "TypeScript", "AI/ML", "Cloud", "System Design"],
    current: true,
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "research",
    step: 1,
    title: "Research",
    description:
      "Deep-dive into the problem space. Understand user needs, explore technical constraints, and benchmark existing solutions before writing a single line of code.",
    icon: "Search",
    color: "emerald",
    details: [
      "Problem definition & scoping",
      "Competitive analysis",
      "Technical feasibility study",
      "Architecture planning",
    ],
  },
  {
    id: "build",
    step: 2,
    title: "Build",
    description:
      "Engineer clean, modular, and well-typed code. Focus on developer experience, maintainability, and shipping fast without sacrificing quality.",
    icon: "Hammer",
    color: "orange",
    details: [
      "Component-driven development",
      "Test-driven where possible",
      "Clean TypeScript & documentation",
      "Regular commits & code review",
    ],
  },
  {
    id: "optimize",
    step: 3,
    title: "Optimize",
    description:
      "Profile, measure, and iterate. From Lighthouse scores to database query plans — every millisecond matters in production systems.",
    icon: "Zap",
    color: "slate",
    details: [
      "Performance profiling",
      "Core Web Vitals optimization",
      "Database query optimization",
      "CI/CD and monitoring setup",
    ],
  },
];
