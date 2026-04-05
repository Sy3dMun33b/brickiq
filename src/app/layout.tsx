import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://brickiq.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BrickIQ | First-pass underwriting for UK property deals",
  description:
    "Paste a Rightmove link. Get estimated profit, ROI, valuation confidence, risk flags, and a deal score—in minutes.",
  keywords: [
    "BrickIQ",
    "UK property",
    "buy-to-let",
    "Rightmove",
    "deal analysis",
    "proptech",
    "property investment software",
  ],
  applicationName: "BrickIQ",
  authors: [{ name: "BrickIQ" }],
  creator: "BrickIQ",
  publisher: "BrickIQ",
  openGraph: {
    title: "BrickIQ | First-pass underwriting for UK property deals",
    description:
      "Standardised first-pass analysis for UK investors—screen more deals with clearer discipline.",
    url: siteUrl,
    siteName: "BrickIQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrickIQ",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrickIQ | First-pass underwriting for UK property deals",
    description:
      "Paste a Rightmove link. Get profit, ROI, risk flags, and a deal score—fast.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafaf9] text-stone-900`}
      >
        <a
          href="#main-content"
          className="absolute -top-12 left-4 z-50 rounded-md bg-stone-900 px-4 py-2 text-white transition-[top] duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
