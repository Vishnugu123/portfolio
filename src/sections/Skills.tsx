"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Monitor, Server, Brain, Database, Cloud } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { SKILL_CATEGORIES } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, React.ElementType> = {
  languages: Code2,
  frontend: Monitor,
  backend: Server,
  "ai-ml": Brain,
  databases: Database,
  cloud: Cloud,
};

const levelColors: Record<string, string> = {
  expert: "bg-emerald-500",
  advanced: "bg-teal-500",
  intermediate: "bg-blue-500",
  beginner: "bg-slate-400",
};

const levelLabels: Record<string, string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  beginner: "Beginner",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <SectionWrapper id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tools of the trade
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A curated collection of technologies I use to build scalable products and intelligent systems.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Skill categories">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIconMap[category.id] || Code2;
            const isActive = activeTab === category.id;
            return (
              <motion.button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${category.id}`}
                id={`skills-tab-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-500",
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              id={`skills-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`skills-tab-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl
                             bg-slate-50 dark:bg-slate-800/60
                             border border-slate-200 dark:border-slate-700
                             hover:border-emerald-300 dark:hover:border-emerald-700
                             hover:shadow-md hover:shadow-emerald-500/10
                             transition-all duration-200 cursor-default group"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl
                                bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700
                                group-hover:border-emerald-200 dark:group-hover:border-emerald-800
                                shadow-xs transition-all duration-200"
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </div>
                  {/* Name */}
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">
                    {skill.name}
                  </span>
                  {/* Level indicator */}
                  {skill.level && (
                    <div className="flex items-center gap-1" title={levelLabels[skill.level]}>
                      {["expert", "advanced", "intermediate", "beginner"].map((lvl, i) => {
                        const levels = ["beginner", "intermediate", "advanced", "expert"];
                        const currentIdx = levels.indexOf(skill.level!);
                        return (
                          <div
                            key={lvl}
                            className={cn(
                              "h-1 w-4 rounded-full transition-colors",
                              i <= currentIdx
                                ? levelColors[skill.level!] || "bg-emerald-500"
                                : "bg-slate-200 dark:bg-slate-600"
                            )}
                          />
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
