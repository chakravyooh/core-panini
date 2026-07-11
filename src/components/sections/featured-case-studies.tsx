import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { featuredCaseStudies } from "@/lib/content/caseStudies";

export function FeaturedCaseStudies() {
  return (
    <section className="section-y">
      <Container variant="w">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Outcomes, not
                <br />
                <span className="text-ink-3">case studies.</span>
              </>
            }
            lead="A selection of programs where the business result mattered more than the deliverable."
          />
          <Reveal>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              All case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featuredCaseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08} className="h-full">
              <CaseStudyCard cs={cs} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
