import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xcel Construction Supply",
  description:
    "XCS is a dealer of construction and hardware materials, electrical and plumbing supplies, paints, chemicals, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="og:description"
        content="XCS is a dealer of construction and hardware materials, electrical and plumbing supplies, paints, chemicals, and more."
      />
      <meta
        property="og:image"
        content="https://xcs-eta.vercel.app/images/meta-image.jpg"
      />
      <meta property="og:url" content="https://xcs-eta.vercel.app" />
      <meta name="keywords" content="acoutic, artist, music" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
