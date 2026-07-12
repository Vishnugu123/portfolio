"use client";

import { motion } from "framer-motion";
import { useLeetCode } from "@/hooks/useLeetCode";
import { SITE_CONFIG } from "@/constants";
import SectionWrapper from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ExternalLink, RefreshCw, Trophy, Flame, CheckCircle2, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

// ── Progress ring ────────────────────────────────────────────────────────────
function ProgressRing({
  solved,
  total,
  color,
  label,
  inView,
}: {
  solved: number;
  total: number;
  color: string;
  label: string;
  inView: boolean;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? solved / total : 0;
  const dashOffset = circumference * (1 - pct);

  const colorMap: Record<string, { stroke: string; text: string; bg: string }> = {
    green: { stroke: "#10b981", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
    yellow: { stroke: "#f59e0b", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40" },
    red: { stroke: "#ef4444", text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/40" },
  };

  const c = colorMap[color] || colorMap.green;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={cn("relative w-24 h-24 rounded-full flex items-center justify-center", c.bg)}>
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 88 88" aria-hidden="true">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-100 dark:text-slate-800" />
          <motion.circle
            cx="44" cy="44" r={radius} fill="none"
            stroke={c.stroke} strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? dashOffset : circumference }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="relative text-center">
          <div className={cn("text-lg font-bold tabular-nums", c.text)}>
            <AnimatedCounter value={solved} inView={inView} duration={1.5} />
          </div>
          <div className="text-xs text-slate-400 dark:text-slate-500">/{total}</div>
        </div>
      </div>
      <span className={cn("text-xs font-semibold", c.text)}>{label}</span>
    </div>
  );
}

// ── Submission heatmap ────────────────────────────────────────────────────────
function SubmissionHeatmap({ calendar }: { calendar?: Record<string, number> }) {
  const weeks = useMemo(() => {
    const now = Date.now() / 1000;
    const sixMonthsAgo = now - 180 * 24 * 3600;
    const allDays: { ts: number; count: number }[] = [];

    for (let ts = Math.floor(sixMonthsAgo / 86400) * 86400; ts <= now; ts += 86400) {
      allDays.push({ ts, count: calendar?.[String(ts)] ?? 0 });
    }

    const result: { ts: number; count: number }[][] = [];
    let week: { ts: number; count: number }[] = [];
    const startDow = new Date(allDays[0].ts * 1000).getDay();

    for (let i = 0; i < startDow; i++) week.push({ ts: 0, count: 0 });
    for (const day of allDays) {
      week.push(day);
      if (week.length === 7) { result.push(week); week = []; }
    }
    if (week.length > 0) { while (week.length < 7) week.push({ ts: 0, count: 0 }); result.push(week); }
    return result;
  }, [calendar]);

  const getColor = (count: number) => {
    if (count === 0) return "bg-slate-100 dark:bg-slate-800";
    if (count < 3) return "bg-emerald-200 dark:bg-emerald-900";
    if (count < 6) return "bg-emerald-400 dark:bg-emerald-700";
    if (count < 10) return "bg-emerald-500 dark:bg-emerald-500";
    return "bg-emerald-600 dark:bg-emerald-400";
  };

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={day.ts > 0 ? `${new Date(day.ts * 1000).toLocaleDateString()}: ${day.count} submissions` : ""}
                className={cn(
                  "w-3 h-3 rounded-sm transition-colors duration-200 cursor-default",
                  day.ts > 0 ? getColor(day.count) : "opacity-0"
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function LeetCodeTracker() {
  const { stats, loading, error, refetch } = useLeetCode(SITE_CONFIG.leetcodeUsername);
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <SectionWrapper id="leetcode" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-widest uppercase mb-3 block">
            Daily Tracker
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            LeetCode Progress
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Real-time statistics from my LeetCode journey — consistency is the key to mastery.
          </p>
        </div>

        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          {loading && (
            <div className="flex items-center justify-center py-24">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-slate-400">Fetching LeetCode stats...</p>
              </div>
            </div>
          )}

          {!loading && (
            <div className="space-y-6">
              {/* Top: Profile + Overall + Streak */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Profile card */}
                <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20 border border-orange-200 dark:border-orange-800">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-400/30">
                    <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <a
                      href={SITE_CONFIG.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1 justify-center"
                    >
                      {SITE_CONFIG.leetcodeUsername}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Rank: #{stats?.ranking?.toLocaleString() ?? "—"}
                    </p>
                  </div>
                  {/* Refresh */}
                  <button
                    onClick={refetch}
                    className="text-xs flex items-center gap-1.5 text-slate-400 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 rounded px-2 py-1"
                    aria-label="Refresh LeetCode stats"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Refresh
                  </button>
                </div>

                {/* Total solved big number */}
                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  <div className="text-center">
                    <div className="text-5xl font-black text-slate-900 dark:text-white tabular-nums">
                      <AnimatedCounter value={stats?.totalSolved ?? 0} inView={inView} duration={2} />
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      Problems Solved
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      out of {stats?.totalAll?.toLocaleString() ?? "~3.3K"} total
                    </p>
                  </div>
                </div>

                {/* Streak + Active Days */}
                <div className="flex flex-col gap-4">
                  <div className="flex-1 flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
                    <Flame className="w-7 h-7 text-rose-500" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-rose-600 dark:text-rose-400 tabular-nums">
                        <AnimatedCounter value={stats?.streak ?? 0} inView={inView} suffix=" 🔥" />
                      </div>
                      <p className="text-xs text-rose-500 dark:text-rose-400 font-medium">Day Streak</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800">
                    <Trophy className="w-7 h-7 text-violet-500" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-violet-600 dark:text-violet-400 tabular-nums">
                        <AnimatedCounter value={stats?.totalActiveDays ?? 0} inView={inView} />
                      </div>
                      <p className="text-xs text-violet-500 dark:text-violet-400 font-medium">Active Days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difficulty breakdown */}
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-8 text-center uppercase tracking-wider">
                  Difficulty Breakdown
                </h3>
                <div className="flex justify-around gap-4">
                  <ProgressRing solved={stats?.easySolved ?? 0} total={stats?.easyTotal ?? 836} color="green" label="Easy" inView={inView} />
                  <ProgressRing solved={stats?.mediumSolved ?? 0} total={stats?.mediumTotal ?? 1760} color="yellow" label="Medium" inView={inView} />
                  <ProgressRing solved={stats?.hardSolved ?? 0} total={stats?.hardTotal ?? 783} color="red" label="Hard" inView={inView} />
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      {stats?.acceptanceRate ?? 0}%
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Acceptance Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      #{stats?.ranking?.toLocaleString() ?? "—"}
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Global Ranking</p>
                  </div>
                </div>
              </div>

              {/* Heatmap */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Submission Activity (Last 6 Months)
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>Less</span>
                    {["bg-slate-100 dark:bg-slate-800", "bg-emerald-200 dark:bg-emerald-900", "bg-emerald-400 dark:bg-emerald-700", "bg-emerald-500", "bg-emerald-600"].map((c, i) => (
                      <div key={i} className={cn("w-3 h-3 rounded-sm", c)} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
                <SubmissionHeatmap calendar={stats?.submissionCalendar} />
              </div>

              {error && (
                <p className="text-xs text-center text-amber-500 dark:text-amber-400">
                  ⚠ Showing demo data — LeetCode API might be rate-limiting. Your stats will show once the rate limit clears.
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
