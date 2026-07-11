"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useInView, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value.toLocaleString(undefined, { maximumFractionDigits: decimals }));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(v.toLocaleString(undefined, { maximumFractionDigits: decimals })),
    });
    return () => controls.stop();
  }, [inView, value, reduce, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
