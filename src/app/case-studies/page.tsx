import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { FinalCta } from "@/components/final-cta";
import { caseStudies } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected programs where the business result mattered more than the deliverable. Client overview, challenge, approach, technology stack, results, business impact, metrics, and ROI.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Outcomes, not
            <br />
            <span className="text-ink-3">case studies.</span>
          </>
        }
        lead="A selection of programs where the business result mattered more than the deliverable. The details are real; the names are not."
      />
      <section className="pb-8">
        <Container variant="w">
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 2) * 0.08} className="h-full">
                <CaseStudyCard cs={cs} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta
        title="Could your story be next?"
        body="We take on a small number of programs each quarter. If the problem matters, start the conversation."
        secondaryHref="/industries"
        secondaryLabel="Explore industries"
      />
    </>
  );
}
