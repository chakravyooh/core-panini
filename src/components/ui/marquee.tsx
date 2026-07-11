"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  duration = 38,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max"
        style={
          reduce
            ? undefined
            : { animation: `panini-marquee ${duration}s linear infinite` }
        }
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`@keyframes panini-marquee{to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
