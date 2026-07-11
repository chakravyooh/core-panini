import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialCard({
  t,
  className,
  tone = "dark",
}: {
  t: Testimonial;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between gap-8 rounded-2xl border p-8",
        tone === "light"
          ? "border-paper-3 bg-white"
          : "border-line bg-surface",
        className
      )}
    >
      <blockquote
        className={cn(
          "text-lg leading-relaxed tracking-[-0.01em]",
          tone === "light" ? "text-ink-inv" : "text-ink"
        )}
      >
        <span className="text-ink-3 mr-1">“</span>
        {t.quote}
        <span className="text-ink-3 ml-1">”</span>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold",
            tone === "light" ? "bg-ink-inv text-paper" : "bg-ink text-bg"
          )}
        >
          {t.author
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className="flex flex-col">
          <span
            className={cn(
              "text-sm font-medium",
              tone === "light" ? "text-ink-inv" : "text-ink"
            )}
          >
            {t.author}
          </span>
          <span className="text-sm text-ink-3">
            {t.role}, {t.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
