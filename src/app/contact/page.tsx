import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/contact-form";
import { site, offices } from "@/lib/content/site";
import { contactFaq } from "@/lib/content/faq";
import { LinkedInIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Core Panini. Inquiry form, office locations in San Francisco, London, and Singapore, email, phone, LinkedIn, and answers to common questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start the
            <br />
            <span className="text-ink-3">conversation.</span>
          </>
        }
        lead="If the challenge matters enough to warrant experienced leaders, it matters enough to reach out. We reply to every inquiry within one business day."
      />

      <section className="pb-4">
        <Container variant="w">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <Eyebrow>Direct</Eyebrow>
                <a href={`mailto:${site.email}`} className="text-lg text-ink hover:underline underline-offset-4">
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`} className="text-lg text-ink hover:underline underline-offset-4">
                  {site.phone}
                </a>
                <a
                  href={site.linkedin}
                  className="inline-flex items-center gap-2 text-ink-2 hover:text-ink transition-colors w-fit"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <Eyebrow>Offices</Eyebrow>
                <div className="grid gap-4 sm:grid-cols-1">
                  {offices.map((o) => (
                    <div key={o.city} className="rounded-xl border border-line bg-surface p-5">
                      <p className="text-sm font-semibold text-ink">{o.city}</p>
                      <p className="eyebrow mt-1">{o.region}</p>
                      <div className="mt-3 text-sm text-ink-3 leading-relaxed">
                        {o.lines.map((l) => (
                          <p key={l}>{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="flex flex-col gap-3">
                <Eyebrow>Where we are</Eyebrow>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
                  <div aria-hidden className="absolute inset-0 grid-lines opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <span className="inline-flex h-3 w-3 items-center justify-center">
                        <span className="absolute h-3 w-3 animate-ping rounded-full bg-ink/30" />
                        <span className="relative h-2 w-2 rounded-full bg-ink" />
                      </span>
                      <p className="text-sm text-ink-3 mono">Map · San Francisco · London · Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y scroll-mt-24">
        <Container variant="c">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="h2 mt-5 max-w-xl">Questions before the first call.</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <Accordion items={contactFaq} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
