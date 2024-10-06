"use client";
import { useValueContext } from "@/context/provider";

const ProvenanceSection = () => {
  const { provenance } = useValueContext();
  const { artistName, uploadDate, mintedOn } = provenance;

  return (
    <section>
      <h2>{artistName}</h2>
      <p>{uploadDate}</p>
      <p>{mintedOn}</p>
    </section>
  );
};
export default ProvenanceSection;
