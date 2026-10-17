/**
 * Builds the static website into docs/ (what GitHub Pages serves):
 * every page in English (site root) and French (/fr/), the search index, the downloadable PDFs,
 * then compiles only the Tailwind classes the pages use.
 *
 *   npm run build
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SiteLayout from "./src/layout";
import { FEATURES } from "./src/content/features";
import { GUIDES, POSTS } from "./src/content/resources";
import { LANGS, UI, asset, href, type L, type Lang } from "./src/i18n";
import { COMPARE, PLANS } from "./src/plans";
import HomePage from "./src/pages/home";
import FeaturePage from "./src/pages/feature";
import PricingPage from "./src/pages/pricing";
import { AboutPage, ContactPage, PAGE_TITLES } from "./src/pages/company";
import {
  BlogPage, ChangelogPage, DevelopersPage, EquipmentPage, FaqPage, GuideDocument, GuidesPage, HelpPage, IntegrationsPage, PostPage, RESOURCE_TITLES,
} from "./src/pages/resources";

type Page = { slug: string; title: L; description: L; render: (lang: Lang) => ReactElement };

const DESCRIPTION: L = {
  en: "Food safety, purchases, stock and costs for restaurants and bars in one app. Take a photo of an invoice and the AI updates your stock, prices and food costs.",
  fr: "Hygiène, achats, stock et coûts pour les restaurants et les bars dans une seule application. Prenez une facture en photo et l'IA met à jour votre stock, vos prix et vos coûts.",
};

const PAGES: Page[] = [
  { slug: "index", title: { en: "Cuisine.AI · Restaurant management with AI", fr: "Cuisine.AI · Gestion de restaurant avec l'IA" }, description: DESCRIPTION, render: (lang) => <HomePage lang={lang} /> },
  ...FEATURES.map((f) => ({ slug: f.slug, title: f.title, description: f.tagline, render: (lang: Lang) => <FeaturePage lang={lang} feature={f} /> })),
  { slug: "pricing", title: PAGE_TITLES.pricing, description: { en: "Cuisine.AI plans and options, per site.", fr: "Offres et options Cuisine.AI, par site." }, render: (lang) => <PricingPage lang={lang} /> },
  { slug: "about", title: PAGE_TITLES.about, description: DESCRIPTION, render: (lang) => <AboutPage lang={lang} /> },
  { slug: "contact", title: PAGE_TITLES.contact, description: { en: "Write to the Cuisine.AI team or ask to be called back.", fr: "Écrivez à l'équipe Cuisine.AI ou demandez à être rappelé." }, render: (lang) => <ContactPage lang={lang} /> },
  { slug: "blog", title: UI.blog, description: RESOURCE_TITLES.blog, render: (lang) => <BlogPage lang={lang} /> },
  ...POSTS.map((p) => ({ slug: p.slug, title: p.title, description: p.excerpt, render: (lang: Lang) => <PostPage lang={lang} post={p} /> })),
  { slug: "guides", title: RESOURCE_TITLES.guides, description: { en: "Free Cuisine.AI guides to download.", fr: "Guides Cuisine.AI gratuits à télécharger." }, render: (lang) => <GuidesPage lang={lang} /> },
  { slug: "faq", title: RESOURCE_TITLES.faq, description: { en: "Answers to common questions about Cuisine.AI.", fr: "Les réponses aux questions fréquentes sur Cuisine.AI." }, render: (lang) => <FaqPage lang={lang} /> },
  { slug: "integrations", title: RESOURCE_TITLES.integrations, description: { en: "What Cuisine.AI connects to.", fr: "Ce à quoi Cuisine.AI se connecte." }, render: (lang) => <IntegrationsPage lang={lang} /> },
  { slug: "equipment", title: RESOURCE_TITLES.equipment, description: { en: "The devices that work with Cuisine.AI.", fr: "Les appareils compatibles avec Cuisine.AI." }, render: (lang) => <EquipmentPage lang={lang} /> },
  { slug: "changelog", title: RESOURCE_TITLES.changelog, description: UI.newFeaturesHint, render: (lang) => <ChangelogPage lang={lang} /> },
  { slug: "developers", title: RESOURCE_TITLES.developers, description: { en: "Send temperature readings to Cuisine.AI.", fr: "Envoyez des relevés de température à Cuisine.AI." }, render: (lang) => <DevelopersPage lang={lang} /> },
  { slug: "help", title: RESOURCE_TITLES.help, description: { en: "Step-by-step help for everyday tasks.", fr: "L'aide pas à pas pour les tâches du quotidien." }, render: (lang) => <HelpPage lang={lang} /> },
];

const OUT = "docs";
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(`${OUT}/fr`, { recursive: true });

/** Search index per language: title, description and address of every page. */
const searchIndex = (lang: Lang) => PAGES.map((p) => ({ t: p.title[lang], d: p.description[lang], u: href(lang, p.slug) }));

