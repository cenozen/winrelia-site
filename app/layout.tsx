import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FloatingContact } from "./floating-contact";
import "./globals.css";
import "./strategy.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winrelia.com"),
  title: {
    default: "Winrelia | China-Side Supply Chain for E-commerce Brands",
    template: "%s | Winrelia",
  },
  description:
    "China-side supply-chain integration and cost reduction for Amazon, eBay, Shopify and growing e-commerce brands: supplier coordination, QC, consolidation, warehousing, repacking, packaging optimization, private label and shipment preparation.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "China-side supply chain for e-commerce brands",
    "multi-supplier consolidation China",
    "China product QC",
    "e-commerce packaging optimization China",
    "small batch private label China",
    "China warehouse consolidation",
    "Amazon seller China supply chain",
    "Shopify brand China sourcing operations",
  ],
  authors: [{ name: "WINRELIA TECHNOLOGY CO., LTD" }],
  creator: "WINRELIA TECHNOLOGY CO., LTD",
  publisher: "WINRELIA TECHNOLOGY CO., LTD",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Winrelia",
    title: "Winrelia | China-Side Supply Chain for E-commerce Brands",
    description:
      "A China-side supply-chain integration partner helping e-commerce sellers reduce hidden cost across supplier coordination, QC, packaging, consolidation, warehousing and shipment preparation.",
    images: [{ url: "/winrelia-logo.png", width: 2048, height: 682, alt: "Winrelia China-side supply-chain integration for e-commerce brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winrelia | China-Side Supply Chain for E-commerce Brands",
    description:
      "China-side supply-chain integration, QC, packaging optimization, consolidation, warehousing and small-batch private label support for e-commerce brands.",
    images: ["/winrelia-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.winrelia.com/#organization",
      name: "Winrelia",
      legalName: "WINRELIA TECHNOLOGY CO., LTD",
      url: "https://www.winrelia.com/",
      logo: "https://www.winrelia.com/winrelia-logo.png",
      description:
        "China-side supply-chain integration and cost-reduction partner for e-commerce sellers and small brands that source from China.",
      email: "winrelia@hotmail.com",
      telephone: "+8613430302527",
      sameAs: ["https://www.linkedin.com/in/owen-l-066393135/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and supply-chain support",
        email: "winrelia@hotmail.com",
        telephone: "+8613430302527",
        availableLanguage: ["English", "Chinese"],
      },
      employee: { "@id": "https://www.winrelia.com/#owen-liang" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
      areaServed: [
        "United Kingdom",
        "European Union",
        "United States",
        "Canada",
        "Australia",
        "New Zealand",
        "Mexico",
        "Argentina",
        "United Arab Emirates",
      ],
      knowsAbout: [
        "China-side supply-chain integration",
        "multi-supplier consolidation",
        "supplier coordination",
        "product quality control",
        "e-commerce repacking",
        "packaging optimization",
        "small-batch private label",
        "warehouse storage",
        "kitting",
        "shipment preparation",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.winrelia.com/#owen-liang",
      name: "Owen Liang",
      jobTitle: "China-Side Supply Chain & E-commerce Operations Lead",
      url: "https://www.winrelia.com/#about",
      sameAs: ["https://www.linkedin.com/in/owen-l-066393135/"],
      worksFor: { "@id": "https://www.winrelia.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.winrelia.com/#website",
      url: "https://www.winrelia.com/",
      name: "Winrelia",
      description: "China-side supply-chain integration and cost reduction for e-commerce sellers and small brands.",
      publisher: { "@id": "https://www.winrelia.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://www.winrelia.com/#ecommerce-supply-chain-service",
      name: "China-Side Supply Chain Integration for E-commerce Brands",
      serviceType:
        "Supplier coordination, QC, consolidation, warehousing, repacking, packaging optimization, private label, kitting and shipment preparation",
      provider: { "@id": "https://www.winrelia.com/#organization" },
      areaServed: [
        "United Kingdom",
        "European Union",
        "United States",
        "Canada",
        "Australia",
        "New Zealand",
        "Mexico",
        "Argentina",
        "United Arab Emirates",
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Amazon, eBay, Shopify, DTC and other growing e-commerce sellers and small brands sourcing from China",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <FloatingContact />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
