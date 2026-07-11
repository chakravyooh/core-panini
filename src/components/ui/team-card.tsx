import Link from "next/link";
import { LinkedInIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/content/team";

export function TeamCard({
  member,
  className,
  tone = "dark",
}: {
  member: TeamMember;
  className?: string;
  tone?: "dark" | "light";
}) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <article
      className={cn(
        "group flex flex-col gap-5 rounded-2xl border p-6 transition-all duration-500",
        tone === "light"
          ? "border-paper-3 bg-white hover:border-ink-inv/20 hover:-translate-y-1"
          : "border-line bg-surface hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center border border-line">
          <span className="text-lg font-semibold text-ink">{initials}</span>
        </div>
        <Link
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-line-bright hover:text-ink"
        >
          <LinkedInIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={cn("text-lg font-semibold", tone === "light" ? "text-ink-inv" : "text-ink")}>
          {member.name}
        </h3>
        <p className="text-sm text-ink-2">{member.role}</p>
        <p className="text-xs text-ink-3 mono mt-1">{member.expertise}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-3 mono">
          {member.years} yrs
        </span>
        {member.certifications.slice(0, 1).map((c) => (
          <span
            key={c}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-3 mono"
          >
            {c}
          </span>
        ))}
        {member.certifications.length > 1 && (
          <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-3 mono">
            +{member.certifications.length - 1}
          </span>
        )}
      </div>
    </article>
  );
}
