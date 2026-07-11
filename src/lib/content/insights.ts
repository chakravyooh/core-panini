export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Strategy" | "AI" | "Engineering" | "Cloud" | "Security" | "Leadership" | "Architecture";
  date: string;
  readTime: string;
  author: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "when-not-to-rewrite",
    title: "When not to rewrite",
    excerpt:
      "The rewrite is the most expensive and most seductive decision in engineering. A framework for deciding when it is right — and when it is the wrong call dressed up as progress.",
    category: "Strategy",
    date: "2025-09-12",
    readTime: "7 min",
    author: "Elena Varga",
    body: [
      "Rewrites are the most expensive decision a technology organization can make. They are also the most seductive, because the code in front of you always looks worse than the code you imagine writing next.",
      "The honest test is not whether the current system is imperfect. Every system is imperfect. The test is whether the cost and risk of rebuilding, including the opportunity cost of what your team will not build while rebuilding, is lower than the cost of continuing to extend what exists.",
      "A useful framework: rewrite when the cost of a unit of change in the current system exceeds the cost of a unit of change in a new one, and when the migration can be sequenced without halting the business. Otherwise, refactor. The refactor is almost always the right answer for longer than it feels.",
      "When a rewrite is right, sequence it. Use a strangler pattern, validate in parallel, and never make it a big-bang. The organizations that survive rewrites are the ones that never stopped shipping while doing them.",
    ],
  },
  {
    slug: "ai-systems-worth-trusting",
    title: "Building AI systems worth trusting",
    excerpt:
      "Production AI is not a model. It is the evaluation, guardrails, and observability around a model. What separates AI that ships from AI that stalls.",
    category: "AI",
    date: "2025-08-04",
    readTime: "9 min",
    author: "Sofia Reyes",
    body: [
      "Most AI initiatives do not fail at the model. They fail at the engineering that surrounds it — evaluation, guardrails, observability, and the operational discipline that makes a probabilistic system safe to ship.",
      "The first question is not which model, but how you will know it is working. Build the evaluation harness before the system. Define the cases that matter, the regressions that are unacceptable, and the metrics that map to a business outcome — not a leaderboard.",
      "Then guardrails: input validation, output filtering, and the ability to constrain behavior when confidence is low. A system that can refuse is a system you can trust in production.",
      "Finally, observability. You cannot improve what you cannot see. Trace inputs, outputs, latency, cost, and quality, and review them weekly. The teams that ship AI are the ones that treat it as a system, not a stunt.",
    ],
  },
  {
    slug: "paved-roads-not-platforms",
    title: "Paved roads, not platforms",
    excerpt:
      "The internal developer platform is the most over-promised idea in engineering. What actually works: paved roads that earn adoption, not mandates.",
    category: "Cloud",
    date: "2025-07-18",
    readTime: "6 min",
    author: "David Chen",
    body: [
      "Internal developer platforms fail when they are built as a destination rather than a service. A platform nobody chooses is a cost center with a roadmap.",
      "The pattern that works is the paved road: opinionated templates and self-service paths that make the right thing the easy thing, adopted voluntarily because they are genuinely faster than the alternative.",
      "Start with one road. The most common new-service setup, with provisioning, CI/CD, observability, and secrets handled. Measure how long it takes with and without the road, and let the gap do the selling.",
      "Keep the platform team thin. A small team with a clear catalog and good feedback loops will outperform a large team with a mandate. Adoption is earned, not imposed.",
    ],
  },
  {
    slug: "compliance-as-property",
    title: "Compliance as a property of the system",
    excerpt:
      "Compliance built in is cheap. Compliance bolted on is expensive and brittle. How to make audit-readiness a property of your platform.",
    category: "Security",
    date: "2025-06-02",
    readTime: "8 min",
    author: "Priya Nair",
    body: [
      "Compliance is treated as a project because it is usually added after the system is built. That is why it is expensive, brittle, and resented.",
      "The shift is to make compliance a property of the platform. Access controls, audit logging, data classification, and encryption are defaults of the infrastructure, configured once and inherited by every workload.",
      "This is policy as code and architecture as control. The team building a new service inherits the compliance posture rather than re-deriving it. Audit becomes a query, not a tribunal.",
      "The result: lower cost, shorter audit cycles, and a system where doing the secure thing is also doing the easy thing. That is when compliance stops being a tax and starts being an advantage.",
    ],
  },
  {
    slug: "senior-teams-shipping",
    title: "Why senior teams ship faster",
    excerpt:
      "The counterintuitive economics of senior-only teams. Density beats headcount, and the cost model that looks expensive rarely is.",
    category: "Leadership",
    date: "2025-05-21",
    readTime: "5 min",
    author: "Marcus Okafor",
    body: [
      "There is a persistent belief that senior teams are more expensive. In practice, on hard problems, they are dramatically cheaper.",
      "A senior engineer makes fewer of the decisions that create future cost: fewer architectural dead ends, fewer abstractions that must later be unwound, fewer incidents that absorb the team for weeks. Density beats headcount.",
      "The cost that matters is the cost of the outcome, not the cost of the seat. A small senior team that ships the right thing once is cheaper than a large team that ships the wrong thing twice and maintains it for years.",
      "This is the economics behind specialist consultancies. It is also the economics every engineering leader should apply internally: hire for density, protect focus, and let senior people do senior work.",
    ],
  },
  {
    slug: "architecture-decisions-decade",
    title: "Architecture decisions that survive a decade",
    excerpt:
      "Most architecture is wrong about the future. A discipline for making decisions that age well, and for knowing which decisions are worth making permanent.",
    category: "Architecture",
    date: "2025-04-09",
    readTime: "10 min",
    author: "Marcus Okafor",
    body: [
      "The failure mode of architecture is over-committing to predictions about a future that does not arrive. We design for the system we imagine, and the business outgrows it in a direction we did not foresee.",
      "The discipline is to separate reversible decisions from irreversible ones, and to spend the budget of certainty only where it matters. Most decisions should be made cheaply, documented, and reversible. A few — data ownership, boundaries, identity — deserve permanence.",
      "Boundaries are the decisions that matter most. Get the domain boundaries right and the rest is refactorable. Get them wrong and every later decision is a compromise against the original mistake.",
      "Document decisions as they are made. The Architecture Decision Record is the most undervalued artifact in engineering. It is how a system stays coherent across the people who will inherit it.",
    ],
  },
];

export const insightCategories = [
  "Strategy",
  "AI",
  "Engineering",
  "Cloud",
  "Security",
  "Leadership",
] as const;
