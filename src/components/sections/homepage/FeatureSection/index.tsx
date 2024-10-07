import { ActionKeySVG, SecuritySVG, SwitchAccessSVG } from "@/svgs";

const FeatureSection = () => {
  return (
    <section className="grid gap-8 pb-10 pt-20 md:grid-cols-2 lg:grid-cols-3 lg:pb-20">
      {features.map(({ id, title, paragraph, icon }) => (
        <div
          key={id}
          className="flex min-h-60 flex-col justify-between rounded-lg bg-neutral-900/50"
        >
          <article className="relative h-full max-h-40 space-y-1 px-4 py-6">
            <div className="absolute left-0 top-0 -z-[1] aspect-square w-6 border-l border-t border-purple-500" />
            <div className="absolute bottom-0 right-0 -z-[1] aspect-square w-6 border-b border-r border-purple-500" />

            <h3 className="font-disket-mono">{title}</h3>
            <p className="text-neutral-400">{paragraph}</p>
          </article>

          <div className="relative aspect-video min-w-40 overflow-hidden bg-neutral-800/50">
            <div className="absolute -bottom-4 -left-12 *:stroke-neutral-800">
              {icon}
            </div>
            <div className="absolute -bottom-4 z-[1] left-20 *:stroke-purple-500/80">
              {icon}
            </div>
            <div className="absolute -bottom-4 left-60  *:stroke-neutral-800">
              {icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default FeatureSection;

const features = [
  {
    id: 1,
    title: "Binary Image Comparison",
    paragraph:
      "We convert digital artwork to binary and compare them to our database to ensure uniqueness before minting.",
    icon: (
      <ActionKeySVG className="size-60 opacity-50 *:stroke-2" strokeColor="" />
    ),
  },
  {
    id: 2,
    title: "Seamless NFT Integration",
    paragraph:
      "Integration with leading NFT marketplaces to authenticate NFTs in real-time.",
    icon: (
      <SwitchAccessSVG
        className="size-60 opacity-50 *:stroke-2"
        strokeColor=""
      />
    ),
  },
  {
    id: 3,
    title: "Trust and Transparency",
    paragraph:
      "Data-backed verification visible to buyers and creators, ensuring trust in every transaction.",
    icon: (
      <SecuritySVG className="size-60 opacity-50 *:stroke-2" strokeColor="" />
    ),
  },
];
