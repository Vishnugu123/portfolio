import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ai-coaching-assistant",
    title: "AI Coaching Assistant",
    description:
      "An intelligent coaching platform that leverages LLMs to provide personalized mentorship, goal tracking, and adaptive learning paths.",
    longDescription:
      "Built a full-stack AI coaching assistant that uses GPT-4 to deliver personalized coaching sessions. Features include real-time conversation, progress analytics, and intelligent goal decomposition.",
    thumbnail: "/projects/ai-coaching.jpg",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "Real-time AI conversations with context memory",
      "Goal tracking with visual analytics dashboard",
      "Personalized learning path generation",
      "Progress reports and insights",
    ],
    githubUrl: "https://github.com/yourusername/ai-coaching-assistant",
    liveUrl: "https://ai-coaching.demo.dev",
    category: "ai",
    featured: true,
    year: "2024",
  },
  {
    id: "khelo-cricket",
    title: "KheloCricket",
    description:
      "A cricket fantasy and live score platform with real-time match updates, player stats, and team management.",
    longDescription:
      "Full-stack cricket platform featuring live score updates via WebSockets, fantasy team management, player statistics, and a tournament bracket system.",
    thumbnail: "/projects/cricket.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis"],
    features: [
      "Live match scores via WebSockets",
      "Fantasy cricket team builder",
      "Player statistics and analytics",
      "Tournament bracket management",
    ],
    githubUrl: "https://github.com/yourusername/khelo-cricket",
    liveUrl: "https://khelocricket.demo.dev",
    category: "web",
    featured: true,
    year: "2024",
  },
  {
    id: "fitness-tracker",
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with AI-powered workout recommendations, nutrition logging, and progress visualization.",
    longDescription:
      "Mobile-first fitness application with AI workout recommendations based on user fitness level, goals, and historical data. Includes nutrition tracking and beautiful progress charts.",
    thumbnail: "/projects/fitness.jpg",
    techStack: ["React Native", "Python", "FastAPI", "PostgreSQL", "TensorFlow Lite"],
    features: [
      "AI-powered workout recommendations",
      "Nutrition logging with barcode scanner",
      "Body measurement and progress charts",
      "Workout streak and gamification",
    ],
    githubUrl: "https://github.com/yourusername/fittrack-pro",
    category: "mobile",
    featured: true,
    year: "2024",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This very portfolio — a modern, premium developer portfolio with LeetCode integration, dark mode, and smooth animations.",
    thumbnail: "/projects/portfolio.jpg",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "LeetCode daily tracker integration",
      "Dark / Light theme toggle",
      "Animated statistics and counters",
      "Fully responsive design",
    ],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.dev",
    category: "web",
    featured: false,
    year: "2025",
  },
];
