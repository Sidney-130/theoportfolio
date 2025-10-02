import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import "aos/dist/aos.css";

// ✅ Import DM Sans with className only
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Web3Theo | Content Manager & Technical Writer",
  description:
    "Social Media/Content Manager & Technical Writer with 2+ years in crypto communications. Specialized in Web3, Solana, and blockchain content.",
  keywords: [
    "Web3",
    "Content Manager",
    "Technical Writer",
    "Solana",
    "Crypto",
    "Blockchain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
