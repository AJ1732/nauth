import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="full-width content-grid bg-neutral-900/80 py-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center font-disket-mono text-[2rem] md:text-3xl lg:text-5xl">
          Ready to Authenticate Your Art?
        </h2>
        
        <Link href={"/verify"}>
          <Button variant={"primary"} size={"lg"}>
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default CtaSection;
