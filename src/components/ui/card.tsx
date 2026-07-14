import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface transition-all duration-500 hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
