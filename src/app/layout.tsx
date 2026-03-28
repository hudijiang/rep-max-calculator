import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.onerepmaxcalculator.org'),
  title: "One Rep Max Calculator: Free Bench, Squat & Deadlift 1RM Tool",
  description: "Free One Rep Max calculator for Bench Press, Squat, and Deadlift. Uses Epley & Brzycki formulas to estimate your 1RM and generate percentage-based training charts.",
};

import Navbar from '@/components/Navbar';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`antialiased bg-black text-gray-100`}
      >
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-GGVBYH7HDX" />
    </html>
  );
}
