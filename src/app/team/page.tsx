import type { Metadata } from "next";
import { TeamPageClient } from "@/components/sections/team-page-client";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Leadership and experienced specialists across technology strategy, AI engineering, data science, compliance, cloud, architecture, product, engineering, DevOps, and cyber security.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
