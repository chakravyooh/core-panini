import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { industries } from "@/lib/content/industries";

export function FeaturedIndustries() {
  const featured = ["healthcare", "finance", "manufacturing", "retail", "technology", "logistics"];
  const items = industries.filter((i) => featured.includes(i.slug));
  return (
    <section className="section-y">
      <Container variant="w">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Sector knowledge that
                <br />
                <span className="text-ink-3">earns the first conversation.</span>
              </>
            }
            lead="Specialists who have carried responsibility inside the industry — not just read about it."
          />
          <Reveal>
            <Link
              href="/industries"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              All industries
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {items.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:border-line-bright hover:bg-surface-2 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <Eyebrow>{ind.name}</Eyebrow>
                  <ArrowUpRight className="h-4 w-4 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-ink-2 leading-relaxed">{ind.summary}</p>
                  <p className="text-2xl font-semibold tracking-tight text-ink pt-2">
                    {ind.metric.value}
                  </p>
                  <p className="text-xs text-ink-3">{ind.metric.label}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
