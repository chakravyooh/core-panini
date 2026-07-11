export type CaseStudy = {
  slug: string;
  client: string;
  clientType: string;
  industry: string;
  title: string;
  excerpt: string;
  overview: string;
  challenge: string;
  approach: string;
  stack: string[];
  results: { metric: string; label: string }[];
  impact: string;
  roi: string;
  year: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lending-platform-modernization",
    client: "A Fortune 500 consumer lender",
    clientType: "Financial services · 6,000 employees",
    industry: "Finance",
    title: "Replatforming a national lender for real-time decisions",
    excerpt:
      "We replaced a 20-year-old decisioning core with a cloud-native platform that approves loans in seconds, not days.",
    overview:
      "A national consumer lender was losing share to faster digital challengers. Its decisioning core, two decades of accumulated logic on a mainframe, could not meet modern latency, audit, or experimentation requirements.",
    challenge:
      "Migrate mission-critical decisioning off a mainframe without halting originations, while improving latency from days to seconds, keeping every decision auditable, and introducing the experimentation the business needed to compete.",
    approach:
      "We ran a six-week architecture discovery to define target domains and a strangler-fig migration path, then delivered the platform in increments: a new decisioning service behind the existing interface, a feature-flagged rollout, parallel-run validation, and a controlled cutover with full audit lineage.",
    stack: ["AWS", "Kubernetes", "Kafka", "PostgreSQL", "Go", "Feature flags", "OpenTelemetry"],
    results: [
      { metric: "2.4s", label: "Median decision latency, from 3 days" },
      { metric: "99.98%", label: "Decisioning availability during cutover" },
      { metric: "3.1x", label: "Experiment throughput for pricing models" },
      { metric: "0", label: "Origination days lost to migration" },
    ],
    impact:
      "The lender regained competitive parity on speed, opened a continuous experimentation program on pricing and risk, and cut per-loan infrastructure cost by 41%. The audit lineage built during migration became a durable advantage in subsequent regulatory reviews.",
    roi: "312% over 24 months, payback in 7 months.",
    year: "2024",
    featured: true,
  },
  {
    slug: "health-ai-documentation",
    client: "A regional health system",
    clientType: "Healthcare · 14 hospitals",
    industry: "Healthcare",
    title: "Ambient AI that gave clinicians their evenings back",
    excerpt:
      "An ambient documentation assistant, built to clinical and HIPAA standards, cut charting time by 42% across 14 hospitals.",
    overview:
      "A regional health system faced clinician burnout and attrition driven largely by after-hours documentation. Leadership wanted ambient AI that reduced charting without compromising clinical accuracy or privacy.",
    challenge:
      "Build a clinically reliable ambient documentation assistant under HIPAA, integrate it with the EHR, and prove measurable time savings and clinician acceptance across a dispersed hospital network.",
    approach:
      "We led vendor selection, designed the privacy architecture (on-prem inference for PHI, de-identification, and audit logging), integrated with the EHR via FHIR, and ran a measured pilot with clinician feedback loops before scaling.",
    stack: ["Azure", "FHIR", "Kubernetes", "On-prem inference", "Audit logging"],
    results: [
      { metric: "42%", label: "Reduction in after-hours documentation" },
      { metric: "88%", label: "Clinician acceptance after 90 days" },
      { metric: "1.7h", label: "Reclaimed per clinician per day" },
      { metric: "0", label: "PHI exposure incidents during pilot" },
    ],
    impact:
      "Documentation load fell sharply, clinician satisfaction improved, and the system retained staff it was previously losing to burnout. The privacy architecture became a reusable pattern adopted for subsequent AI initiatives.",
    roi: "Recruitment and retention savings alone exceeded platform cost in year one.",
    year: "2024",
    featured: true,
  },
  {
    slug: "predictive-maintenance-manufacturing",
    client: "A global industrial manufacturer",
    clientType: "Manufacturing · 38 plants",
    industry: "Manufacturing",
    title: "Predictive maintenance across a 38-plant estate",
    excerpt:
      "Edge data and ML models that cut unplanned downtime 18% and turned maintenance from a cost center into a strategy.",
    overview:
      "A global manufacturer ran maintenance reactively across 38 plants, with unplanned downtime costing tens of millions annually. Asset data existed but was siloed by site and vendor.",
    challenge:
      "Unify siloed operational data across brownfield equipment, build predictive models that maintenance teams trusted, and shift from calendar-based to condition-based maintenance without disrupting production.",
    approach:
      "We delivered an edge-to-cloud data platform, standardized asset taxonomies, and built ML models validated against historian data and technician input. A pilot at three plants proved reliability before scaling, with change management built in.",
    stack: ["Azure", "Edge runtime", "Time-series DB", "Python", "MLflow"],
    results: [
      { metric: "18%", label: "OEE improvement across pilot plants" },
      { metric: "31%", label: "Reduction in unplanned downtime" },
      { metric: "$14M", label: "Avoided downtime cost, year one" },
      { metric: "9 mo", label: "From pilot to 38-plant rollout" },
    ],
    impact:
      "Maintenance shifted from reactive to predictive, downtime and spare-parts cost fell, and the unified data platform became the foundation for quality and energy initiatives.",
    roi: "214% over 18 months, payback in 11 months.",
    year: "2023",
    featured: true,
  },
  {
    slug: "composable-commerce-retail",
    client: "A multi-brand retailer",
    clientType: "Retail · $1.2B online revenue",
    industry: "Retail",
    title: "Composable commerce that doubled conversion uplift",
    excerpt:
      "A headless, composable commerce rebuild that shortened launch cycles 3x and lifted conversion by 27%.",
    overview:
      "A multi-brand retailer's monolithic commerce platform could not keep pace with brand launches or experimentation, throttling growth and inflating per-launch cost.",
    challenge:
      "Replatform to composable commerce without disrupting $1.2B in online revenue, and establish a foundation every brand could reuse.",
    approach:
      "We designed a composable, headless architecture with a shared commerce core, brand presentation layers, and a unified inventory service. Migration used a strangler pattern with parallel-run validation and a brand-by-brand cutover.",
    stack: ["GCP", "Next.js", "GraphQL", "Composable commerce", "Kubernetes"],
    results: [
      { metric: "27%", label: "Increase in online conversion" },
      { metric: "3x", label: "Faster brand launch cycles" },
      { metric: "41%", label: "Lower per-launch platform cost" },
      { metric: "0", label: "Revenue days lost during migration" },
    ],
    impact:
      "The retailer now launches brands in weeks, experiments continuously, and runs a shared commerce foundation that scales across the portfolio at lower cost.",
    roi: "268% over 24 months, payback in 9 months.",
    year: "2024",
    featured: true,
  },
  {
    slug: "fraud-detection-fintech",
    client: "A high-growth payments fintech",
    clientType: "Fintech · 40M users",
    industry: "Finance",
    title: "Real-time fraud detection at 40M-user scale",
    excerpt:
      "A real-time fraud platform that cut losses 34% while keeping false declines low and latency under 60ms.",
    overview:
      "A payments fintech faced rising fraud losses and false-decline pressure as volume scaled. Its batch scoring could not keep pace with real-time attack patterns.",
    challenge:
      "Build real-time, explainable fraud detection at scale, without inflating false declines or adding latency users would notice.",
    approach:
      "We designed a streaming fraud platform with feature stores, online and offline model training, and human-in-the-review loops. Explainability was built in so analysts and regulators could understand every block.",
    stack: ["AWS", "Kafka", "Feature store", "Python", "Online inference"],
    results: [
      { metric: "34%", label: "Reduction in fraud losses" },
      { metric: "<60ms", label: "Decision latency p99" },
      { metric: "9%", label: "Reduction in false declines" },
      { metric: "100%", label: "Decisions explainable on demand" },
    ],
    impact:
      "Fraud losses fell while authorization rates rose. The platform's explainability became a trust asset in relationships with partners and regulators.",
    roi: "195% over 18 months, payback in 8 months.",
    year: "2023",
  },
  {
    slug: "platform-engineering-scaleup",
    client: "A Series D technology scale-up",
    clientType: "Technology · 900 engineers",
    industry: "Technology",
    title: "An internal platform that 4x'd deployment frequency",
    excerpt:
      "Golden paths and self-service infrastructure that turned weeks of setup into hours across 900 engineers.",
    overview:
      "A Series D scale-up's engineering velocity was capped by manual provisioning and duplicated effort across teams. Setup for a new service took weeks.",
    challenge:
      "Build an internal developer platform that 900 engineers would actually adopt, without creating a bottleneck team or slowing autonomy.",
    approach:
      "We built paved-road templates, self-service provisioning, and a golden-path catalog, governed by a thin platform team. Adoption was voluntary and metric-driven, with feedback loops into the roadmap.",
    stack: ["Kubernetes", "Backstage", "Terraform", "GitHub Actions", "OpenTelemetry"],
    results: [
      { metric: "4.1x", label: "Increase in deployment frequency" },
      { metric: "3h", label: "New-service setup, from 3 weeks" },
      { metric: "52%", label: "Reduction in change-related incidents" },
      { metric: "73%", label: "Services on the paved road" },
    ],
    impact:
      "Engineering velocity scaled with headcount, incidents fell, and the platform team stayed small. Developer satisfaction rose measurably in internal surveys.",
    roi: "Equivalent to 60 engineer-years reclaimed annually.",
    year: "2024",
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
