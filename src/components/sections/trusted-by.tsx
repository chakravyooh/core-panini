import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { trustedBy } from "@/lib/content/metrics";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-surface/40 py-12">
      <Container variant="w">
        <Reveal>
          <p className="eyebrow text-center">
            Trusted by teams who can&apos;t afford to get this wrong
          </p>
        </Reveal>
      </Container>
      <div className="mt-7">
        <Marquee duration={42}>
          {trustedBy.map((name) => (
            <div
              key={name}
              className="mx-8 flex items-center text-xl font-semibold tracking-tight text-ink-3 transition-colors hover:text-ink-2"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
