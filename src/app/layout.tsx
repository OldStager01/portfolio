import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tanmay Tambat — Software Engineer",
  description:
    "Software Engineering Intern at Josh Software. Full-stack developer specializing in Node.js, React, and TypeScript.",
  openGraph: {
    title: "Tanmay Tambat — Software Engineer",
    description:
      "Software Engineering Intern at Josh Software. Full-stack developer specializing in Node.js, React, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
