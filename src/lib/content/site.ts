export const site = {
  name: "Core Panini",
  shortName: "Panini",
  tagline: "Your Growth Partner",
  description:
    "A Growth Partner helping ambitious businesses scale with confidence — through experienced leadership across technology, AI, data, product, and compliance.",
  email: "hello@corepanini.com",
  phone: "+1 (415) 555-0142",
  linkedin: "https://www.linkedin.com/company/core-panini",
  url: "https://chakravyooh.github.io/core-panini",
  basePath: "/core-panini",
  founded: 2014,
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Expertise",
    href: "/#expertise",
    children: [
      {
        label: "Technology Strategy",
        href: "/#expertise",
        description: "Architecture decisions that survive the next decade.",
      },
      {
        label: "AI Engineering",
        href: "/#expertise",
        description: "Production ML, RAG, and intelligent systems.",
      },
      {
        label: "Cloud & Platform",
        href: "/#expertise",
        description: "Multi-cloud architecture and platform engineering.",
      },
      {
        label: "Product Engineering",
        href: "/#expertise",
        description: "Software built to scale and to last.",
      },
      {
        label: "Cyber Security",
        href: "/#expertise",
        description: "Defense, compliance, and resilience.",
      },
      {
        label: "CTO Advisory",
        href: "/#expertise",
        description: "Experienced leadership on demand.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const offices: { city: string; region: string; lines: string[] }[] = [
  {
    city: "San Francisco",
    region: "Americas HQ",
    lines: ["535 Mission Street, Suite 1400", "San Francisco, CA 94105"],
  },
  {
    city: "London",
    region: "EMEA",
    lines: ["1 Finsbury Avenue", "London EC2M 2PF"],
  },
  {
    city: "Singapore",
    region: "APAC",
    lines: ["8 Marina View", "#41-04 Asia Square Tower 1", "Singapore 018960"],
  },
];

export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Partners", href: "/partners" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { label: "Strategy", href: "/#expertise" },
        { label: "AI Engineering", href: "/#expertise" },
        { label: "Cloud & Platform", href: "/#expertise" },
        { label: "Cyber Security", href: "/#expertise" },
      ],
    },
    {
      title: "Work",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Industries", href: "/industries" },
        { label: "Insights", href: "/insights" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/contact#faq" },
        { label: "LinkedIn", href: site.linkedin },
      ],
    },
  ];
