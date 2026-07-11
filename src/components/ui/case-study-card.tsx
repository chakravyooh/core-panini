import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/content/caseStudies";

export function CaseStudyCard({
  cs,
  className,
  tone = "dark",
}: {
  cs: CaseStudy;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className={cn(
        "group flex flex-col justify-between gap-8 rounded-2xl border p-7 transition-all duration-500",
        tone === "light"
          ? "border-paper-3 bg-white hover:border-ink-inv/20 hover:-translate-y-1"
          : "border-line bg-surface hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="eyebrow">{cs.industry} · {cs.year}</span>
          <span className={cn("text-sm", tone === "light" ? "text-ink-inv-3" : "text-ink-3")}>
            {cs.client}
          </span>
        </div>
        <ArrowUpRight
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
            tone === "light" ? "text-ink-inv-3" : "text-ink-3"
          )}
        />
      </div>
      <h3
        className={cn(
          "h3 max-w-md",
          tone === "light" ? "text-ink-inv" : "text-ink"
        )}
      >
        {cs.title}
      </h3>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
        {cs.results.slice(0, 2).map((r) => (
          <div key={r.label} className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight">
              {r.metric}
            </span>
            <span className="text-xs text-ink-3 max-w-[12rem]">{r.label}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
