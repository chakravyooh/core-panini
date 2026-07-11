import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://chakravyooh.github.io/core-panini/sitemap.xml",
    host: "https://chakravyooh.github.io/core-panini",
  };
}
