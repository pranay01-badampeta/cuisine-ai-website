/**
 * Prices and plan contents for the pricing page. Change numbers here and run `npm run build`.
 * Prices are per restaurant (site), in euros, excluding VAT.
 */

export type Plan = {
  name: string;
  users: string;
  features: string[];
  annual: number; // € per month, annual commitment
  monthly: number; // € per month, monthly commitment
  badge?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Essential",
    users: "2 users",
    features: ["Recipe costs – Inventories", "Stock and supplier orders", "Supplier price history", "20 invoice scans per month"],
    annual: 80,
    monthly: 90,
  },
  {
    name: "Professional",
    users: "10 users",
    features: ["User rights", "Margin analysis and reporting", "Menu costs and allergens", "Production planning", "50 invoice scans per month"],
    annual: 130,
    monthly: 150,
  },
  {
    name: "Business",
    users: "Unlimited users",
    features: [
      "Advanced user rights and audit log",
      "AI smart ordering",
      "AI shelf count from a photo",
      "Temperature sensor API",
      "100 invoice scans per month",
      "Delivery note / order matching",
      "CSV export of every record",
    ],
    annual: 180,
    monthly: 210,
    badge: "The most complete",
  },
];

export const OPTIONS = [
  {
    name: "Temperature sensors option",
    price: 69,
    text: "Connect your fridge and freezer probes: readings are recorded automatically every day and anything out of range shows up on the dashboard.",
  },
  {
    name: "Cuisine.AI Hygiene & Traceability option",
    price: 38,
    text: "Cleaning plan, temperature readings, frying oil log, delivery checks, product traceability, use-by dates and task planning.",
  },
];

/** The full comparison, used for the downloadable PDF. */
export const COMPARE: [string, string, string, string][] = [
  ["Users", "2", "10", "Unlimited"],
  ["Invoice scans per month (AI)", "20", "50", "100"],
  ["Recipe costs", "Yes", "Yes", "Yes"],
  ["Inventories", "Yes", "Yes", "Yes"],
  ["Stock and supplier orders", "Yes", "Yes", "Yes"],
  ["Supplier price history", "Yes", "Yes", "Yes"],
  ["User rights", "–", "Yes", "Advanced"],
  ["Margin analysis and reporting", "–", "Yes", "Yes"],
  ["Menu costs and allergens", "–", "Yes", "Yes"],
  ["Production planning", "–", "Yes", "Yes"],
  ["Audit log", "–", "–", "Yes"],
  ["AI smart ordering", "–", "–", "Yes"],
  ["AI shelf count from a photo", "–", "–", "Yes"],
  ["Temperature sensor API", "–", "–", "Yes"],
  ["Delivery note / order matching", "–", "–", "Yes"],
  ["CSV export of every record", "–", "–", "Yes"],
  ["Price per month per site, annual", "80 €", "130 €", "180 €"],
  ["Price per month per site, monthly", "90 €", "150 €", "210 €"],
];
