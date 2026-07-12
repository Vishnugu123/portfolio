"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { EXPERIENCE_TIMELINE } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How I got here
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A timeline of milestones and phases that shaped me into the engineer I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-300
                          dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700 hidden sm:block" aria-hidden="true" />

          <div className="space-y-12">
            {EXPERIENCE_TIMELINE.map((item, index) => {
              const Icon = (Icons as Record<string, LucideIcon>)[item.icon] || Icons.Circle;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 sm:gap-8 items-start"
                >
                  {/* Icon node */}
                  <div className="relative flex-shrink-0">
                    <div className={cn(
                      "relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center",
                      "shadow-lg border-2 transition-all duration-300",
                      item.current
                        ? "bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-400 shadow-emerald-500/30"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700"
                    )}>
                      <Icon className={cn(
                        "w-7 h-7",
                        item.current ? "text-white" : "text-emerald-600 dark:text-emerald-400"
                      )} />
                    </div>
                    {item.current && (
                      <div className="absolute -inset-1 rounded-2xl bg-emerald-400/20 animate-pulse" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                        {item.phase}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="text-xs font-semibold text-white bg-emerald-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-xs font-medium
                                       bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300
                                       border border-emerald-200 dark:border-emerald-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
