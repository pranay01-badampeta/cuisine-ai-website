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
import { COMPARE, PLANS } from "./src/plans";

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
// The "download the comparison table" PDF, printed from a plain HTML table by headless Chrome.
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const table = `<!doctype html><meta charset="utf-8"><style>
  body { font-family: -apple-system, Helvetica, Arial, sans-serif; color: #0a0a0a; margin: 32px; }
  h1 { font-size: 20px; margin: 0 0 4px } p { color: #6b6b6b; font-size: 12px; margin: 0 0 18px }
  table { width: 100%; border-collapse: collapse; font-size: 12px }
  th, td { border-bottom: 1px solid #e4e4e4; padding: 8px 10px; text-align: center }
  th:first-child, td:first-child { text-align: left } th { background: #0a0a0a; color: #fff }
</style><h1>Cuisine.AI – plan comparison</h1><p>Prices per site, excluding VAT.</p>
<table><tr><th>Feature</th>${PLANS.map((p) => `<th>${p.name}</th>`).join("")}</tr>
${COMPARE.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n")}</table>`;
if (fs.existsSync(CHROME)) {
  const tmp = `${process.cwd()}/.comparison.html`;
  fs.writeFileSync(tmp, table);
  execFileSync(CHROME, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${process.cwd()}/docs/cuisine-ai-plan-comparison.pdf`, `file://${tmp}`], { stdio: "ignore" });
  fs.rmSync(tmp);
  console.log("Built docs/cuisine-ai-plan-comparison.pdf");
} else {
  console.warn("Google Chrome not found: the comparison PDF was not rebuilt.");
}

fs.copyFileSync("src/icon.svg", "docs/icon.svg");
fs.writeFileSync("docs/.nojekyll", "");
execFileSync("npx", ["@tailwindcss/cli", "-i", "src/styles.css", "-o", "docs/styles.css", "--minify"], { stdio: "inherit" });
