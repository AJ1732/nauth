import { RocketIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { VerifyForm } from "@/components";

const VerificationSection = () => {
  return (
    <section className="space-y-8 lg:space-y-24">
      <h2 className="text-center font-disket-mono text-[2rem] md:text-3xl lg:text-5xl">
        Submit Your Artwork for Verification and Minting
      </h2>

      <div className="flex items-start max-lg:flex-col-reverse justify-between gap-8">
        <VerifyForm />

        <Alert className="border-0 bg-purple-500 text-white lg:max-w-96">
          <RocketIcon className="h-4 w-4 stroke-white" />
          <AlertTitle className="mb-2 font-disket-mono">Heads up!</AlertTitle>
          <AlertDescription>
            After verification, your artwork will be minted as an NFT on the
            Solana blockchain, with full provenance and metadata recorded for
            transparency.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};
export default VerificationSection;
