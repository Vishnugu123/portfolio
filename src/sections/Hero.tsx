"use client";


// import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import {
  Mail,
  ChevronDown,
  Download,
  Eye,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants";

const socialLinks = [
  { icon: FaGithub, href: SITE_CONFIG.github, label: "GitHub", color: "hover:text-slate-900 dark:hover:text-white" },
  { icon: FaLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email", color: "hover:text-emerald-600 dark:hover:text-emerald-400" },
];

// LeetCode SVG icon
function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden
                 bg-[#F8FAFC] dark:bg-slate-950 scroll-mt-0"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full
                        bg-gradient-to-bl from-emerald-100/60 to-transparent dark:from-emerald-950/30 dark:to-transparent
                        blur-3xl transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full
                        bg-gradient-to-tr from-teal-100/50 to-transparent dark:from-teal-950/20 dark:to-transparent
                        blur-3xl transform -translate-x-1/3 translate-y-1/4" />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="dark:hidden absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800
                             text-emerald-700 dark:text-emerald-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
              <span className="text-emerald-400 dark:text-emerald-600">·</span>
              <MapPin className="w-3.5 h-3.5" />
              India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white
                       leading-[1.08] tracking-tight mb-6 max-w-4xl"
          >
            Software Engineer
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              &amp; AI Engineer
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                         bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100
                         text-white dark:text-slate-900 transition-all duration-200
                         shadow-lg shadow-slate-900/20 dark:shadow-white/10
                         focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-2"
              id="hero-view-projects"
            >
              <Eye className="w-4 h-4" />
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={SITE_CONFIG.resumeUrl}
              download
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                         bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200
                         shadow-lg shadow-emerald-600/25
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              id="hero-download-resume"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-16">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 flex items-center justify-center rounded-xl
                           bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                           text-slate-500 dark:text-slate-400 ${color}
                           shadow-sm hover:shadow-md transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.a
              href={SITE_CONFIG.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl
                         bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                         text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400
                         shadow-sm hover:shadow-md transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {["Next.js", "TypeScript", "Python", "React", "Node.js", "OpenAI", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium
                           bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                           text-slate-600 dark:text-slate-400 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                   text-slate-400 dark:text-slate-600 hover:text-emerald-500 dark:hover:text-emerald-400
                   transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
