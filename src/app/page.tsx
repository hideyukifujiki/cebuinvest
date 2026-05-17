import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FourCategories } from "@/components/sections/FourCategories";
import { PurposeCards } from "@/components/sections/PurposeCards";
import { WhyCebu } from "@/components/sections/WhyCebu";
import { PopularAreas } from "@/components/sections/PopularAreas";
import { LifeDesignTimeline } from "@/components/sections/LifeDesignTimeline";
import { LatestGuide } from "@/components/sections/LatestGuide";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: `${siteConfig.name}｜${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FourCategories />
      <PurposeCards />
      <WhyCebu />
      <PopularAreas />
      <LifeDesignTimeline />
      <LatestGuide />
      <RelatedServices />
      <ConsultationCta />
      <StickyCta />
    </>
  );
}
