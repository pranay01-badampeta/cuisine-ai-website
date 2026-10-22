/**
 * Builds the static website into docs/ (what GitHub Pages serves):
 * three pages (home, pricing, contact) and a "not found" page, in English (site root) and French (/fr/),
 * then compiles only the Tailwind classes the pages use.
 *
 *   npm run build
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SiteLayout from "./src/layout";
import { LANGS, asset, href, type L, type Lang } from "./src/i18n";
import HomePage from "./src/pages/home";
import PricingPage from "./src/pages/pricing";
import { CONTACT_TITLE, ContactPage } from "./src/pages/company";

type Page = { slug: string; title: L; description: L; render: (lang: Lang) => ReactElement };

const DESCRIPTION: L = {
  en: "Food safety, purchases, stock and costs for restaurants and bars in one app. Take a photo of an invoice and the AI updates your stock, prices and food costs.",
  fr: "Hygiène, achats, stock et coûts pour les restaurants et les bars dans une seule application. Prenez une facture en photo et l'IA met à jour votre stock, vos prix et vos coûts.",
};

const PAGES: Page[] = [
  { slug: "index", title: { en: "Cuisine.AI · The kitchen paperwork app", fr: "Cuisine.AI · L'appli qui règle la paperasse en cuisine" }, description: DESCRIPTION, render: (lang) => <HomePage lang={lang} /> },
  { slug: "pricing", title: { en: "Pricing", fr: "Tarifs" }, description: { en: "Cuisine.AI plans, per restaurant. HACCP included in every plan.", fr: "Les offres Cuisine.AI, par restaurant. HACCP inclus dans chaque offre." }, render: (lang) => <PricingPage lang={lang} /> },
  { slug: "contact", title: CONTACT_TITLE, description: { en: "Book a demo or write to the Cuisine.AI team.", fr: "Réservez une démo ou écrivez à l'équipe Cuisine.AI." }, render: (lang) => <ContactPage lang={lang} /> },
  {
    slug: "404",
    title: { en: "Page not found", fr: "Page introuvable" },
    description: DESCRIPTION,
    render: (lang) => (
      <main className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="headline text-6xl">{lang === "fr" ? "Cette page n'existe plus." : "This page has moved."}</h1>
        <p className="mt-5 text-lg text-muted">{lang === "fr" ? "Le site a été simplifié : tout est maintenant sur la page d'accueil." : "The site is simpler now: everything is on the home page."}</p>
        <a href={href(lang, "index")} className="btn-primary mt-8 rounded-full px-7">{lang === "fr" ? "Aller à l'accueil" : "Go to the home page"}</a>
      </main>
    ),
  },
];

const OUT = "docs";
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(`${OUT}/fr`, { recursive: true });

// The contact form opens the visitor's own email app with the message ready (no server needed).
const script = `<script>
(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const body = f.get("message") + "\\n\\n" + ["name", "email", "company"].map((k) => k + ": " + (f.get(k) || "-")).join("\\n");
    location.href = "mailto:" + form.dataset.to + "?subject=" + encodeURIComponent(form.dataset.subject + " - " + f.get("name")) + "&body=" + encodeURIComponent(body);
  });
})();
</script>`;

for (const lang of LANGS) {
  for (const p of PAGES) {
    const file = p.slug === "index" ? "index.html" : `${p.slug}.html`;
    const out = `${OUT}/${lang === "fr" ? "fr/" : ""}${file}`;
    const title = p.slug === "index" ? p.title[lang] : `${p.title[lang]} · Cuisine.AI`;
    const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${p.description[lang].replace(/"/g, "&quot;")}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${p.description[lang].replace(/"/g, "&quot;")}">
<meta property="og:image" content="${asset("img/dashboard.jpg")}">${p.slug === "404" ? "\n<meta name=\"robots\" content=\"noindex\">" : ""}
<link rel="alternate" hreflang="en" href="${href("en", p.slug)}">
<link rel="alternate" hreflang="fr" href="${href("fr", p.slug)}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="${asset("icon.svg")}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset("styles.css")}">
</head>
<body class="min-h-full font-sans antialiased">
${renderToStaticMarkup(<SiteLayout lang={lang} slug={p.slug}>{p.render(lang)}</SiteLayout>)}
${script}
</body>
</html>
`;
    fs.writeFileSync(out, html);
  }
}
console.log(`Built ${PAGES.length} pages × ${LANGS.length} languages`);

fs.cpSync("src/img", `${OUT}/img`, { recursive: true });
fs.copyFileSync("src/icon.svg", `${OUT}/icon.svg`);
fs.writeFileSync(`${OUT}/.nojekyll`, "");
execFileSync("npx", ["@tailwindcss/cli", "-i", "src/styles.css", "-o", `${OUT}/styles.css`, "--minify"], { stdio: "inherit" });
