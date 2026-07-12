export const SITE_CONFIG = {
  name: "Vishnu Gupta",
  title: "Software Engineer & AI Engineer",
  description:
    "Building intelligent products at the intersection of software engineering and artificial intelligence. Open to work.",
  url: "https://vishnu_gupta.vercel.app",
  email: "vishugupta7699181@gmail.com",
  github: "https://github.com/Vishnugu123",
  linkedin: "http://www.linkedin.com/in/vishnu-gupta-9876543210123456789",
  leetcode: "https://leetcode.com/u/Vishu7781/",
  leetcodeUsername: "Vishu7781",
  resumeUrl: "/resume.pdf",
  location: "India",
  availableForWork: true,
  openGraphImage: "/og-image.png",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Contact", href: "#contact" },
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
