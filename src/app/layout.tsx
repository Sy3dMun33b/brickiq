import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize the Geist font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize the Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Define metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "BrickIQ | Smarter UK Property Deal Analysis",
  description:
    "BrickIQ helps UK property investors analyse Rightmove deals faster with clear numbers on profit, value, risk, and deal score.",
  keywords: [
    "BrickIQ",
    "UK property investing",
    "Rightmove analysis",
    "deal analysis",
    "property investment software",
  ],
  authors: [{ name: "BrickIQ" }],
  creator: "BrickIQ",
  publisher: "BrickIQ",
  openGraph: {
    title: "BrickIQ | Smarter UK Property Deal Analysis",
    description:
      "Paste a Rightmove link and quickly see profit, value, risk, and a simple deal score.",
    url: "https://brickiq.co.uk/",
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
    title: "BrickIQ | Smarter UK Property Deal Analysis",
    description:
      "Analyse property deals from Rightmove links in minutes with clear, practical numbers.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <a
          href="#main-content"
          className="absolute -top-12 left-4 z-50 rounded-md bg-slate-900 px-4 py-2 text-white transition-[top] duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
