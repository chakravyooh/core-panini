import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/final-cta";
import { insights, insightCategories } from "@/lib/content/insights";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Executive-level writing on technology strategy, AI engineering, cloud architecture, security, and leadership — by the specialists who carry the responsibility.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Writing by people who
            <br />
            <span className="text-ink-3">have done the work.</span>
          </>
        }
        lead="No thought leadership. Just the frameworks, hard calls, and lessons we use ourselves — written by the specialists who carry the responsibility."
      />

      {/* Featured */}
      <section className="pb-4">
        <Container variant="w">
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid gap-8 rounded-[2rem] border border-line bg-surface p-8 transition-all duration-500 hover:border-line-bright hover:bg-surface-2 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:p-12"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Eyebrow>Featured · {featured.category}</Eyebrow>
                </div>
                <h2 className="h2 max-w-xl">{featured.title}</h2>
                <p className="lead max-w-lg">{featured.excerpt}</p>
                <div className="flex items-center gap-3 pt-2 text-sm text-ink-3 mono">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Categories filter strip (static, links to anchors) */}
      <section className="pb-4">
        <Container variant="w">
          <Reveal>
            <div className="flex flex-wrap gap-1.5">
              {insightCategories.map((c) => (
                <span
                  key={c}
                  className={cn(
                    "rounded-full border border-line-strong px-3.5 py-1.5 text-xs text-ink-3 mono"
                  )}
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Grid */}
      <section className="pb-8">
        <Container variant="w">
          <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {rest.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <Link
                  href={`/insights/${p.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-3">
                    <Eyebrow>{p.category} · {p.readTime}</Eyebrow>
                    <h3 className="text-xl font-semibold text-ink leading-snug">{p.title}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-3 mono">{p.author}</span>
                    <ArrowUpRight className="h-5 w-5 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
