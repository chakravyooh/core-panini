"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  panels,
  className,
}: {
  tabs: string[];
  panels: React.ReactNode[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-1 rounded-full border border-line-strong bg-surface p-1">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
          >
            {active === i && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors",
                active === i ? "text-bg" : "text-ink-3 hover:text-ink"
              )}
            >
              {t}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {panels[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
