import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "🐍", color: "#3776AB", level: "expert" },
      { name: "TypeScript", icon: "TS", color: "#3178C6", level: "intermediate" },
      { name: "JavaScript", icon: "JS", color: "#F7DF1E", level: "intermediate" },
      { name: "C", icon: "C", color: "#ED8B00", level: "intermediate" },
      { name: "C++", icon: "⚡", color: "#00599C", level: "intermediate" },
      { name: "SQL", icon: "🗄️", color: "#336791", level: "intermediate" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", icon: "⚛️", color: "#61DAFB", level: "expert" },
      // { name: "Next.js", icon: "▲", color: "#000000", level: "expert" },
      // { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", level: "expert" },
      // { name: "Framer Motion", icon: "✨", color: "#BB4B96", level: "advanced" },
      // { name: "Redux", icon: "💾", color: "#764ABC", level: "advanced" },
      { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", level: "expert" },
      { name: "HTML5/CSS3", icon: "🌐", color: "#E34F26", level: "expert" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: [
      // { name: "Node.js", icon: "🟢", color: "#339933", level: "expert" },
      // { name: "Express.js", icon: "🚀", color: "#000000", level: "expert" },
      { name: "FastAPI", icon: "⚡", color: "#009688", level: "advanced" },
      { name: "Django", icon: "🎸", color: "#092E20", level: "intermediate" },
      { name: "REST APIs", icon: "🔗", color: "#FF6C37", level: "expert" },
      { name: "GraphQL", icon: "◈", color: "#E10098", level: "advanced" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "TensorFlow", icon: "🧠", color: "#FF6F00", level: "advanced" },
      { name: "PyTorch", icon: "🔥", color: "#EE4C2C", level: "advanced" },
      { name: "OpenAI API", icon: "🤖", color: "#412991", level: "expert" },
      { name: "LangChain", icon: "⛓️", color: "#1C3C3C", level: "advanced" },
      { name: "Scikit-learn", icon: "📊", color: "#F7931E", level: "advanced" },
      { name: "Hugging Face", icon: "🤗", color: "#FFD21E", level: "intermediate" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791", level: "advanced" },
      { name: "MongoDB", icon: "🍃", color: "#47A248", level: "expert" },
      // { name: "Redis", icon: "🔴", color: "#DC382D", level: "advanced" },
      { name: "MySQL", icon: "🐬", color: "#4479A1", level: "advanced" },
      // { name: "Prisma", icon: "◆", color: "#2D3748", level: "advanced" },
      // { name: "Supabase", icon: "⚡", color: "#3ECF8E", level: "intermediate" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      // { name: "AWS", icon: "☁️", color: "#FF9900", level: "intermediate" },
      { name: "Vercel", icon: "▲", color: "#000000", level: "expert" },
      { name: "Docker", icon: "🐳", color: "#2496ED", level: "advanced" },
      { name: "Git/GitHub", icon: "🐙", color: "#181717", level: "expert" },
      // { name: "Linux", icon: "🐧", color: "#FCC624", level: "advanced" },
      // { name: "CI/CD", icon: "🔄", color: "#2088FF", level: "intermediate" },
    ],
  },
];
