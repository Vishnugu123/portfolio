"use client";

import { motion } from "framer-motion";
import { Search, Hammer, Zap, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { WORKFLOW_STEPS } from "@/data/experience";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Hammer,
  Zap,
};

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    icon: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600",
    badge: "bg-emerald-600 text-white",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    icon: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600",
    badge: "bg-orange-500 text-white",
  },
  slate: {
    bg: "bg-slate-50 dark:bg-slate-800/60",
    icon: "text-slate-600 dark:text-slate-400",
    border: "border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500",
    badge: "bg-slate-700 dark:bg-slate-600 text-white",
  },
};

export default function Workflow() {
  return (
    <SectionWrapper id="workflow" className="py-24 bg-[#F8FAFC] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            Engineering Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How I build things
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A principled engineering workflow that balances speed with quality at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Search;
            const colors = colorMap[step.color];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-900",
                  "border-2 transition-all duration-300 shadow-sm hover:shadow-lg",
                  colors.border
                )}
              >
                {/* Step number */}
                <div className={cn("absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold", colors.badge)}>
                  {step.step}
                </div>

                {/* Arrow connector (except last) */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", colors.bg)}>
                  <Icon className={cn("w-7 h-7", colors.icon)} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mt-auto">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", step.color === "emerald" ? "bg-emerald-500" : step.color === "orange" ? "bg-orange-500" : "bg-slate-400")} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
