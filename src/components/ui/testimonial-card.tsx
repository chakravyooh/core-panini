import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialCard({
  t,
  className,
}: {
  t: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-8",
        className
      )}
    >
      <blockquote className="text-lg leading-relaxed tracking-[-0.01em] text-ink">
        <span className="text-ink-3 mr-1">&ldquo;</span>
        {t.quote}
        <span className="text-ink-3 ml-1">&rdquo;</span>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg text-xs font-semibold">
          {t.author
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-ink">{t.author}</span>
          <span className="text-sm text-ink-3">
            {t.role}, {t.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
