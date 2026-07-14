import { Eyebrow } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20 bg-bg text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />
      <Container
        variant="w"
        className={cn(align === "center" && "flex flex-col items-center text-center")}
      >
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            className={cn(
              "h1 mt-5 max-w-4xl",
              align === "center" && "mx-auto"
            )}
          >
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p
              className={cn(
                "lead mt-6 max-w-xl",
                align === "center" && "mx-auto",
                "text-ink-2"
              )}
            >
              {lead}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-9">{children}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
