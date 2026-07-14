import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/final-cta";
import { insights } from "@/lib/content/insights";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const p = insights.find((i) => i.slug === slug);
    if (!p) return { title: "Insight" };
    return {
      title: p.title,
      description: p.excerpt,
      alternates: { canonical: `/insights/${slug}` },
      openGraph: { title: p.title, description: p.excerpt, type: "article" },
    };
  });
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = insights.find((i) => i.slug === slug);
  if (!p) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    author: { "@type": "Person", name: p.author },
    datePublished: p.date,
    articleSection: p.category,
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
            href="/insights"
            className="group inline-flex items-center gap-1.5 text-sm text-ink-3 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All insights
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{p.category} · {p.readTime}</Eyebrow>
            <h1 className="h1 mt-5 max-w-3xl">{p.title}</h1>
            <p className="lead mt-6 max-w-xl">{p.excerpt}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink-3 mono">
              <span>{p.author}</span>
              <span>·</span>
              <time dateTime={p.date}>
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </Reveal>
        </Container>

        <Container variant="c" className="container-p mt-16 md:mt-24">
          <div className="flex flex-col gap-8">
            {p.body.map((para, i) => (
              <Reveal key={i} delay={0.02 * i}>
                <p
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-ink first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1"
                      : "text-lg leading-relaxed text-ink-2"
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>

        <div className="mt-20">
          <Container variant="c">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to all insights
            </Link>
          </Container>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
