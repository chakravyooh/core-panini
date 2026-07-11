import { HomeHero } from "@/components/sections/home-hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ExpertiseSection } from "@/components/sections/expertise";
import { WhyUs } from "@/components/sections/why-us";
import { FeaturedIndustries } from "@/components/sections/featured-industries";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { MetricsBand } from "@/components/sections/metrics-band";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustedBy />
      <ExpertiseSection />
      <WhyUs />
      <FeaturedIndustries />
      <FeaturedCaseStudies />
      <Testimonials />
      <MetricsBand />
      <FinalCta />
    </>
  );
}
