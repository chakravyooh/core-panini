"use client";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services, serviceGroups } from "@/lib/content/services";

export function ExpertiseSection() {
  const tabs = [...serviceGroups];
  const panels = tabs.map((group) => {
    const items = services.filter((s) => s.group === group);
    return (
      <div key={group} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <Link key={s.slug} href="/#expertise" className="block h-full">
            <Card className="h-full">
              <div className="flex h-full flex-col gap-3 p-6">
                <div className="flex items-start justify-between">
                  <span className="eyebrow">{s.group}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-3" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{s.name}</h3>
                <p className="text-sm text-ink-3 leading-relaxed flex-1">
                  {s.summary}
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {s.capabilities.slice(0, 3).map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-3 mono"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    );
  });

  return (
    <Section id="expertise">
      <Container variant="w">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <Reveal>
            <Eyebrow>Expertise</Eyebrow>
            <h2 className="h2 mt-5">
              Deep expertise.
              <br />
              <span className="text-ink-3">Unified execution.</span>
            </h2>
            <p className="lead mt-6 max-w-md">
              Growth challenges rarely belong to one domain. That&apos;s why
              we&apos;ve
              brought together experienced specialists across AI, engineering,
              product, data, cloud, security, compliance, and technology
              leadership — working as one team to deliver practical, measurable
              outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0">
            <Tabs tabs={tabs} panels={panels} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-y">
      {children}
    </section>
  );
}
