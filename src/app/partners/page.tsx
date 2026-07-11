import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";
import { partners } from "@/lib/content/partners";

export const metadata: Metadata = {
  title: "Partners, Certifications & Awards",
  description:
    "Core Panini's technology partners, professional certifications, and recognized awards — a measure of the standards we hold ourselves to.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners · Certifications · Awards"
        title={
          <>
            Standards we hold
            <br />
            <span className="text-ink-3">ourselves to.</span>
          </>
        }
        lead="Partnerships and credentials are not the proof — the work is. But they are a measure of the standard we maintain."
      />

      {/* Technology partners */}
      <section className="pb-4">
        <Container variant="w">
          <Reveal>
            <Eyebrow>Technology partners</Eyebrow>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
            {partners.technology.map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full bg-bg p-7 flex flex-col gap-2">
                  <p className="text-lg font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-3 mono">{t.tier}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Certifications"
            title={
              <>
                Credentials our
                <br />
                <span className="text-ink-3">specialists carry.</span>
              </>
            }
          />
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {partners.certifications.map((c) => (
              <StaggerItem key={c.name} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-surface p-6 flex flex-col gap-3">
                  <p className="text-ink">{c.name}</p>
                  <p className="text-xs text-ink-3 mono">{c.count}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Awards */}
      <section className="section-y bg-surface/30">
        <Container variant="w">
          <SectionHeading
            eyebrow="Awards"
            title={
              <>
                Recognition we
                <br />
                <span className="text-ink-3">are quietly proud of.</span>
              </>
            }
          />
          <StaggerGroup className="mt-12 flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line" stagger={0.06}>
            {partners.awards.map((a) => (
              <StaggerItem key={a.name}>
                <div className="bg-bg grid grid-cols-1 gap-2 px-7 py-8 md:grid-cols-[1.5fr_1fr_auto] md:items-center md:gap-6">
                  <p className="text-lg font-semibold text-ink">{a.name}</p>
                  <p className="text-sm text-ink-3">{a.org}</p>
                  <p className="text-sm text-ink-3 mono">{a.year}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
