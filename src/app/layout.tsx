import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://tanmaytambat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tanmay Tambat — Software Engineer",
  description:
    "Software Engineering Intern at Josh Software. Full-stack developer. SIH 2024 National Winner. Specializing in Node.js, React, TypeScript, and Python.",
  keywords: [
    "Tanmay Tambat",
    "software engineer",
    "full stack developer",
    "portfolio",
    "Node.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Tanmay Tambat" }],
  openGraph: {
    title: "Tanmay Tambat — Software Engineer",
    description:
      "Software Engineering Intern at Josh Software. Full-stack developer. SIH 2024 National Winner.",
    url: siteUrl,
    siteName: "Tanmay Tambat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Tambat — Software Engineer",
    description:
      "Software Engineering Intern at Josh Software. Full-stack developer. SIH 2024 National Winner.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanmay Tambat",
  url: siteUrl,
  jobTitle: "Software Engineering Intern",
  worksFor: {
    "@type": "Organization",
    name: "Josh Software Inc.",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "K.K. Wagh Institute of Engineering Education and Research",
  },
  sameAs: [
    "https://github.com/OldStager01",
    "https://www.linkedin.com/in/tanmay-tambat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="mx-auto max-w-content px-6 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
