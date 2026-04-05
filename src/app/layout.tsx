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
  themeColor: "#ebeae8",
};

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://brickly.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brickly | Investor-style summaries from Rightmove links",
  description:
    "UK property: paste a Rightmove link for a consistent first read—verdict, numbers, area context, and risk flags. For buy-to-let investors and sourcers. Pre-launch.",
  keywords: [
    "Brickly",
    "UK property",
    "Rightmove",
    "property",
    "listing summary",
  ],
  applicationName: "Brickly",
  authors: [{ name: "Brickly" }],
  creator: "Brickly",
  publisher: "Brickly",
  openGraph: {
    title: "Brickly | Investor-style summaries from Rightmove links",
    description:
      "A calm first read on every listing—structured like an investor memo, not a chat thread.",
    url: siteUrl,
    siteName: "Brickly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brickly",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brickly | Investor-style summaries from Rightmove links",
    description:
      "Verdict, numbers, and risk flags from a listing URL—before you model the deal.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ebeae8] text-stone-900`}
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
