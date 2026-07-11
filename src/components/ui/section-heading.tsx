import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={tone === "light" ? "text-ink-inv-3" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "h2",
          tone === "light" ? "text-ink-inv" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "lead max-w-xl",
            align === "center" && "mx-auto",
            tone === "light" ? "text-ink-inv-2" : "text-ink-2"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
