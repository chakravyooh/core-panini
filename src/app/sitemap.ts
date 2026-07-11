import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content/caseStudies";
import { insights } from "@/lib/content/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chakravyooh.github.io/core-panini";
  const staticRoutes = [
    "",
    "/industries",
    "/case-studies",
    "/team",
    "/about",
    "/contact",
    "/careers",
    "/insights",
    "/partners",
    "/faq",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((p) => ({
      url: `${base}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
