"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function Accordion({
  items,
  className,
}: {
  items: Item[];
  className?: string;
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
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  return (
    <div className="border-b border-line transition-colors">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-6 text-left text-ink transition-colors"
        >
          <span className="text-base font-medium sm:text-lg pr-1">{item.q}</span>
          <Plus
            className={cn(
              "h-5 w-5 shrink-0 text-ink-3 transition-transform duration-300",
              isOpen && "rotate-45"
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
            <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-2">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
