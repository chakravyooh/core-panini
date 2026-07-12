import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/final-cta";
import { ArrowUpRight } from "lucide-react";
import { careers } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We hire experienced people to do the hard work. Low ego, high standard, and the accountability that comes from carrying production at scale.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Experienced people doing
            <br />
            <span className="text-ink-3">the hard work.</span>
          </>
        }
        lead={careers.intro}
      >
        <Button href="/contact" withArrow>
          Apply or make an introduction
        </Button>
      </PageHero>

      {/* Perks */}
      <section className="pb-4">
        <Container variant="w">
          <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {careers.perks.map((p) => (
              <StaggerItem key={p}>
                <div className="h-full bg-bg p-7 flex flex-col gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  <p className="text-ink-2">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Open roles */}
      <section className="section-y">
        <Container variant="w">
          <SectionHeading
            eyebrow="Open roles"
            title={
              <>
                Roles we are
                <br />
                <span className="text-ink-3">always hiring for.</span>
              </>
            }
            lead="We do not always have a posted opening — but we are always interested in the right experienced person."
          />
          <div className="mt-12 flex flex-col">
            {careers.roles.map((r) => (
              <Reveal key={r.title}>
                <a
                  href="mailto:careers@corepanini.com"
                  className="group grid grid-cols-1 gap-3 border-t border-line py-7 last:border-b transition-colors hover:bg-surface/40 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center md:gap-6 md:px-4 md:rounded-xl"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-semibold text-ink">{r.title}</span>
                    <span className="text-sm text-ink-3 mono md:hidden">{r.team} · {r.location}</span>
                  </div>
                  <span className="hidden text-sm text-ink-2 md:block">{r.team}</span>
                  <span className="hidden text-sm text-ink-3 md:block">{r.location}</span>
                  <span className="hidden md:flex items-center gap-3">
                    <span className="text-sm text-ink-3 mono">{r.type}</span>
                    <ArrowUpRight className="h-5 w-5 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-y bg-surface/30">
        <Container variant="w">
          <Eyebrow>What we look for</Eyebrow>
          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {careers.values.map((v) => (
              <StaggerItem key={v}>
                <div className="h-full rounded-2xl border border-line bg-bg p-6">
                  <p className="text-ink-2">{v}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta
        title="Don't see your role?"
        body="If you carry production responsibility and share our standard, write to us. We read every message."
        primaryHref="/contact"
        primaryLabel="Make an introduction"
      />
    </>
  );
}
