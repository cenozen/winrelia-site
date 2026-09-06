import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./strategy.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winrelia.com"),
  title: {
    default: "Winrelia | China Sourcing & E-commerce Supply Chain",
    template: "%s | Winrelia",
  },
  description:
    "China sourcing, supplier checking, product QC, private label packaging, carton optimization, warehouse storage and multi-supplier consolidation for online sellers and growing brands.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  keywords: ["China sourcing for e-commerce sellers", "China product QC", "private label packaging China", "supplier consolidation China", "carton optimization", "China warehouse storage"],
  authors: [{ name: "WINRELIA TECHNOLOGY CO., LTD" }],
  creator: "WINRELIA TECHNOLOGY CO., LTD",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Winrelia",
    title: "Winrelia | China Sourcing & E-commerce Supply Chain",
    description:
      "A China-side operations team for online sellers: sourcing, QC, private label, packaging optimization, consolidation, warehousing and shipment preparation.",
    images: [{ url: "/winrelia-logo.png", width: 2048, height: 682, alt: "Winrelia China-side e-commerce supply chain" }],
  },
  twitter: { card: "summary_large_image", title: "Winrelia | China Sourcing & E-commerce Supply Chain", description: "China-side sourcing, QC, private label, packaging optimization, consolidation and warehouse support for online sellers.", images: ["/winrelia-logo.png"] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.winrelia.com/#organization",
      name: "Winrelia Technology Co., Ltd.",
      legalName: "WINRELIA TECHNOLOGY CO., LTD",
      url: "https://www.winrelia.com/",
      logo: "https://www.winrelia.com/winrelia-logo.png",
      description: "China-side sourcing and e-commerce supply chain operations for online sellers and growing brands.",
      email: "winrelia@hotmail.com",
      telephone: "+8613430302527",
      employee: { "@id": "https://www.winrelia.com/#owen-liang" },
      address: { "@type": "PostalAddress", addressLocality: "Shenzhen", addressRegion: "Guangdong", addressCountry: "CN" },
      areaServed: ["United Kingdom", "European Union", "United States", "Australia"],
      knowsAbout: ["China sourcing", "supplier checking", "product quality control", "private label packaging", "carton optimization", "multi-supplier consolidation", "warehouse storage"],
    },
    {
      "@type": "Person",
      "@id": "https://www.winrelia.com/#owen-liang",
      name: "Owen Liang",
      jobTitle: "China Sourcing & E-commerce Supply Chain Lead",
      url: "https://www.winrelia.com/#about",
      sameAs: ["https://www.linkedin.com/in/owen-l-066393135/"],
      worksFor: { "@id": "https://www.winrelia.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.winrelia.com/#website",
      url: "https://www.winrelia.com/",
      name: "Winrelia",
      publisher: { "@id": "https://www.winrelia.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://www.winrelia.com/#ecommerce-supply-chain-service",
      name: "China-side e-commerce supply chain operations",
      serviceType: "China sourcing, QC, private label, packaging optimization, consolidation and warehouse support",
      provider: { "@id": "https://www.winrelia.com/#organization" },
      areaServed: ["United Kingdom", "European Union", "United States", "Australia"],
      audience: { "@type": "BusinessAudience", audienceType: "Online sellers and growing e-commerce brands" },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
