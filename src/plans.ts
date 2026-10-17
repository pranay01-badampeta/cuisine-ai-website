/**
 * Prices and plan contents for the pricing page. Change numbers here and run `npm run build`.
 * Prices are per restaurant (site), in euros, excluding VAT.
 */
import type { L } from "./i18n";

export type Plan = {
  name: L;
  users: L;
  features: L[];
  annual: number; // € per month, annual commitment
  monthly: number; // € per month, monthly commitment
  badge?: L;
};

export const PLANS: Plan[] = [
  {
    name: { en: "Essential", fr: "Essentiel" },
    users: { en: "2 users", fr: "2 utilisateurs" },
    features: [
      { en: "Recipe costs – Inventories", fr: "Coûts des recettes – Inventaires" },
      { en: "Stock and supplier orders", fr: "Stock et commandes fournisseurs" },
      { en: "Supplier price history", fr: "Historique des prix fournisseurs" },
      { en: "20 invoice scans per month", fr: "20 scans de factures par mois" },
    ],
    annual: 80,
    monthly: 90,
  },
  {
    name: { en: "Professional", fr: "Professionnel" },
    users: { en: "10 users", fr: "10 utilisateurs" },
    features: [
      { en: "User rights", fr: "Droits utilisateurs" },
      { en: "Margin analysis and reporting", fr: "Analyse des marges et rapports" },
      { en: "Menu costs and allergens", fr: "Coûts du menu et allergènes" },
      { en: "Production planning", fr: "Planification de la production" },
      { en: "50 invoice scans per month", fr: "50 scans de factures par mois" },
    ],
    annual: 130,
    monthly: 150,
  },
  {
    name: { en: "Business", fr: "Entreprise" },
    users: { en: "Unlimited users", fr: "Utilisateurs illimités" },
    features: [
      { en: "Advanced user rights and audit log", fr: "Droits avancés et journal d'audit" },
      { en: "AI smart ordering", fr: "Commande intelligente par IA" },
      { en: "AI shelf count from a photo", fr: "Comptage des étagères par photo" },
      { en: "Temperature sensor API", fr: "API sondes de température" },
      { en: "100 invoice scans per month", fr: "100 scans de factures par mois" },
      { en: "Delivery note / order matching", fr: "Rapprochement BL / commande" },
      { en: "CSV export of every record", fr: "Export CSV de tous les relevés" },
    ],
    annual: 180,
    monthly: 210,
    badge: { en: "The most complete", fr: "Le + complet" },
  },
];

export const OPTIONS: { name: L; price: number; text: L; slug: string }[] = [
  {
    name: { en: "Temperature sensors option", fr: "Option sondes de température" },
    price: 69,
    text: {
      en: "Connect your fridge and freezer probes: readings are recorded automatically and anything out of range shows up on the dashboard.",
      fr: "Connectez vos sondes de frigos et congélateurs : les relevés sont enregistrés automatiquement et tout relevé hors norme apparaît sur le tableau de bord.",
    },
    slug: "sensors",
  },
  {
    name: { en: "Cuisine.AI Hygiene & Traceability option", fr: "Option Cuisine.AI Hygiène & Traçabilité" },
    price: 38,
    text: {
      en: "Cleaning plan, temperature readings, frying oil log, delivery checks, product traceability, use-by dates and task planning.",
      fr: "Plan de nettoyage, relevés de température, suivi des huiles de friture, contrôles à réception, traçabilité, DLC et planning des tâches.",
    },
    slug: "hygiene",
  },
];

/** The full comparison, used for the downloadable PDF: [feature, Essential, Professional, Business]. */
export const COMPARE: [L, L, L, L][] = (() => {
  const yes = { en: "Yes", fr: "Oui" };
  const no = { en: "–", fr: "–" };
  const v = (s: string) => ({ en: s, fr: s });
  const row = (en: string, fr: string, a: L, b: L, c: L): [L, L, L, L] => [{ en, fr }, a, b, c];
  return [
    row("Users", "Utilisateurs", v("2"), v("10"), { en: "Unlimited", fr: "Illimités" }),
    row("Invoice scans per month (AI)", "Scans de factures par mois (IA)", v("20"), v("50"), v("100")),
    row("Recipe costs", "Coûts des recettes", yes, yes, yes),
    row("Inventories", "Inventaires", yes, yes, yes),
    row("Stock and supplier orders", "Stock et commandes fournisseurs", yes, yes, yes),
    row("Supplier price history", "Historique des prix fournisseurs", yes, yes, yes),
    row("User rights", "Droits utilisateurs", no, yes, { en: "Advanced", fr: "Avancés" }),
    row("Margin analysis and reporting", "Analyse des marges et rapports", no, yes, yes),
    row("Menu costs and allergens", "Coûts du menu et allergènes", no, yes, yes),
    row("Production planning", "Planification de la production", no, yes, yes),
    row("Audit log", "Journal d'audit", no, no, yes),
    row("AI smart ordering", "Commande intelligente par IA", no, no, yes),
    row("AI shelf count from a photo", "Comptage des étagères par photo", no, no, yes),
    row("Temperature sensor API", "API sondes de température", no, no, yes),
    row("Delivery note / order matching", "Rapprochement BL / commande", no, no, yes),
    row("CSV export of every record", "Export CSV de tous les relevés", no, no, yes),
    row("Price per month per site, annual", "Prix par mois et par site, annuel", v("80 €"), v("130 €"), v("180 €")),
    row("Price per month per site, monthly", "Prix par mois et par site, mensuel", v("90 €"), v("150 €"), v("210 €")),
  ];
})();
