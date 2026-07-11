export type Service = {
  slug: string;
  name: string;
  group: "Strategy" | "AI & Data" | "Engineering" | "Cloud & Ops" | "Security & Compliance" | "Leadership";
  summary: string;
  detail: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "technology-strategy",
    name: "Technology Strategy",
    group: "Strategy",
    summary: "Architecture decisions that survive the next decade.",
    detail:
      "We align technology investment with business strategy — mapping capabilities, sequencing migration, and removing the architectural debt that slows growth.",
    capabilities: [
      "Capability mapping & roadmaps",
      "Migration sequencing",
      "Technology due diligence",
      "Build vs. buy analysis",
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    group: "Strategy",
    summary: "Operating models rebuilt for speed.",
    detail:
      "Modernization programs that change how the business runs — not how it looks. Outcome-led, measured, and delivered in increments that compound.",
    capabilities: [
      "Operating model design",
      "Modernization programs",
      "Change management",
      "Value tracking",
    ],
  },
  {
    slug: "ai-engineering",
    name: "AI Engineering",
    group: "AI & Data",
    summary: "Production ML, RAG, and intelligent systems.",
    detail:
      "From proof to production. We build reliable AI systems — retrieval, evaluation, and observability included — that earn trust through measurable outcomes.",
    capabilities: [
      "RAG & agent systems",
      "Model evaluation & guardrails",
      "MLOps & observability",
      "LLM migration",
    ],
  },
  {
    slug: "data-science",
    name: "Data Science",
    group: "AI & Data",
    summary: "Decisions grounded in evidence.",
    detail:
      "We turn fragmented data into decisions — pipelines, modeling, and dashboards that leadership actually uses to steer the business.",
    capabilities: [
      "Data platforms & modeling",
      "Forecasting & segmentation",
      "Decision intelligence",
      "Analytics as a product",
    ],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    group: "AI & Data",
    summary: "Models that ship and hold up.",
    detail:
      "Custom ML where it earns its keep — recommendation, forecasting, vision, and language — with the engineering rigor that keeps them accurate in production.",
    capabilities: [
      "Recommender systems",
      "Time-series forecasting",
      "Computer vision",
      "Model monitoring",
    ],
  },
  {
    slug: "product-engineering",
    name: "Product Engineering",
    group: "Engineering",
    summary: "Software built to scale and to last.",
    detail:
      "Senior engineers who own outcomes. We build the hard parts — the services, the interfaces, the integrations — with a craft standard most teams never reach.",
    capabilities: [
      "Greenfield platforms",
      "Legacy modernization",
      "Design systems",
      "API & integration",
    ],
  },
  {
    slug: "product-management",
    name: "Product Management",
    group: "Engineering",
    summary: "Discovery, prioritization, and delivery.",
    detail:
      "Product leaders who connect strategy to shipped work — sharpening what to build, sequencing it, and holding the standard for what goes to market.",
    capabilities: [
      "Discovery & roadmap",
      "Prioritization frameworks",
      "Go-to-market alignment",
      "Metrics & experimentation",
    ],
  },
  {
    slug: "cloud-architecture",
    name: "Cloud Architecture",
    group: "Cloud & Ops",
    summary: "Multi-cloud architecture done right.",
    detail:
      "Cloud foundations that are secure, observable, and cost-disciplined — built once, used by every team, and never the reason a launch slips.",
    capabilities: [
      "Landing zones & foundations",
      "Multi-cloud design",
      "Cost optimization",
      "Resilience & DR",
    ],
  },
  {
    slug: "platform-engineering",
    name: "Platform Engineering",
    group: "Cloud & Ops",
    summary: "Paved roads for product teams.",
    detail:
      "Internal developer platforms that turn weeks of setup into hours — golden paths, self-service, and the guardrails that keep production safe.",
    capabilities: [
      "Internal developer platforms",
      "Golden paths & templates",
      "Self-service provisioning",
      "Developer experience",
    ],
  },
  {
    slug: "devops",
    name: "DevOps",
    group: "Cloud & Ops",
    summary: "Pipelines, reliability, and velocity.",
    detail:
      "CI/CD, observability, and SRE practice that make deployment boring and incidents rare — velocity without compromise.",
    capabilities: [
      "CI/CD & release engineering",
      "SRE & incident response",
      "Observability stacks",
      "Infrastructure as code",
    ],
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    group: "Security & Compliance",
    summary: "Defense, resilience, and trust.",
    detail:
      "Threat modeling, detection, and hardening designed for regulated industries — security that protects the business instead of slowing it.",
    capabilities: [
      "Threat modeling & review",
      "Detection & response",
      "Zero trust architecture",
      "Security hardening",
    ],
  },
  {
    slug: "regulatory-compliance",
    name: "Regulatory Compliance",
    group: "Security & Compliance",
    summary: "Audit-ready by design.",
    detail:
      "SOC 2, HIPAA, GDPR, PCI — built into the platform, not bolted on. We make compliance a property of the system, not a project.",
    capabilities: [
      "SOC 2 / HIPAA / PCI",
      "Privacy engineering",
      "Audit readiness",
      "Policy as code",
    ],
  },
  {
    slug: "enterprise-architecture",
    name: "Enterprise Architecture",
    group: "Strategy",
    summary: "Cohesion across the estate.",
    detail:
      "Architecture that connects strategy to systems — domains, boundaries, and roadmaps that keep a growing estate coherent and composable.",
    capabilities: [
      "Domain-driven design",
      "Architecture governance",
      "Capability planning",
      "Technology radar",
    ],
  },
  {
    slug: "solution-architecture",
    name: "Solution Architecture",
    group: "Engineering",
    summary: "The right design for the problem.",
    detail:
      "Senior architects who design the right thing — balancing constraints, integrations, and lifespan — and document it so teams can execute.",
    capabilities: [
      "Solution design & review",
      "Integration architecture",
      "Non-functional design",
      "ADR & documentation",
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    group: "Engineering",
    summary: "Production code, senior hands.",
    detail:
      "Engineers who write the code that ships — clean, tested, and maintainable — embedded with your team or delivering against a fixed scope.",
    capabilities: [
      "Full-stack delivery",
      "API & service design",
      "Test engineering",
      "Performance tuning",
    ],
  },
  {
    slug: "team-augmentation",
    name: "Team Augmentation",
    group: "Engineering",
    summary: "Senior specialists, when you need them.",
    detail:
      "Embed senior expertise where capacity is thin — architects, staff engineers, and leads who raise the level of the team around them.",
    capabilities: [
      "Staff & principal engineers",
      "Technical leadership",
      "Mentoring & uplift",
      "Knowledge transfer",
    ],
  },
  {
    slug: "technology-leadership",
    name: "Technology Leadership",
    group: "Leadership",
    summary: "Fractional and interim leadership.",
    detail:
      "Fractional CTOs and engineering leaders who set direction, hire well, and leave the organization stronger than they found it.",
    capabilities: [
      "Fractional CTO",
      "Engineering leadership",
      "Org design & hiring",
      "Operating cadence",
    ],
  },
  {
    slug: "cto-advisory",
    name: "CTO Advisory",
    group: "Leadership",
    summary: "A senior sounding board for hard calls.",
    detail:
      "Confidential advisory for technology leaders facing the calls that define careers — architecture, build vs. buy, rewrites, and scale.",
    capabilities: [
      "Architecture review",
      "Build vs. buy",
      "Rewrite strategy",
      "Scale & org design",
    ],
  },
];

export const serviceGroups = [
  "Strategy",
  "AI & Data",
  "Engineering",
  "Cloud & Ops",
  "Security & Compliance",
  "Leadership",
] as const;
