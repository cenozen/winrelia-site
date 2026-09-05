import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Winrelia website is fully static. Vercel can serve the generated files
  // from its global CDN without a server function or database dependency.
  output: "export",
  poweredByHeader: false,
};

export default nextConfig;
