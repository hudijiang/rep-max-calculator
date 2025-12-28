import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Rep Max Calculator",
  description: "Calculate your 1RM for Bench Press, Squat, and Deadlift.",
};

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
        {children}
      </body>
    </html>
  );
}
