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
    slug: "indrajitsinh-gohil",
    name: "Indrajitsinh Gohil",
    role: "Founder · Principal Engineer",
    expertise: "Software Engineering & Cloud Architecture",
    domain: "Engineering",
    years: 14,
    certifications: [],
    linkedin: "https://www.linkedin.com/in/chakravyooh/",
    leadership: true,
    bio: "Principal engineer with fourteen years across architecture, APIs, and cloud-scale systems. Translates business pressure into precise, durable technical decisions.",
  },
];

export const leadership = team.filter((m) => m.leadership);
export const teamDomains = ["Engineering"] as const;
