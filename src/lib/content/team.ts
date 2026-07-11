export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  expertise: string;
  domain:
    | "Strategy"
    | "AI"
    | "Data"
    | "Compliance"
    | "Cloud"
    | "Architecture"
    | "Product"
    | "Engineering"
    | "DevOps"
    | "Security";
  years: number;
  certifications: string[];
  linkedin: string;
  leadership?: boolean;
  bio: string;
};

export const team: TeamMember[] = [
  {
    slug: "elena-varga",
    name: "Elena Varga",
    role: "Founding Partner · Chief Executive",
    expertise: "Technology Strategy & CTO Advisory",
    domain: "Strategy",
    years: 22,
    certifications: ["TOGAF", "AWS Solutions Architect Professional"],
    linkedin: "#",
    leadership: true,
    bio: "Former CTO of a public SaaS company. Advises executive teams on architecture decisions that define the next decade.",
  },
  {
    slug: "marcus-okafor",
    name: "Marcus Okafor",
    role: "Partner · Chief Technology Officer",
    expertise: "Enterprise & Solution Architecture",
    domain: "Architecture",
    years: 19,
    certifications: ["TOGAF", "AWS Certified Solutions Architect", "CKA"],
    linkedin: "#",
    leadership: true,
    bio: "Architect behind three platform rebuilds at scale. Translates ambiguous business pressure into precise technical decisions.",
  },
  {
    slug: "sofia-reyes",
    name: "Sofia Reyes",
    role: "Partner · Head of AI Engineering",
    expertise: "AI Engineering & Machine Learning",
    domain: "AI",
    years: 16,
    certifications: ["AWS ML Specialty", "Google Professional ML Engineer"],
    linkedin: "#",
    leadership: true,
    bio: "Leads production AI systems from proof to scale. Specialist in evaluation, guardrails, and the engineering that makes AI trustworthy.",
  },
  {
    slug: "david-chen",
    name: "David Chen",
    role: "Partner · Head of Cloud & Platform",
    expertise: "Cloud Architecture & Platform Engineering",
    domain: "Cloud",
    years: 18,
    certifications: ["AWS Solutions Architect Professional", "CKA", "Azure Solutions Architect Expert"],
    linkedin: "#",
    leadership: true,
    bio: "Designs cloud foundations used by hundreds of engineers. Obsessed with cost discipline and developer experience.",
  },
  {
    slug: "amara-singh",
    name: "Amara Singh",
    role: "Principal · Data Science",
    expertise: "Data Science & Decision Intelligence",
    domain: "Data",
    years: 14,
    certifications: ["Google Professional Data Engineer", "Databricks"],
    linkedin: "#",
    bio: "Turns fragmented data into decisions leaders use. Builds analytics that survive contact with the boardroom.",
  },
  {
    slug: "thomas-lindqvist",
    name: "Thomas Lindqvist",
    role: "Principal · Cyber Security",
    expertise: "Cyber Security & Zero Trust",
    domain: "Security",
    years: 17,
    certifications: ["CISSP", "CCSP", "CEH"],
    linkedin: "#",
    bio: "Former CISO of a regulated fintech. Designs security that protects the business instead of slowing it.",
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    role: "Principal · Regulatory Compliance",
    expertise: "Compliance & Privacy Engineering",
    domain: "Compliance",
    years: 15,
    certifications: ["CISM", "ISO 27001 Lead Auditor", "IAPP CIPP"],
    linkedin: "#",
    bio: "Makes SOC 2, HIPAA, and PCI a property of the system, not a project. Audit-ready by design.",
  },
  {
    slug: "james-okafor",
    name: "James Bennett",
    role: "Principal · Product Engineering",
    expertise: "Product Engineering & Design Systems",
    domain: "Engineering",
    years: 16,
    certifications: ["AWS Developer Associate", "PSM II"],
    linkedin: "#",
    bio: "Staff engineer who ships the hard parts. Writes code teams still thank him for years later.",
  },
  {
    slug: "yuki-tanaka",
    name: "Yuki Tanaka",
    role: "Principal · Product Management",
    expertise: "Product Management & Discovery",
    domain: "Product",
    years: 13,
    certifications: ["PSM III", "Pragmatic Marketing"],
    linkedin: "#",
    bio: "Product leader who connects strategy to shipped work. Sharpens what to build and the order to build it in.",
  },
  {
    slug: "omar-haddad",
    name: "Omar Haddad",
    role: "Principal · DevOps & SRE",
    expertise: "DevOps, SRE & Reliability",
    domain: "DevOps",
    years: 15,
    certifications: ["CKA", "AWS DevOps Engineer Professional", "GCP PCA"],
    linkedin: "#",
    bio: "Makes deployment boring and incidents rare. Builds the paved roads the rest of the team runs on.",
  },
];

export const leadership = team.filter((m) => m.leadership);
export const teamDomains = [
  "Strategy",
  "AI",
  "Data",
  "Compliance",
  "Cloud",
  "Architecture",
  "Product",
  "Engineering",
  "DevOps",
  "Security",
] as const;
