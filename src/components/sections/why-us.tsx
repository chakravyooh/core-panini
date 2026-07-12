import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const reasons = [
  {
    n: "01",
    title: "Senior expertise from day one",
    body: "Every engagement is led by experienced practitioners with 11–16 years of hands-on leadership across technology, AI, product, data, compliance, and engineering. No handoffs. No junior delivery teams.",
  },
  {
    n: "02",
    title: "Partners in outcomes, not just execution",
    body: "We don't stop at recommendations. We work alongside your team, sharing accountability from strategy through execution until measurable results are achieved.",
  },
  {
    n: "03",
    title: "Advice you can trust — even when it's not what you expect",
    body: "Sometimes the right answer is to simplify, postpone, or avoid an investment altogether. We challenge assumptions, present trade-offs transparently, and recommend what's best for your business — not what's best for our billable hours.",
  },
  {
    n: "04",
    title: "Every engagement leaves you stronger",
    body: "Our goal isn't to create dependency — it's to build capability. We leave behind stronger architectures, more capable teams, better engineering practices, and the knowledge to sustain growth long after the engagement ends.",
  },
];

export function WhyUs() {
  return (
    <section className="section-y">
      <Container variant="w">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title={
                <>
                  The value isn&apos;t in what we deliver.
                  <br />
                  <span className="text-ink-3">It&apos;s in what your business becomes.</span>
                </>
              }
              lead="We don't measure success by presentations or project completion. We measure it by stronger teams, scalable systems, faster execution, and lasting business outcomes."
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
