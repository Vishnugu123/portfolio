"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950"
          aria-label="Loading portfolio"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-16 h-16"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-2xl shadow-emerald-500/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl tracking-tight">
                  &lt;/&gt;
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-white font-semibold text-lg tracking-wide">
                Namaste!!!
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
