import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 pt-20">
      <h2 className="text-center font-disket-mono text-[2rem] md:text-3xl lg:text-5xl">
        Authenticate and Mint With Confidence
      </h2>

      <Link href={"/verify"} className="block">
        <Button variant={"primary"} size={"lg"}>
          Get Started
        </Button>
      </Link>
    </section>
  );
};
export default CtaSection;
