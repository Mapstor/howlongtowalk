import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "howlongtowalk.org",
  description: "Walking and running time calculators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
