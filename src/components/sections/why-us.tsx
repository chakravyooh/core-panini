import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const reasons = [
  {
    n: "01",
    title: "Specialists, not generalists",
    body: "Every engagement is led by senior people who have carried production responsibility at scale. No juniors on your account.",
  },
  {
    n: "02",
    title: "We own the outcome",
    body: "Accountable for the business result, not just the deliverable. Retention is earned in production, not at handover.",
  },
  {
    n: "03",
    title: "We tell you not to",
    body: "If a rewrite is wrong, or build beats buy, we say so before you spend the money. Honesty is a service, not a risk.",
  },
  {
    n: "04",
    title: "We leave it stronger",
    body: "Architecture, team, and practices measurably better than we found them. Knowledge transfer is part of done.",
  },
];

export function WhyUs() {
  return (
    <section className="section-y">
      <Container variant="w">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why us"
              title={
                <>
                  The difference shows up
                  <br />
                  <span className="text-ink-3">in the result.</span>
                </>
              }
              lead="We are not the cheapest option. We are the one that costs less once the work is done."
            />
          </Reveal>
          <StaggerGroup className="flex flex-col" stagger={0.08}>
            {reasons.map((r) => (
              <StaggerItem
                key={r.n}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-7 first:pt-0 last:border-b-0"
              >
                <span className="eyebrow pt-1.5">{r.n}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="text-ink-3 leading-relaxed max-w-lg">{r.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
