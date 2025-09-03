import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// ✅ Import DM Sans with className only
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Theo's Portfolio",
  description: "Technical Writer, Social Media/Content Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ✅ apply font globally with className */}
      <body className={`${dmSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
