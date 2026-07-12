"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { SITE_CONFIG } from "@/constants";

const badges = [
  { label: "Software Engineer", color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800" },
  { label: "AI Engineer", color: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800" },
  // { label: "Backend Developer", color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800" },
  // { label: "B.Tech Graduate", color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800" },
  { label: "Open to Work", color: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800" },
  // { label: "Full Stack", color: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800" },
  { label: "Problem Solver", color: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800" },
  { label: "Quick Learner", color: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 bg-[#F8FAFC] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Crafting software with purpose
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I&apos;m a <span className="font-semibold text-slate-900 dark:text-white">Software Engineer & AI Engineer</span> with
              a passion for building products that sit at the intersection of great engineering and great user experience.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              With a background in Backend Development and a growing expertise in AI/ML systems, I specialize in architecting
              scalable applications — from designing clean Fast & Rest APIs to fine-tuning language models. I believe great software
              is born from empathy for users, clarity of thought, and relentless attention to detail.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m solving DSA problems on LeetCode, exploring research papers on AI, or building
              side projects that scratch my own itch. I&apos;m a lifelong learner who thrives in collaborative environments
              where ownership and curiosity are celebrated.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Focus Area", value: "Artificial Intelligent & CS" },
                { label: "Education", value: "B.Tech CS" },
                { label: "Location", value: "India" },
                { label: "Experience", value: "1+ Years" },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">{label}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Badges */}
          <div className="flex flex-col gap-8">
            {/* Avatar/illustration */}
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 shadow-2xl shadow-emerald-500/30 rotate-3" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 -rotate-3" />
              <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-6xl font-black tracking-tighter select-none">
                  {SITE_CONFIG.name.split(" ").map((n: string) => n[0]).join("")}
                </span>
              </div>
              {/* floating dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-orange-400 shadow-md" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-emerald-300 shadow-md" />
            </div>

            {/* Badge cloud */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.color} 
                              cursor-default select-none transition-transform duration-200 hover:scale-105`}
                >
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
