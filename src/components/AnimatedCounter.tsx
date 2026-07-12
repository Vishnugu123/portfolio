"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  inView,
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    duration: duration * 1000,
    bounce: 0,
  });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, value, count]);

  return (
    <span className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
