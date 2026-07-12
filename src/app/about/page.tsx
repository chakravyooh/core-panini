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
  title: "Our Growth Partner Philosophy",
  description:
    "The mission, vision, and core beliefs behind Core Panini — a Growth Partner helping ambitious businesses scale with confidence through experienced leadership and practical execution.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Growth Partner"
        title={
          <>
            Helping ambitious businesses
            <br />
            <span className="text-ink-3">scale with confidence.</span>
          </>
        }
        lead="We bring experienced leaders who transform complexity into sustainable growth — working alongside your team, not outside it."
      />

      {/* Vision & Mission */}
      <section className="pb-4">
        <Container variant="w">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-10">
                <Eyebrow>Vision</Eyebrow>
                <p className="h3 mt-6 max-w-md text-balance leading-snug">
                  {values.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-10">
                <Eyebrow>Mission</Eyebrow>
                <div className="mt-6 flex flex-col gap-4 max-w-md">
                  {values.mission.map((p, i) => (
                    <p key={i} className="text-ink-2 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Brand story"
            title={
              <>
                Why we
                <br />
                <span className="text-ink-3">created this company.</span>
              </>
            }
          />
          <div className="mt-12 max-w-3xl flex flex-col gap-6">
            {values.brandStory.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p
                  className={
                    i === values.brandStory.length - 1
                      ? "text-xl leading-relaxed text-ink font-medium"
                      : "text-lg leading-relaxed text-ink-2"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Beliefs */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Core beliefs"
            title={
              <>
                What we
                <br />
                <span className="text-ink-3">stand for.</span>
              </>
            }
            lead="Six convictions that guide every engagement, every decision, and every partnership."
          />
          <StaggerGroup
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.05}
          >
            {values.coreBeliefs.map((b, i) => (
              <StaggerItem key={b.title}>
                <div className="h-full bg-bg p-8 flex flex-col gap-4">
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Promise */}
      <section className="section-y">
        <Container variant="w">
          <div className="rounded-3xl border border-line bg-surface p-10 md:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <Reveal>
                <Eyebrow>Our promise</Eyebrow>
                <div className="mt-6 flex flex-col gap-5 max-w-xl">
                  {values.promise.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "h3 leading-snug text-balance"
                          : "text-ink-2 leading-relaxed"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="flex flex-col gap-4">
                  {values.promise.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 border-b border-line pb-4 text-ink-2"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Positioning band */}
      <section className="section-y">
        <Container variant="w">
          <Reveal>
            <div className="rounded-3xl border border-line bg-paper p-10 text-center md:p-16">
              <p className="display text-balance text-ink-inv">
                {values.positioning.headline}
              </p>
              <p className="mt-6 lead mx-auto max-w-2xl text-ink-inv-2 leading-relaxed">
                {values.positioning.body}
              </p>
            </div>
          </Reveal>
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
            lead="Ten principles that define how our consultants work with clients — and with each other."
          />
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2" stagger={0.05}>
            {values.principles.map((p, i) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-bg p-7 flex flex-col gap-3">
                  <span className="mono text-xs text-ink-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
              <h2 className="h3 mt-5">A place experienced people want to stay.</h2>
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
