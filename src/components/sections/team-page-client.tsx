"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TeamCard } from "@/components/ui/team-card";
import { FinalCta } from "@/components/final-cta";
import { team, leadership, teamDomains, type TeamMember } from "@/lib/content/team";
import { cn } from "@/lib/utils";

export function TeamPageClient() {
  const [domain, setDomain] = useState<string>("All");
  const filtered: TeamMember[] =
    domain === "All" ? team : team.filter((m) => m.domain === domain);

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title={
          <>
            Senior specialists,
            <br />
            <span className="text-ink-3">not general developers.</span>
          </>
        }
        lead="The people who scope the work do the work. Average specialist experience: twelve years in production."
      />

      {/* Leadership */}
      <section className="pb-4">
        <Container variant="w">
          <Reveal>
            <h2 className="eyebrow mb-8">Leadership</h2>
          </Reveal>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {leadership.map((m) => (
              <StaggerItem key={m.slug} className="h-full">
                <TeamCard member={m} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Specialists with filter */}
      <section className="section-y">
        <Container variant="w">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Reveal>
              <h2 className="h3">Specialists</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex flex-wrap gap-1.5">
                {["All", ...teamDomains].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDomain(d)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors mono",
                      domain === d
                        ? "border-ink bg-ink text-bg"
                        : "border-line-strong text-ink-3 hover:border-line-bright hover:text-ink"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
          <StaggerGroup key={domain} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {filtered.map((m) => (
              <StaggerItem key={m.slug} className="h-full">
                <TeamCard member={m} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <FinalCta
        title="Work with people this senior."
        body="We hire a small number of specialists each year. Clients come first — but we are always interested in the right people."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/careers"
        secondaryLabel="See careers"
      />
    </>
  );
}
