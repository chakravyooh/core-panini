import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/final-cta";
import { caseStudies } from "@/lib/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) return { title: "Case study" };
    return {
      title: cs.title,
      description: cs.excerpt,
      alternates: { canonical: `/case-studies/${slug}` },
      openGraph: { title: cs.title, description: cs.excerpt, type: "article" },
    };
  });
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();
  const cs = caseStudies[idx];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.excerpt,
    about: { "@type": "Thing", name: cs.industry },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="pt-32 md:pt-40">
        <Container variant="c">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-1.5 text-sm text-ink-3 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All case studies
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{cs.industry} · {cs.year}</Eyebrow>
            <h1 className="h1 mt-5 max-w-3xl">{cs.title}</h1>
            <p className="lead mt-6 max-w-xl">{cs.excerpt}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <p className="text-sm text-ink-3 mono">
              {cs.client} — {cs.clientType}
            </p>
          </Reveal>
        </Container>

        {/* Metrics band */}
        <Container variant="w" className="mt-14">
          <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {cs.results.map((r) => (
              <StaggerItem key={r.label} className="bg-bg px-6 py-8 flex flex-col gap-2">
                <span className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {r.metric}
                </span>
                <span className="text-xs text-ink-3 leading-relaxed">{r.label}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>

        {/* Detail body */}
        <Container variant="c" className="mt-16 md:mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
              <Block label="Client">{cs.client}<span className="block text-ink-3 mt-1">{cs.clientType}</span></Block>
              <div className="flex flex-col gap-3">
                <h2 className="eyebrow">Technology stack</h2>
                <div className="flex flex-wrap gap-1.5">
                  {cs.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2 mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="eyebrow">ROI</h2>
                <p className="text-ink">{cs.roi}</p>
              </div>
            </div>

            <div className="flex flex-col gap-12 max-w-none">
              <Field label="Client overview">{cs.overview}</Field>
              <Field label="Business challenge">{cs.challenge}</Field>
              <Field label="Approach">{cs.approach}</Field>
              <Field label="Business impact">{cs.impact}</Field>
            </div>
          </div>
        </Container>

        {/* Next case study */}
        <Container variant="w" className="mt-24">
          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-line bg-surface p-8 transition-all duration-500 hover:border-line-bright hover:bg-surface-2 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col gap-1">
              <span className="eyebrow">Next case study</span>
              <span className="h3 max-w-xl">{next.title}</span>
            </div>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </Container>

        <div className="mt-20">
          <Container variant="c">
            <Button href="/contact" size="lg" withArrow>
              Start a conversation
            </Button>
          </Container>
        </div>
      </article>
      <FinalCta />
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="eyebrow">{label}</h2>
      <p className="text-ink">{children}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <h2 className="eyebrow">{label}</h2>
        <p className="text-lg leading-relaxed text-ink-2 max-w-2xl">{children}</p>
      </div>
    </Reveal>
  );
}
