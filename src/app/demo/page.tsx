import { DPCtaSection, DPIntroSection, StepsSection } from "@/components";

const DemoPage = () => {
  return <div className="min-h-[calc(100dvh-6rem)] py-20 space-y-20">
    <StepsSection />
    <DPIntroSection />
    <DPCtaSection />
  </div>;
};
export default DemoPage;
