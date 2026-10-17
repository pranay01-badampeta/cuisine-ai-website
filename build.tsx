/**
 * Builds the static website into docs/ (what GitHub Pages serves):
 * renders each React page to plain HTML, then compiles only the Tailwind classes they use.
 *
 *   npm run build
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SiteLayout from "./src/layout";
import WelcomePage from "./src/page";
import PricingPage from "./src/pricing";

const PAGES: { file: string; title: string; description: string; page: ReactElement }[] = [
  {
    file: "index.html",
    title: "Cuisine.AI · Food safety, stock and invoices for restaurants, with AI",
    description:
      "HACCP records, stock, supplier orders and invoices in one app for restaurants and bars. Take a photo of an invoice and the AI updates your stock, prices and food costs.",
    page: <WelcomePage />,
  },
  {
    file: "pricing.html",
    title: "Pricing · Cuisine.AI",
    description:
      "Cuisine.AI plans for restaurants and bars: food safety included in every plan, AI invoice scans, stock, ordering and margins. One price per site, whole team included.",
    page: <PricingPage />,
  },
];

fs.mkdirSync("docs", { recursive: true });
for (const p of PAGES) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.description}">
<meta property="og:type" content="website">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.description}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body class="min-h-full font-sans antialiased">
${renderToStaticMarkup(<SiteLayout>{p.page}</SiteLayout>)}
</body>
</html>
`;
  fs.writeFileSync(`docs/${p.file}`, html);
  console.log(`Built docs/${p.file} (${(html.length / 1024).toFixed(0)} kB)`);
}
fs.copyFileSync("src/icon.svg", "docs/icon.svg");
fs.writeFileSync("docs/.nojekyll", "");
execFileSync("npx", ["@tailwindcss/cli", "-i", "src/styles.css", "-o", "docs/styles.css", "--minify"], { stdio: "inherit" });
