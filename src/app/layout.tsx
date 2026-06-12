import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Dyer & Blair Investment Bank | East Africa's Premier Investment Platform",
  description:
    "Access world-class brokerage, wealth management, and investment banking services. Trade on the Nairobi Securities Exchange with Kenya's most trusted investment bank.",
  keywords: "investment bank, Kenya, NSE, brokerage, wealth management, Nairobi Securities Exchange",
  openGraph: {
    title: "Dyer & Blair Investment Bank",
    description: "East Africa's premier investment banking platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#020B18] text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
