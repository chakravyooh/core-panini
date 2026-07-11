import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkipLink } from "@/components/skip-link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://chakravyooh.github.io/core-panini";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Core Panini — Senior Technology Specialists",
    template: "%s · Core Panini",
  },
  description:
    "Core Panini is an IT consultancy of senior specialists solving complex business problems through technology strategy, AI engineering, cloud architecture, and product engineering.",
  keywords: [
    "IT consulting",
    "technology strategy",
    "AI engineering",
    "cloud architecture",
    "digital transformation",
    "CTO advisory",
    "cyber security",
    "platform engineering",
  ],
  authors: [{ name: "Core Panini" }],
  creator: "Core Panini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Core Panini",
    title: "Core Panini — Senior Technology Specialists",
    description:
      "An IT consultancy of senior specialists solving complex business problems through technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Panini — Senior Technology Specialists",
    description:
      "An IT consultancy of senior specialists solving complex business problems through technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Core Panini",
  url: siteUrl,
  description:
    "IT consultancy of senior specialists solving complex business problems through technology.",
  sameAs: ["https://www.linkedin.com/company/core-panini"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Core Panini",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-bg text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SkipLink />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
