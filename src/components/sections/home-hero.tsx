"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { heroMetrics } from "@/lib/content/metrics";
import { easeOut } from "@/lib/motion";

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const lines = [
    "Helping Ambitious Businesses",
    "Scale with",
    "Confidence.",
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-36 md:pt-48 pb-20 md:pb-28"
    >
      {/* Ambient grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[60rem] grid-lines opacity-30 mask-fade-b" />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <Container variant="w" className="relative">
        <motion.div style={{ opacity }} className="flex flex-col">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            <Eyebrow>Available for new engagements</Eyebrow>
          </motion.div>

          <h1 className="mt-8 max-w-5xl">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block display"
                  initial={reduce ? undefined : { y: "110%" }}
                  animate={reduce ? undefined : { y: "0%" }}
                  transition={{
                    duration: 0.9,
                    ease: easeOut,
                    delay: 0.1 + i * 0.12,
                  }}
                >
                  {line === "Confidence." ? (
                    <>
                      <span className="text-ink-3 italic font-[450]">{line}</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            className="lead mt-8 max-w-xl"
          >
            We partner with founders and leadership teams to solve critical
            technology and business challenges through executive-level expertise
            in AI, engineering, product, data, compliance, and organizational
            transformation.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.62 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" withArrow>
              Start a conversation
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              See the work
            </Button>
          </motion.div>

          <motion.dl
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4"
          >
            {heroMetrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <dt className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {m.value}
                </dt>
                <dd className="text-xs text-ink-3 max-w-[14rem] leading-relaxed">
                  {m.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}
