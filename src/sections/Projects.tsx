"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  ai: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
  web: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  mobile: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  other: "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
};

const categoryLabels: Record<string, string> = {
  ai: "AI/ML",
  web: "Web App",
  mobile: "Mobile",
  other: "Other",
};

// Gradient backgrounds for project cards (since we don't have real thumbnails)
const cardGradients = [
  "from-emerald-400 via-teal-500 to-emerald-600",
  "from-violet-400 via-purple-500 to-indigo-600",
  "from-orange-400 via-rose-400 to-pink-500",
  "from-blue-400 via-cyan-500 to-teal-500",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white dark:bg-slate-900
                 rounded-2xl border border-slate-200 dark:border-slate-800
                 hover:border-slate-300 dark:hover:border-slate-700
                 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60
                 transition-all duration-300"
    >
      {/* Gradient thumbnail */}
      <div className={`relative h-48 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-black text-white/20 select-none leading-none">
              {project.title.slice(0, 2).toUpperCase()}
            </div>
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold border", categoryColors[project.category])}>
            {categoryLabels[project.category]}
          </span>
        </div>
        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/20 text-white backdrop-blur-sm">
            {project.year}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-4">
          {project.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-medium
                         bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                         border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-400 dark:text-slate-500">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400
                         hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400
                         hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <span className="ml-auto">
            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-200" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="py-24 bg-[#F8FAFC] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects I&apos;ve built
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A selection of products and tools I&apos;ve shipped — from AI-powered applications to production web apps.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={featured.length + index} />
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Vishnugu123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                       border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900
                       text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600
                       dark:hover:border-emerald-500 dark:hover:text-emerald-400
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <FaGithub className="w-4 h-4" />
            View All on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
