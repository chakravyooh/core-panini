import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/final-cta";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Sector-specific expertise across healthcare, finance, manufacturing, retail, telecommunications, government, logistics, education, energy, and technology — with the challenges, solutions, and outcomes that matter.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Experience that earns trust
            <br />
            <span className="text-ink-3">from the first conversation.</span>
          </>
        }
        lead="Our specialists have built, scaled, and led technology initiatives within the industries they serve. We bring practical insight shaped by real-world experience — not just frameworks and best practices."
      >
        <div className="flex flex-wrap gap-2">
          {industries.map((i) => (
            <a
              key={i.slug}
              href={`#${i.slug}`}
              className="rounded-full border border-line-strong px-3.5 py-1.5 text-xs text-ink-2 transition-colors hover:border-line-bright hover:text-ink mono"
            >
              {i.name}
            </a>
          ))}
        </div>
      </PageHero>

      {industries.map((ind, idx) => (
        <section
          key={ind.slug}
          id={ind.slug}
          className={`section-y scroll-mt-24 ${idx % 2 === 1 ? "bg-surface/30" : ""}`}
        >
          <Container variant="w">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <Eyebrow>
                    {String(idx + 1).padStart(2, "0")} · {ind.name}
                  </Eyebrow>
                  <h2 className="h3 mt-5">{ind.summary}</h2>
                  <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                    <p className="text-3xl font-semibold tracking-tight text-ink">
                      {ind.metric.value}
                    </p>
                    <p className="mt-2 text-sm text-ink-3 leading-relaxed">
                      {ind.metric.label}
                    </p>
                  </div>
                </Reveal>
              </div>

              <StaggerGroup className="grid gap-6 sm:grid-cols-3" stagger={0.06}>
                <Column title="Challenges" items={ind.challenges} tone="problem" />
                <Column title="Solutions" items={ind.solutions} tone="solution" />
                <Column title="Outcomes" items={ind.outcomes} tone="outcome" />
              </StaggerGroup>
            </div>
          </Container>
        </section>
      ))}

      <FinalCta
        title="Facing a problem in your sector?"
        body="If it crosses the boundaries of strategy, engineering, AI, and operations, we should talk."
        secondaryHref="/case-studies"
        secondaryLabel="See the work"
      />
    </>
  );
}

function Column({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "problem" | "solution" | "outcome";
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span
          className={
            "h-1.5 w-1.5 rounded-full " +
            (tone === "problem"
              ? "bg-ink-4"
              : tone === "solution"
                ? "bg-ink-2"
                : "bg-ink")
          }
        />
        <h3 className="eyebrow">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <StaggerItem key={item}>
            <li className="rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-ink-2 leading-relaxed">
              {item}
            </li>
          </StaggerItem>
        ))}
      </ul>
    </div>
  );
}