// Small scripts: site search, and the contact form that opens the visitor's own email app.
const script = (lang: Lang) => `<script>
(() => {
  const pages = ${JSON.stringify(searchIndex(lang))};
  const dlg = document.getElementById("site-search"), input = document.getElementById("site-search-input"), list = document.getElementById("site-search-results");
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
  const show = () => {
    const q = norm(input.value.trim());
    const hits = q ? pages.filter((p) => norm(p.t + " " + p.d).includes(q)) : pages.slice(0, 8);
    list.innerHTML = "";
    if (!hits.length) { const li = document.createElement("li"); li.className = "px-3 py-4 text-sm text-muted"; li.textContent = list.dataset.empty; list.append(li); return; }
    for (const p of hits.slice(0, 12)) {
      const li = document.createElement("li"), a = document.createElement("a"), t = document.createElement("span"), d = document.createElement("span");
      a.href = p.u; a.className = "block rounded-lg px-3 py-2.5 hover:bg-canvas";
      t.className = "block text-sm font-semibold"; t.textContent = p.t; d.className = "block text-xs text-muted"; d.textContent = p.d;
      a.append(t, d); li.append(a); list.append(li);
    }
  };
  document.querySelectorAll("[data-search-open]").forEach((b) => b.addEventListener("click", () => { dlg.showModal(); input.value = ""; show(); input.focus(); }));
  document.querySelector("[data-search-close]").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  input.addEventListener("input", show);
  addEventListener("keydown", (e) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); dlg.showModal(); show(); input.focus(); } });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const body = ["message", "", "name", "email", "phone", "company"].map((k) => k ? (k === "message" ? f.get(k) : k + ": " + (f.get(k) || "-")) : "").join("\\n")
        + "\\n" + (f.get("consent") ? "OK for further communications" : "No further communications");
      location.href = "mailto:" + form.dataset.to + "?subject=" + encodeURIComponent(form.dataset.subject + " - " + f.get("name")) + "&body=" + encodeURIComponent(body);
    });
    const cb = document.querySelector("[data-call-back]");
    cb?.addEventListener("click", () => { const m = form.elements.message; if (!m.value) m.value = cb.dataset.callBack; form.elements.phone.focus(); form.scrollIntoView({ behavior: "smooth" }); });
  }
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
<meta property="og:image" content="${asset("img/dashboard.jpg")}">
<link rel="alternate" hreflang="en" href="${href("en", p.slug)}">
<link rel="alternate" hreflang="fr" href="${href("fr", p.slug)}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="${asset("icon.svg")}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset("styles.css")}">
</head>
<body class="min-h-full font-sans antialiased">
${renderToStaticMarkup(<SiteLayout lang={lang} slug={p.slug}>{p.render(lang)}</SiteLayout>)}
${script(lang)}
</body>
</html>
`;
    fs.writeFileSync(out, html);
  }
}
console.log(`Built ${PAGES.length} pages × ${LANGS.length} languages`);

// PDFs printed by headless Chrome: the plan comparison and the guides, in both languages.
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const printPdf = (html: string, file: string) => {
  const tmp = path.resolve(".print.html");
  fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8">${html}`);
  execFileSync(CHROME, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${path.resolve(OUT, file)}`, `file://${tmp}`], { stdio: "ignore" });
  fs.rmSync(tmp);
};
if (fs.existsSync(CHROME)) {
  for (const lang of LANGS) {
    const cell = "border-bottom:1px solid #e4e4e4;padding:8px 10px;text-align:center";
    const table = `<div style="font-family:-apple-system,Helvetica,Arial,sans-serif;color:#0a0a0a;margin:32px">
      <h1 style="font-size:20px;margin:0 0 4px">Cuisine.AI – ${lang === "fr" ? "comparatif des offres" : "plan comparison"}</h1>
      <p style="color:#6b6b6b;font-size:12px;margin:0 0 18px">${lang === "fr" ? "Prix par site, hors taxes." : "Prices per site, excluding VAT."}</p>
      <table style="width:100%;border-collapse:collapse;font-size:12px">
      <tr>${[lang === "fr" ? "Fonctionnalité" : "Feature", ...PLANS.map((p) => p.name[lang])].map((h, i) => `<th style="${cell};background:#0a0a0a;color:#fff;${i ? "" : "text-align:left"}">${h}</th>`).join("")}</tr>
      ${COMPARE.map((r) => `<tr>${r.map((c, i) => `<td style="${cell};${i ? "" : "text-align:left"}">${c[lang]}</td>`).join("")}</tr>`).join("")}
      </table></div>`;
    printPdf(table, `cuisine-ai-plan-comparison-${lang}.pdf`);
    for (const g of GUIDES) printPdf(renderToStaticMarkup(<GuideDocument lang={lang} slug={g.slug} />), `${g.slug}-${lang}.pdf`);
  }
  console.log("Built the PDFs");
} else {
  console.warn("Google Chrome not found: PDFs were not built.");
}

fs.cpSync("src/img", `${OUT}/img`, { recursive: true });
fs.copyFileSync("src/icon.svg", `${OUT}/icon.svg`);
fs.writeFileSync(`${OUT}/.nojekyll`, "");
execFileSync("npx", ["@tailwindcss/cli", "-i", "src/styles.css", "-o", `${OUT}/styles.css`, "--minify"], { stdio: "inherit" });
