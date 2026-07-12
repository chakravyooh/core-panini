import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faq } from "@/lib/content/faq";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions we hear most — about experienced staffing, pricing, timelines, augmentation, industries, and how we handle confidential and regulated work.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions before
            <br />
            <span className="text-ink-3">the first call.</span>
          </>
        }
        lead="The things leaders ask us before they engage. If your question is not here, write to us — we reply within a business day."
      />
      <section className="pb-8">
        <Container variant="c">
          <Reveal>
            <Accordion items={faq} />
          </Reveal>
        </Container>
      </section>
      <FinalCta
        title="Still have a question?"
        body="If it is not answered here, the fastest way to clarity is a short conversation."
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}
