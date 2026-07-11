// ============================================================
// PORTFOLIO TYPES
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  category: "ai" | "web" | "mobile" | "other";
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  icon: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  color?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  year: string;
  icon: string;
  technologies?: string[];
  current?: boolean;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
  description?: string;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
  username?: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  streak: number;
  submissionCalendar?: Record<string, number>;
}
