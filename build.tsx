/**
 * Builds the static website into docs/ (what GitHub Pages serves):
 * renders the React page to plain HTML, then compiles only the Tailwind classes it uses.
 *
 *   npm run build
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import SiteLayout from "./src/layout";
import WelcomePage from "./src/page";

const TITLE = "Cuisine.AI · Food safety, stock and invoices for restaurants, with AI";
const DESCRIPTION =
  "HACCP records, stock, supplier orders and invoices in one app for restaurants and bars. Take a photo of an invoice and the AI updates your stock, prices and food costs.";

const body = renderToStaticMarkup(
  <SiteLayout>
    <WelcomePage />
  </SiteLayout>,
);

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${TITLE}</title>
<meta name="description" content="${DESCRIPTION}">
<meta property="og:type" content="website">
<meta property="og:title" content="Cuisine.AI — Run your kitchen, not your paperwork">
<meta property="og:description" content="${DESCRIPTION}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body class="min-h-full font-sans antialiased">
${body}
</body>
</html>
`;

fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/index.html", html);
fs.copyFileSync("src/icon.svg", "docs/icon.svg");
fs.writeFileSync("docs/.nojekyll", "");
execFileSync("npx", ["@tailwindcss/cli", "-i", "src/styles.css", "-o", "docs/styles.css", "--minify"], { stdio: "inherit" });
console.log(`Built docs/index.html (${(html.length / 1024).toFixed(0)} kB) and docs/styles.css`);
