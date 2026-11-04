import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Abenezer Teshome — Software Developer & Odoo ERP Developer",
    template: "%s | Abenezer Teshome",
  },
  description:
    "Abenezer Teshome is a Software Developer and Odoo ERP Developer building practical business software, ERP customizations, and full-stack applications.",
  openGraph: {
    title: "Abenezer Teshome — Software Developer & Odoo ERP Developer",
    description:
      "Practical software solutions, ERP customization, and business applications.",
    type: "website",
    images: ["/opengraph-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abenezer Teshome — Software Developer & Odoo ERP Developer",
    description:
      "Practical software solutions, ERP customization, and business applications.",
    images: ["/opengraph-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
