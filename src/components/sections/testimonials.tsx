import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  const shown = testimonials.slice(0, 3);
  return (
    <section className="section-y">
      <Container variant="w">
        <SectionHeading
          eyebrow="In their words"
          title={
            <>
              The people we work for
              <br />
              <span className="text-ink-3">are the reference.</span>
            </>
          }
        />
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.08}>
          {shown.map((t) => (
            <StaggerItem key={t.author} className="h-full">
              <TestimonialCard t={t} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
