"use client";

import { useInView } from "react-intersection-observer";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
}

export function useAnimatedCounter(
  target: number,
  inView: boolean,
  duration = 2
) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  return spring;
}
