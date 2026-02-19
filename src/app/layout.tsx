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
    default: "How Long To Walk | Free Walking & Running Time Calculator",
    template: "%s | How Long To Walk",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long to Walk | Walking & Running Time Calculator",
    description:
      "Calculate how long it takes to walk or run any distance. Accurate walking times based on pace.",
  },
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
