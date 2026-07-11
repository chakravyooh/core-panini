import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  hover = true,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-500",
        tone === "light"
          ? "border-paper-3 bg-white"
          : "border-line bg-surface",
        hover &&
          (tone === "light"
            ? "hover:border-ink-inv/20 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.25)] hover:-translate-y-1"
            : "hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1"),
        className
      )}
    >
      {children}
    </div>
  );
}
