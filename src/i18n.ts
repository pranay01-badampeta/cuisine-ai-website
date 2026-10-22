/** Two languages: English at the site root, French under /fr/. */
export type Lang = "en" | "fr";
export type L = { en: string; fr: string };
export const LANGS: Lang[] = ["en", "fr"];

/** GitHub Pages serves the site from this folder. */
export const BASE = "/cuisine-ai-website/";

/** Link to a page of the site in a given language ("index" is the home page). */
export function href(lang: Lang, slug: string, hash = ""): string {
  return `${BASE}${lang === "fr" ? "fr/" : ""}${slug === "index" ? "" : `${slug}.html`}${hash}`;
}

export const asset = (path: string) => `${BASE}${path}`;

/** Interface text used on every page. */
export const UI = {
  features: { en: "Features", fr: "Fonctionnalités" },
  pricing: { en: "Pricing", fr: "Tarifs" },
  faq: { en: "FAQ", fr: "FAQ" },
  contact: { en: "Contact", fr: "Contact" },
  demo: { en: "Book a demo", fr: "Réserver une démo" },
  menu: { en: "Menu", fr: "Menu" },
  footerText: {
    en: "Food safety, stock and supplier invoices for restaurants and bars, with AI that does the typing.",
    fr: "Hygiène, stock et factures fournisseurs pour les restaurants et les bars, avec une IA qui fait la saisie.",
  },
  team: {
    en: "Built by Pranay Badampeta, with Rayyan Ahmed and Rithvik RS.",
    fr: "Développé par Pranay Badampeta, avec Rayyan Ahmed et Rithvik RS.",
  },
} satisfies Record<string, L>;
