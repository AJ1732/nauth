// import { Line90SVG } from "@/svgs";

const FeatureSection = () => {
  return (
    <section className="grid gap-8 pb-10 pt-20 md:grid-cols-2 lg:grid-cols-3 lg:pb-20">
      {features.map(({ id, title, paragraph }) => (
        <div
          key={id}
          className="flex min-h-80 flex-col justify-between rounded-lg bg-neutral-900/50"
        >
          <article className="space-y-1 px-4 py-6">
            <h3 className="font-disket-mono">{title}</h3>
            <p className="text-neutral-400">{paragraph}</p>
          </article>

          <div className="aspect-square min-w-40 bg-neutral-800/50"></div>
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
  },
  {
    id: 2,
    title: "Seamless NFT Integration",
    paragraph:
      "Integration with leading NFT marketplaces to authenticate NFTs in real-time.",
  },
  {
    id: 3,
    title: "Trust and Transparency",
    paragraph:
      "Data-backed verification visible to buyers and creators, ensuring trust in every transaction.",
  },
];
