"use client";
import { useValueContext } from "@/context/provider";
import { useEffect } from "react";

const ProvenanceSection = () => {
  const { provenance, setProvenance } = useValueContext();
  const { artistName, uploadDate, mintedOn } = provenance;
  useEffect(() => {
    setProvenance((prev) => ({
      ...prev,
      artistName: "Sam",
      uploadDate: "Today",
      mintedOn: "Today",
    }));
  }, []);

  console.log(artistName, uploadDate, mintedOn);

  return (
    <section>
      <h2>{artistName}</h2>
      <p>{uploadDate}</p>
      <p>{mintedOn}</p>
    </section>
  );
};
export default ProvenanceSection;
