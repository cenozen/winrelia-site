# Winrelia website

Vercel-ready source for [www.winrelia.com](https://www.winrelia.com).

## Deploy on Vercel

1. In Vercel, choose **Add New → Project**.
2. Import the GitHub repository `cenozen/winrelia-site`.
3. Keep **Framework Preset: Next.js** and the default build settings.
4. Deploy, then test the generated `*.vercel.app` URL.
5. Only after that test succeeds, add `www.winrelia.com` and `winrelia.com` under **Settings → Domains**.
6. Copy Vercel's exact DNS values into NameSilo. Do not change DNS before the preview URL works.

## Analytics

The site includes Vercel Web Analytics and Speed Insights. After the first deployment, enable both in the Vercel project dashboard.

## Local checks

```bash
npm install
npm run build
```
