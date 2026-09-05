import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.winrelia.com/",
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
