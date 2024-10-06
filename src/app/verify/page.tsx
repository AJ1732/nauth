"use client";
import { ProvenanceSection, VerificationSection } from "@/components";
import { useValueContext } from "@/context/provider";

const VerifyPage = () => {
  const { isMinted } = useValueContext();
  return (
    <section className="min-h-[calc(100dvh-6rem)] space-y-20 pt-20">
      {!isMinted ? <VerificationSection /> : <ProvenanceSection />}
    </section>
  );
};
export default VerifyPage;
