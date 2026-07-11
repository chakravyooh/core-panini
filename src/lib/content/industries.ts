export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  metric: { value: string; label: string };
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Clinical-grade technology that earns trust.",
    challenges: [
      "Interoperability across fragmented clinical systems",
      "HIPAA and HITECH compliance burden",
      "Legacy EHR lock-in and slow integration cycles",
      "Pressure to prove clinical and operational ROI",
    ],
    solutions: [
      "HIPAA-aligned data platforms and FHIR-based interoperability",
      "Clinical workflow automation and ambient AI documentation",
      "Modern data lakehouse for population health and research",
      "Security and audit programs built into the platform",
    ],
    outcomes: [
      "Faster clinical workflows and reduced documentation load",
      "Audit-ready systems with provable compliance posture",
      "Unified data enabling research and population analytics",
      "Lower integration cost and shorter time-to-value",
    ],
    metric: { value: "42%", label: "Reduction in clinician documentation time" },
  },
  {
    slug: "finance",
    name: "Finance",
    summary: "Systems where accuracy and trust are non-negotiable.",
    challenges: [
      "Regulatory pressure: DORA, MiFID, SOC 2, Basel III",
      "Legacy core banking and risk platforms",
      "Fraud and the cost of real-time detection",
      "Speed-to-market without compromising controls",
    ],
    solutions: [
      "Risk and treasury platform modernization",
      "Real-time fraud detection and ML-based monitoring",
      "Cloud-native, auditable architectures",
      "Data lineage and model governance for model risk",
    ],
    outcomes: [
      "Faster product launches with controls intact",
      "Lower operational risk and audit cost",
      "Real-time fraud and anomaly detection",
      "Resilient, recoverable core systems",
    ],
    metric: { value: "3.2x", label: "Faster product launch cycles" },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "From the floor to the boardroom, connected.",
    challenges: [
      "OT/IT convergence and brownfield equipment",
      "Unplanned downtime and yield loss",
      "Supply chain visibility and volatility",
      "Workforce transition and knowledge loss",
    ],
    solutions: [
      "Industrial IoT and edge data platforms",
      "Predictive maintenance and quality ML models",
      "Digital twin and real-time OEE dashboards",
      "Connected supply chain and planning systems",
    ],
    outcomes: [
      "Reduced unplanned downtime and higher yield",
      "End-to-end visibility across plants and supply",
      "Data-driven planning and scheduling",
      "A workforce augmented, not replaced, by AI",
    ],
    metric: { value: "18%", label: "OEE improvement across pilot plants" },
  },
  {
    slug: "retail",
    name: "Retail",
    summary: "Commerce that moves at the speed of demand.",
    challenges: [
      "Composable commerce migration from monoliths",
      "Real-time inventory across channels",
      "Personalization without breaching privacy",
      "Margin pressure and rising fulfillment cost",
    ],
    solutions: [
      "Composable, headless commerce architecture",
      "Unified inventory and order management",
      "Personalization and recommendation engines",
      "Demand forecasting and pricing optimization",
    ],
    outcomes: [
      "Faster storefront iteration and experimentation",
      "Accurate, real-time inventory across channels",
      "Higher conversion and basket size",
      "Lower fulfillment and markdown cost",
    ],
    metric: { value: "27%", label: "Increase in online conversion" },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary: "Networks, data, and customer experience at scale.",
    challenges: [
      "OSS/BSS modernization under decades of debt",
      "Network operations data siloed across domains",
      "Churn and the cost of acquisition",
      "5G monetization and edge services",
    ],
    solutions: [
      "Cloud-native OSS/BSS and catalog platforms",
      "AI-driven network operations and assurance",
      "Customer 360 and churn prevention models",
      "Edge and 5G service platforms",
    ],
    outcomes: [
      "Leaner, modular operations stack",
      "Proactive network assurance and fewer outages",
      "Lower churn and higher lifetime value",
      "New revenue from edge and 5G services",
    ],
    metric: { value: "31%", label: "Reduction in customer churn" },
  },
  {
    slug: "government",
    name: "Government",
    summary: "Public-sector technology done responsibly.",
    challenges: [
      "Procurement and compliance constraints",
      "Citizen experience lagging private sector",
      "Legacy mainframes and brittle integrations",
      "Security, privacy, and data sovereignty",
    ],
    solutions: [
      "Human-centered digital services and portals",
      "Cloud adoption aligned to FedRAMP and sovereignty",
      "Legacy modernization with zero-downtime migration",
      "Zero-trust security and identity programs",
    ],
    outcomes: [
      "Faster, more accessible citizen services",
      "Lower cost and risk in core operations",
      "Audit and sovereignty-compliant platforms",
      "A foundation for continuous improvement",
    ],
    metric: { value: "63%", label: "Increase in digital service adoption" },
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Moving goods, data, and decisions in concert.",
    challenges: [
      "Fragmented TMS, WMS, and telematics data",
      "Volatility and the limits of planning",
      "Last-mile cost and visibility",
      "Carbon reporting and regulatory pressure",
    ],
    solutions: [
      "Real-time control towers and visibility platforms",
      "ML-driven routing, scheduling, and capacity",
      "IoT and telematics integration",
      "Sustainability and emissions tracking",
    ],
    outcomes: [
      "Lower cost-per-mile and on-time improvement",
      "End-to-end shipment visibility",
      "Resilient planning under volatility",
      "Compliant, auditable emissions reporting",
    ],
    metric: { value: "14%", label: "Reduction in cost-per-shipment" },
  },
  {
    slug: "education",
    name: "Education",
    summary: "Technology that serves learning outcomes.",
    challenges: [
      "SIS and LMS fragmentation",
      "Student engagement and retention",
      "Data privacy and FERPA compliance",
      "Constrained budgets and IT capacity",
    ],
    solutions: [
      "Unified data platforms for student success",
      "Adaptive learning and early-warning analytics",
      "Privacy-by-design architecture",
      "Cloud migration and platform consolidation",
    ],
    outcomes: [
      "Improved retention and outcomes",
      "A single view of the student journey",
      "Lower IT overhead and better resilience",
      "Compliant, privacy-respecting systems",
    ],
    metric: { value: "19%", label: "Improvement in student retention" },
  },
  {
    slug: "energy",
    name: "Energy",
    summary: "Reliability, transition, and intelligence.",
    challenges: [
      "Grid reliability and renewable integration",
      "Asset performance across remote fleets",
      "Regulatory and emissions reporting",
      "Operational data siloed by site",
    ],
    solutions: [
      "Grid analytics and demand forecasting",
      "Asset performance management and predictive ML",
      "Unified operational data platforms",
      "Emissions and compliance reporting",
    ],
    outcomes: [
      "Higher asset uptime and lower maintenance cost",
      "Stabler grid operations under renewables",
      "Faster, auditable regulatory reporting",
      "Data-driven operations across the enterprise",
    ],
    metric: { value: "23%", label: "Reduction in unplanned asset downtime" },
  },
  {
    slug: "technology",
    name: "Technology",
    summary: "The companies other consultancies learn from.",
    challenges: [
      "Scaling architecture and org past the founder stage",
      "Reliability and the cost of incidents",
      "Platform fragmentation and rebuild pressure",
      "Talent density and shipping velocity",
    ],
    solutions: [
      "Architecture review and scale strategy",
      "SRE practice and reliability engineering",
      "Internal developer platforms and paved roads",
      "Senior engineering and leadership augmentation",
    ],
    outcomes: [
      "Architecture that scales with the business",
      "Fewer, shorter, and better-handled incidents",
      "Higher shipping velocity with safety",
      "A stronger, more senior engineering culture",
    ],
    metric: { value: "4.1x", label: "Increase in deployment frequency" },
  },
];
