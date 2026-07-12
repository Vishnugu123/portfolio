"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Download,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "@/components/SectionWrapper";
import { SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

// Simple LeetCode SVG icon
function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "Best for formal inquiries",
    color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Vishu-Github",
    href: SITE_CONFIG.github,
    description: "See my open-source work",
    color: "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Vishnu_Gupta",
    href: SITE_CONFIG.linkedin,
    description: "Professional network",
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400",
  },
  {
    icon: LeetCodeIcon,
    label: "LeetCode",
    value: "Vishu7781",
    href: SITE_CONFIG.leetcode,
    description: "DSA progress tracker",
    color: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setFormStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to send message");
    }

    setFormStatus("success");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  } catch (error) {
    console.error("Contact Form Error:", error);
    setFormStatus("error");
  }
  };

  return (
    <SectionWrapper id="contact" className="py-24 bg-[#F8FAFC] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Have an exciting project, collaboration, or opportunity? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Open to Work
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Available for full-time, contract, and freelance work
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                <MapPin className="w-3 h-3" />
                India
              </div>
            </div>

            {/* Contact cards */}
            {contactLinks.map(({ icon: Icon, label, value, href, description, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900
                           border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700
                           transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0", color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{label}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{value}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{description}</p>
                </div>
                <span className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  →
                </span>
              </motion.a>
            ))}

            {/* Resume download */}
            <motion.a
              href={SITE_CONFIG.resumeUrl}
              download
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                         bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100
                         text-white dark:text-slate-900 font-semibold text-sm
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm"
          >
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-800",
                      "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
                      "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                      "transition-colors duration-200",
                      errors.name
                        ? "border-rose-400 dark:border-rose-600"
                        : "border-slate-200 dark:border-slate-700"
                    )}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="jane@company.com"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-800",
                      "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
                      "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                      "transition-colors duration-200",
                      errors.email
                        ? "border-rose-400 dark:border-rose-600"
                        : "border-slate-200 dark:border-slate-700"
                    )}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-800",
                      "text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500",
                      "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
                      "transition-colors duration-200 resize-none",
                      errors.message
                        ? "border-rose-400 dark:border-rose-600"
                        : "border-slate-200 dark:border-slate-700"
                    )}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
                {formStatus === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
                      ❌ Something went wrong. Please try again later.
                    </div>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
                    formStatus === "loading"
                      ? "bg-emerald-400 cursor-not-allowed text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                  )}
                  id="contact-submit"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
