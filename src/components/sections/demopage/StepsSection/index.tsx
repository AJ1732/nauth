import { cn } from "@/lib/utils";

const StepsSection = () => {
  return (
    <section className="pb-16 flex flex-col gap-8 md:grid md:grid-cols-3 md:grid-rows-3">
      {steps.map(({ title, step, description, pos }) => (
        <article key={title} className={cn("flex flex-col gap-2", pos)}>
          <span className="w-fit rounded-lg bg-purple-500/10 px-6 py-1.5 text-sm capitalize text-purple-500">
            {title}
          </span>
          <h3 className="ml-1 font-disket-mono text-3xl">{step}</h3>
          <p className="ml-1 text-neutral-400">{description}</p>
        </article>
      ))}
    </section>
  );
};
export default StepsSection;

const steps = [
  {
    title: "step 1",
    step: "Upload Your Artwork",
    description: " Submit your digital artwork for verification.",
    pos: "",
  },
  {
    title: "step 2",
    step: "Binary Conversion and Comparison",
    description:
      "We convert the image into binary data and compare it with our database of previously minted NFTs.",
    pos: "row-start-2 md:col-start-2",
  },
  {
    title: "step 3",
    step: "Receive Authentication",
    description:
      "If your artwork passes verification, it is cleared for minting as an authentic NFT.",
    pos: "row-start-3 md:col-start-3",
  },
];
