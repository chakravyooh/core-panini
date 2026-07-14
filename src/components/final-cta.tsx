import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta({
  title = "Let's talk about the decision that decides the next decade.",
  body = "If the problem matters enough to warrant experienced leaders, it matters enough to start the conversation.",
  primaryHref = "/contact",
  primaryLabel = "Start a conversation",
  secondaryHref = "/case-studies",
  secondaryLabel = "See the work",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-y relative overflow-hidden">
      <Container variant="w">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[140%] w-[80%] -translate-x-1/2 bg-noise opacity-[0.04]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="h2">{title}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead mx-auto mt-5">{body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryHref} size="lg" withArrow>
                  {primaryLabel}
                </Button>
                <Button href={secondaryHref} size="lg" variant="secondary">
                  {secondaryLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
