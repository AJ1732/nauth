import { Button } from "@/components/ui/button";
import { Anim } from "./components";

const HeroSection = () => {
  return (
    <section className="breakout relative pb-12 pt-20 lg:pt-16">
      <div className="relative flex items-center justify-between gap-40 max-lg:flex-col lg:gap-10">
        <div className="fixed left-40 -z-[1] aspect-square w-80 rounded-full bg-purple-400/10 blur-lg" />

        <div className="flex max-w-2xl flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 px-6 py-20 text-center sm:mx-8 sm:min-h-[calc(100dvh-14rem)] lg:max-h-[800px]">
          <h1 className="font-disket-mono text-2xl md:text-5xl">
            Ensuring Authenticity in the Digital Art World
          </h1>
          <p className="px-2 text-neutral-500">
            Verify the uniqueness and provenance of your NFTs before minting
            with our cutting-edge binary comparison technology
          </p>

          <Button className="mt-12" variant={"secondary"} size={"lg"}>
            Get Started
          </Button>
        </div>

        <div className="flex size-full max-w-xl items-center justify-center">
          <Anim />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
