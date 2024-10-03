import { AboutSection, FeatureSection, HeroSection } from "@/components";

export default function Home() {
  return (
    <div className="content-grid full-width min-h-[calc(100dvh-6rem)]">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
    </div>
  );
}
