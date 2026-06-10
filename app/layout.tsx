import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Tokyo-based software engineer building AI-powered products from zero to production. SRE at Rakuten Travel and indie maker of AI apps.",
  authors: [{ name: profile.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name}`,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/assets/hero-ai-products.png",
        width: 1717,
        height: 916,
        alt: `${profile.name} portfolio hero image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}`,
    description: profile.tagline,
    images: ["/assets/hero-ai-products.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
