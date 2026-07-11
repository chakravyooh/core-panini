import { Container } from "@/components/ui/container";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { metrics } from "@/lib/content/metrics";

export function MetricsBand() {
  return (
    <section className="border-y border-line bg-surface/40">
      <Container variant="w">
        <StaggerGroup className="grid grid-cols-2 gap-y-12 py-14 md:grid-cols-4 md:py-16">
          {metrics.map((m) => (
            <StaggerItem key={m.label} className="flex flex-col gap-2 md:px-4 md:border-l md:first:border-l-0 md:border-line">
              <div className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </div>
              <p className="text-sm text-ink-3 max-w-[12rem] leading-relaxed">
                {m.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
