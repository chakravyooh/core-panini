import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  variant = "c",
}: {
  children: ReactNode;
  className?: string;
  variant?: "c" | "w";
}) {
  const cls = variant === "w" ? "container-w" : "container-c";
  return <div className={cn(cls, className)}>{children}</div>;
}
