import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howlongtowalk.org"),
  title: {
    default: "How Long to Walk | Walking & Running Time Calculator",
    template: "%s | howlongtowalk.org",
  },
  description:
    "Calculate how long it takes to walk or run any distance. Accurate walking times based on pace, with calculators for miles, kilometers, and popular distances.",
  keywords: [
    "walking time calculator",
    "how long to walk",
    "walking pace",
    "running time calculator",
    "distance calculator",
    "steps calculator",
  ],
  authors: [{ name: "howlongtowalk.org" }],
  creator: "howlongtowalk.org",
  publisher: "howlongtowalk.org",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://howlongtowalk.org",
    siteName: "howlongtowalk.org",
    title: "How Long to Walk | Walking & Running Time Calculator",
    description:
      "Calculate how long it takes to walk or run any distance. Accurate walking times based on pace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "howlongtowalk.org - Walking Time Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long to Walk | Walking & Running Time Calculator",
    description:
      "Calculate how long it takes to walk or run any distance. Accurate walking times based on pace.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
