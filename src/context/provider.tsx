"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface ProvenanceData {
  artistName: string;
  uploadDate: string;
  mintedOn: string;
}

interface ContextType {
  isMinted: boolean;
  setIsMinted: React.Dispatch<React.SetStateAction<boolean>>;
  provenance: ProvenanceData;
  setProvenance: React.Dispatch<React.SetStateAction<ProvenanceData>>;
}

const defaultProvenance: ProvenanceData = {
  artistName: "",
  uploadDate: "",
  mintedOn: "",
};

const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMinted, setIsMinted] = useState(false);
  const [provenance, setProvenance] =
    useState<ProvenanceData>(defaultProvenance);

  const contextValue = {
    provenance,
    setProvenance,
    isMinted,
    setIsMinted,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useValueContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within ContextProvider");
  }
  return context;
};

export default ContextProvider;
