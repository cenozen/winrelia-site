import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot"], allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.winrelia.com/sitemap.xml",
    host: "https://www.winrelia.com",
  };
}
