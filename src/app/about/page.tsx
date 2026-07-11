import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";
import { values } from "@/lib/content/values";
import { metrics } from "@/lib/content/metrics";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "Mission, Vision & Values",
  description:
    "The operating philosophy, leadership principles, and culture behind Core Panini — a consultancy where technology advice is worth the trust placed in it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission · Vision · Values"
        title={
          <>
            Technology advice worth
            <br />
            <span className="text-ink-3">the trust placed in it.</span>
          </>
        }
        lead="We exist because the decisions that decide outcomes deserve senior people — and because honesty is too rare at the price the market charges for it."
      />

      {/* Mission & Vision */}
      <section className="pb-4">
        <Container variant="w">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-10">
                <Eyebrow>Mission</Eyebrow>
                <p className="h3 mt-6 max-w-md text-balance">{values.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-10">
                <Eyebrow>Vision</Eyebrow>
                <p className="text-lg mt-6 leading-relaxed text-ink-2 max-w-md">
                  {values.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Core values"
            title={
              <>
                What we will not
                <br />
                <span className="text-ink-3">compromise on.</span>
              </>
            }
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {values.coreValues.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="h-full bg-bg p-8 flex flex-col gap-3">
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Operating philosophy timeline */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Operating philosophy"
            title={
              <>
                How we actually
                <br />
                <span className="text-ink-3">do the work.</span>
              </>
            }
            lead="A discipline, not a process. Four movements every engagement shares."
          />
          <div className="mt-14 flex flex-col">
            {values.philosophy.map((p, i) => (
              <Reveal key={p.title}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-10 last:border-b md:gap-10">
                  <div className="flex flex-col items-start">
                    <span className="mono text-sm text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-2 hidden md:inline-flex h-full w-px bg-line" />
                  </div>
                  <div className="flex flex-col gap-2 max-w-2xl">
                    <Eyebrow>{p.year}</Eyebrow>
                    <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="text-ink-2 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership principles */}
      <section className="section-y bg-surface/30">
        <Container variant="w">
          <SectionHeading
            eyebrow="Leadership principles"
            title={
              <>
                The standard we hold
                <br />
                <span className="text-ink-3">ourselves to.</span>
              </>
            }
          />
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2" stagger={0.06}>
            {values.principles.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-bg p-7 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Culture + metrics */}
      <section className="section-y">
        <Container variant="w">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Company culture</Eyebrow>
              <h2 className="h3 mt-5">A place senior people want to stay.</h2>
              <ul className="mt-8 flex flex-col gap-3">
                {values.culture.map((c) => (
                  <li key={c} className="flex items-center gap-3 border-b border-line pb-3 text-ink-2">
                    <span className="h-1 w-1 rounded-full bg-ink" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>By the numbers</Eyebrow>
              <div className="mt-8 grid grid-cols-2 gap-y-10">
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </span>
                    <span className="text-sm text-ink-3 max-w-[12rem] leading-relaxed">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
