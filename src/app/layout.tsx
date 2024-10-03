import type { Metadata } from "next";
import { PageLayout } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nauth | Radar Hackathon",
  description:
    "Welcome to Nauth, your reliable partner in securing the authenticity of digital art. Our innovative system ensures that every NFT you mint is unique and legitimate by converting digital artworks to binary and comparing them with our comprehensive database. Protect your intellectual property and maintain transparency in your NFT transactions with Nauth.",
  openGraph: {
    title: "Nauth | Radar Hackathon",
    description:
      "Welcome to Nauth, your reliable partner in securing the authenticity of digital art. Our innovative system ensures that every NFT you mint is unique and legitimate by converting digital artworks to binary and comparing them with our comprehensive database. Protect your intellectual property and maintain transparency in your NFT transactions with Nauth.",
    type: "website",
    locale: "en_US",
    siteName: "Nauth | Radar Hackathon",
    url: "",
    images: "",
  },
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
  // metadataBase: new URL(""),
  keywords: [
    "NFT",
    "authenticity",
    "minting",
    "verification",
    "digital artworks",
    "digital",
    "security",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-roboto-mono antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
