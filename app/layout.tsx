import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./strategy.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winrelia.com"),
  title: "Winrelia | China-side E-commerce Supply Chain & Profit Optimization",
  description:
    "Turn Chinese factory orders into retail-ready, fee-optimized inventory with packaging engineering, small-batch private label, multi-supplier consolidation, quality control and compliance-ready documentation.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Winrelia",
    title: "Winrelia | Your E-commerce Operations Team in China",
    description:
      "China sourcing, QC, private label, packaging optimization, consolidation, warehousing and shipment preparation for online sellers and growing brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
