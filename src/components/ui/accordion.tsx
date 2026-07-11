"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function Accordion({
  items,
  className,
  tone = "dark",
}: {
  items: Item[];
  className?: string;
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
          tone={tone}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  tone,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
  tone: "dark" | "light";
}) {
  const panelId = useId();
  return (
    <div
      className={cn(
        "border-b transition-colors",
        tone === "light" ? "border-paper-3" : "border-line"
      )}
    >
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={cn(
            "flex w-full items-center justify-between gap-4 py-6 text-left transition-colors",
            tone === "light" ? "text-ink-inv" : "text-ink"
          )}
        >
          <span className="text-base font-medium sm:text-lg pr-1">{item.q}</span>
          <Plus
            className={cn(
              "h-5 w-5 shrink-0 transition-transform duration-300",
              isOpen && "rotate-45",
              tone === "light" ? "text-ink-inv-3" : "text-ink-3"
            )}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className={cn(
                "pb-6 pr-10 text-[15px] leading-relaxed",
                tone === "light" ? "text-ink-inv-2" : "text-ink-2"
              )}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
