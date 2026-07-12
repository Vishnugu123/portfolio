"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { FC, SVGProps } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { STATS } from "@/data/stats";

export default function Stats() {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section id="stats" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {STATS.map((stat) => {
            const Icon = ((Icons as unknown) as Record<string, FC<SVGProps<SVGSVGElement>>>)[stat.icon] || Icons.Star;
            return (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mb-4
                                group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1 tabular-nums">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={inView}
                  />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {stat.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
