import type { MetadataRoute } from "next";
import { servicePages } from "./service-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.winrelia.com/",
      lastModified: new Date("2026-09-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `https://www.winrelia.com/services/${service.slug}`,
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
