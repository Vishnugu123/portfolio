"use client";

import Link from "next/link";
import { Mail, Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE_CONFIG } from "@/constants";
import { motion } from "framer-motion";

const footerLinks = [
  { icon: FaGithub, href: SITE_CONFIG.github, label: "GitHub" },
  { icon: FaLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-white text-sm">
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 order-last md:order-none">
            © {currentYear} {SITE_CONFIG.name}. Built with{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {footerLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center
                           text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400
                           bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30
                           border border-slate-200 dark:border-slate-700
                           transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label={label}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
