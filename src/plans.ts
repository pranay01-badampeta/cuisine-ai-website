/**
 * Prices and plan contents for the pricing page. Change numbers here and run `npm run build`.
 * Prices are per restaurant (site), in euros, excluding VAT.
 */

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number; // price per month when paying month by month
  annual: number; // price per month when paying for a year
  scans: number; // AI invoice scans included each month
  highlight?: boolean;
  intro: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Food safety and stock, done properly.",
    monthly: 45,
    annual: 39,
    scans: 30,
    intro: "Everything a single restaurant needs every day:",
    features: [
      "All HACCP records: temperatures, checklists, traceability, oil, deliveries",
      "Inspection report as a PDF in one click",
      "Stock, catalogue and inventory counts",
      "Supplier orders, one per supplier",
      "30 AI invoice scans a month",
      "Unlimited staff profiles",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Let the AI do the typing and watch your margins.",
    monthly: 89,
    annual: 79,
    scans: 150,
    highlight: true,
    intro: "Everything in Essential, plus:",
    features: [
      "150 AI invoice scans a month",
      "AI reads delivery notes and product labels",
      "AI shelf count from a photo",
      "Smart order from how fast you use each product",
      "Dish and cocktail costs, margins and allergen table",
      "Price-rise alerts and the Ask Cuisine.AI assistant",
      "Production batches with printed labels",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "For busy kitchens that want it all automatic.",
    monthly: 149,
    annual: 129,
    scans: 400,
    intro: "Everything in Professional, plus:",
    features: [
      "400 AI invoice scans a month",
      "Connected temperature sensors (API key included)",
      "Help setting up your catalogue, fridges and team",
      "Priority support",
    ],
  },
];

export const ADDONS = [
  {
    name: "Extra invoice scans",
    price: "12 €",
    per: "/month",
    text: "100 more AI invoice scans every month, on any plan. Typing an invoice by hand is always free and unlimited.",
  },
  {
    name: "Temperature sensors",
    price: "19 €",
    per: "/month",
    text: "Connect your fridge and freezer probes on the Essential or Professional plan: readings are logged automatically. Included in Business.",
  },
];

/** Full comparison table: [feature, Essential, Professional, Business]; true = included, false = not included. */
export const COMPARE: { group: string; rows: [string, boolean | string, boolean | string, boolean | string][] }[] = [
  {
    group: "Food safety & HACCP",
    rows: [
      ["Fridge & freezer temperatures, including by voice", true, true, true],
      ["Daily cleaning and opening checklists", true, true, true],
      ["Traceability with label photos", true, true, true],
      ["Frying oil log", true, true, true],
      ["Delivery checks (temperature, refused items)", true, true, true],
      ["Use-by dates and waste", true, true, true],
      ["Inspection report PDF", true, true, true],
      ["Connected temperature sensors", "Add-on", "Add-on", true],
    ],
  },
  {
    group: "AI that does the typing",
    rows: [
      ["AI invoice scans per month", "30", "150", "400"],
      ["Photos, scans and emailed PDFs, several invoices per PDF", true, true, true],
      ["Credit notes, discounts and pack conversion", true, true, true],
      ["Delivery notes and product labels read by AI", false, true, true],
      ["Shelf count from a photo", false, true, true],
      ["Ask Cuisine.AI assistant", false, true, true],
    ],
  },
  {
    group: "Stock & ordering",
    rows: [
      ["Live stock, catalogue and stock value", true, true, true],
      ["Inventory counts", true, true, true],
      ["Supplier cart and orders", true, true, true],
      ["Smart order from usage", false, true, true],
      ["Production batches and labels", false, true, true],
    ],
  },
  {
    group: "Costs & margins",
    rows: [
      ["Supplier price history", true, true, true],
      ["Price-rise alerts", false, true, true],
      ["Dish and cocktail costing, margins", false, true, true],
      ["Allergen table for the menu", false, true, true],
    ],
  },
  {
    group: "Team, security & support",
    rows: [
      ["Staff profiles", "Unlimited", "Unlimited", "Unlimited"],
      ["Admin PIN, session control and audit log", true, true, true],
      ["History of every record, CSV export", true, true, true],
      ["Help with setup", false, false, true],
      ["Support", "Email", "Email", "Priority"],
    ],
  },
];

export const PRICING_FAQ: [string, string][] = [
  ["What counts as an invoice scan?", "One supplier document read by the AI. A five-page invoice counts once; a PDF holding three invoices counts as three. Entering an invoice by hand is always free and unlimited."],
  ["What happens if I use all my scans?", "Nothing stops working. You can keep entering invoices by hand, add a pack of 100 scans, or move up a plan at any time."],
  ["Are prices per restaurant?", "Yes. Prices are per site, per month, excluding VAT. Every plan includes your whole team."],
  ["Can I change plan or cancel?", "Yes. Move up or down whenever you like. Monthly plans can be stopped at the end of any month; annual plans are paid for the year and cost less."],
  ["Is food safety really included?", "Yes, in every plan. Temperatures, checklists, traceability, oil and the inspection report are part of Cuisine.AI, not an extra."],
  ["Is there a setup fee?", "No. Create your account and start; on the Business plan we also help you set everything up."],
];
