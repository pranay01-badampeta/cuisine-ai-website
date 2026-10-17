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
  software: { en: "Software", fr: "Logiciel" },
  business: { en: "Business", fr: "Entreprise" },
  resources: { en: "Resources", fr: "Ressources" },
  blog: { en: "Blog", fr: "Blog" },
  contact: { en: "Contact", fr: "Contact" },
  login: { en: "Log in", fr: "Connexion" },
  freeTrial: { en: "Free trial", fr: "Essai gratuit" },
  search: { en: "Search", fr: "Rechercher" },
  searchPlaceholder: { en: "Search the site…", fr: "Rechercher sur le site…" },
  noResults: { en: "No page found.", fr: "Aucune page trouvée." },
  menu: { en: "Menu", fr: "Menu" },
  platform: { en: "The Cuisine.AI restaurant management platform", fr: "La plateforme de gestion de restaurant Cuisine.AI" },
  forRestaurants: { en: "Restaurants, bars and cafés", fr: "Restaurants, bars et cafés" },
  options: { en: "Options", fr: "Options" },
  about: { en: "About us", fr: "À propos" },
  prices: { en: "Prices", fr: "Tarifs" },
  education: { en: "Education", fr: "Apprendre" },
  userResources: { en: "User resources", fr: "Ressources utilisateurs" },
  guides: { en: "Ebooks and guides", fr: "Ebooks et guides" },
  faq: { en: "Frequently Asked Questions", fr: "Questions fréquentes" },
  integrations: { en: "Integrations", fr: "Intégrations" },
  equipment: { en: "Compatible equipment", fr: "Équipement compatible" },
  newFeatures: { en: "New features", fr: "Nouveautés" },
  newFeaturesHint: { en: "Everything that was added to Cuisine.AI, month by month.", fr: "Tout ce qui a été ajouté à Cuisine.AI, mois après mois." },
  developers: { en: "Developer tools", fr: "Outils développeurs" },
  help: { en: "Help Center", fr: "Centre d'assistance" },
  tryFree: { en: "Try it for free!", fr: "Essayez gratuitement !" },
  requestDemo: { en: "Request a demo", fr: "Demander une démo" },
  trial14: { en: "14-day free trial", fr: "Essai gratuit de 14 jours" },
  readMore: { en: "Read more", fr: "Lire la suite" },
  wantMore: { en: "Want to know more?", fr: "Envie d'en savoir plus ?" },
  articles: { en: "Articles", fr: "Articles" },
  chat: { en: "Hello! A question?", fr: "Bonjour ! Une question ?" },
  footerText: {
    en: "Food safety, stock and supplier invoices for restaurants and bars, with AI that does the typing for you.",
    fr: "Hygiène, stock et factures fournisseurs pour les restaurants et les bars, avec une IA qui fait la saisie à votre place.",
  },
  account: { en: "Account", fr: "Compte" },
  createAccount: { en: "Create an account", fr: "Créer un compte" },
  company: { en: "Company", fr: "Société" },
} satisfies Record<string, L>;
