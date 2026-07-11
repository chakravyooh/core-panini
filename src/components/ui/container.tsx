import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  variant = "c",
}: {
  children: ReactNode;
  className?: string;
  variant?: "c" | "w" | "p";
}) {
  const cls = variant === "w" ? "container-w" : variant === "p" ? "container-p" : "container-c";
  return <div className={cn(cls, className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "dark" | "light";
}) {
  return (
    <section
      id={id}
      className={cn("section-y relative", tone === "light" ? "bg-paper text-ink-inv" : "", className)}
    >
      {children}
    </section>
  );
}
