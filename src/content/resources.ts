import type { L } from "../i18n";

export type Block = { h?: L; p?: L; list?: L[] };
export type Post = { slug: string; date: string; img: string; title: L; excerpt: L; body: Block[] };

export const POSTS: Post[] = [
  {
    slug: "blog-temperature-checks",
    date: "2026-10-12",
    img: "temperatures",
    title: { en: "Temperature checks in a restaurant kitchen: what to record", fr: "Relevés de température en cuisine : que faut-il noter ?" },
    excerpt: {
      en: "Fridges, freezers and hot holding: the readings your food-safety plan expects, and how to make them take seconds.",
      fr: "Frigos, congélateurs et maintien au chaud : les relevés attendus par votre plan de maîtrise sanitaire, et comment les faire en quelques secondes.",
    },
    body: [
      {
        p: {
          en: "Temperature readings are the first thing an inspector asks for. They prove that the cold chain and hot holding were respected every day, not just on the day of the visit.",
          fr: "Les relevés de température sont la première chose que demande un inspecteur. Ils prouvent que la chaîne du froid et le maintien au chaud ont été respectés chaque jour, pas seulement le jour du contrôle.",
        },
      },
      {
        h: { en: "What to check", fr: "Que contrôler ?" },
        list: [
          { en: "Every fridge and cold room holding perishable food", fr: "Chaque frigo et chambre froide contenant des denrées périssables" },
          { en: "Every freezer", fr: "Chaque congélateur" },
          { en: "Hot holding cabinets and bain-maries during service", fr: "Armoires de maintien au chaud et bains-marie pendant le service" },
          { en: "Deliveries of chilled and frozen products on arrival", fr: "Les livraisons de produits frais et surgelés à leur arrivée" },
        ],
      },
      {
        h: { en: "Common targets", fr: "Repères courants" },
        p: {
          en: "Chilled perishable food is usually kept between 0 and 4 °C, frozen food at −18 °C or colder, and hot food held at 63 °C or more. The exact limit depends on the product: follow your own food-safety plan and the supplier's instructions.",
          fr: "Les denrées réfrigérées périssables sont généralement conservées entre 0 et 4 °C, les surgelés à −18 °C ou moins, et les plats chauds maintenus à 63 °C ou plus. La limite exacte dépend du produit : suivez votre plan de maîtrise sanitaire et les consignes du fournisseur.",
        },
      },
      {
        h: { en: "When a reading is out of range", fr: "Quand un relevé est hors norme" },
        p: {
          en: "Write down what you did: product moved, door repaired, food thrown away. The corrective action matters as much as the reading itself.",
          fr: "Notez ce que vous avez fait : produits déplacés, porte réparée, denrées jetées. L'action corrective compte autant que le relevé lui-même.",
        },
      },
      {
        h: { en: "Making it quick", fr: "Gagner du temps" },
        p: {
          en: "In Cuisine.AI each fridge has its own limits. Say “cold room 3, freezer minus 19” and the readings are filled in; anything out of range asks for a corrective action. Connected probes can even send their readings on their own.",
          fr: "Dans Cuisine.AI, chaque frigo a ses propres limites. Dites « chambre froide 3, congélateur moins 19 » et les relevés sont remplis ; un relevé hors norme demande une action corrective. Des sondes connectées peuvent même envoyer leurs relevés toutes seules.",
        },
      },
    ],
  },
  {
    slug: "blog-food-cost",
    date: "2026-10-05",
    img: "menu-costs",
    title: { en: "How to calculate the food cost of a dish", fr: "Comment calculer le coût matière d'un plat" },
    excerpt: {
      en: "The formula, a worked example and the habit that keeps your margins right when supplier prices move.",
      fr: "La formule, un exemple chiffré et l'habitude qui garde vos marges justes quand les prix fournisseurs bougent.",
    },
    body: [
      {
        h: { en: "The formula", fr: "La formule" },
        p: {
          en: "Food cost ratio = cost of the ingredients of one portion ÷ selling price excluding VAT × 100. Many restaurants aim for roughly 25 to 35 %, but the right target depends on your menu.",
          fr: "Ratio matière = coût des ingrédients d'une portion ÷ prix de vente hors taxes × 100. Beaucoup de restaurants visent environ 25 à 35 %, mais le bon objectif dépend de votre carte.",
        },
      },
      {
        h: { en: "A worked example", fr: "Un exemple" },
        list: [
          { en: "Steak 250 g at 32 €/kg = 8.00 €", fr: "Steak 250 g à 32 €/kg = 8,00 €" },
          { en: "Fries 200 g at 2.10 €/kg = 0.42 €", fr: "Frites 200 g à 2,10 €/kg = 0,42 €" },
          { en: "Butter, shallots and salad = 0.90 €", fr: "Beurre, échalotes et salade = 0,90 €" },
          { en: "Cost of the portion = 9.32 €; sold 30.00 € excl. VAT → 31 %", fr: "Coût de la portion = 9,32 € ; vendu 30,00 € HT → 31 %" },
        ],
      },
      {
        h: { en: "Where it goes wrong", fr: "Là où ça se complique" },
        p: {
          en: "The calculation is easy; keeping it right is not. Recipe sheets are written once with last year's prices, and a 20 % rise on beef quietly turns a good dish into a loss.",
          fr: "Le calcul est simple ; le garder juste l'est moins. Les fiches techniques sont faites une fois avec les prix de l'an dernier, et une hausse de 20 % sur le bœuf transforme discrètement un bon plat en perte.",
        },
      },
      {
        h: { en: "Keeping it up to date", fr: "Le garder à jour" },
        p: {
          en: "Cuisine.AI updates the cost of every recipe from the prices read on your invoices, compares it with your target and suggests the selling price when a dish goes above it.",
          fr: "Cuisine.AI met à jour le coût de chaque recette avec les prix lus sur vos factures, le compare à votre objectif et propose un prix de vente quand un plat le dépasse.",
        },
      },
    ],
  },
  {
    slug: "blog-ai-invoices",
    date: "2026-09-28",
    img: "invoice-detail",
    title: { en: "Stop typing supplier invoices: how AI invoice reading works", fr: "Fini la saisie des factures : comment fonctionne la lecture par IA" },
    excerpt: {
      en: "What happens between the photo of an invoice and the updated stock, and why you still confirm every invoice.",
      fr: "Ce qui se passe entre la photo d'une facture et le stock mis à jour, et pourquoi vous validez toujours chaque facture.",
    },
    body: [
      {
        p: {
          en: "Typing invoices line by line is one of the most boring jobs in a restaurant, and one of the most important: it is where stock and purchase prices come from.",
          fr: "Saisir les factures ligne par ligne est l'une des tâches les plus ennuyeuses d'un restaurant, et l'une des plus importantes : c'est de là que viennent le stock et les prix d'achat.",
        },
      },
      {
        h: { en: "1. Reading", fr: "1. La lecture" },
        p: {
          en: "The AI reads the supplier, the invoice number, the date, the totals and every line: wording, quantity, unit, price and printed amount. Credit notes and discounts are recognised.",
          fr: "L'IA lit le fournisseur, le numéro de facture, la date, les totaux et chaque ligne : libellé, quantité, unité, prix et montant imprimé. Les avoirs et les remises sont reconnus.",
        },
      },
      {
        h: { en: "2. Matching", fr: "2. Le rapprochement" },
        p: {
          en: "Each line is matched to one of your products and converted to its unit, so “6 x 75 cl” becomes 4.5 L of Prosecco. Once you have corrected a wording, it is remembered for that supplier.",
          fr: "Chaque ligne est reliée à l'un de vos produits et convertie dans son unité : « 6 x 75 cl » devient 4,5 L de Prosecco. Une fois un libellé corrigé, il est retenu pour ce fournisseur.",
        },
      },
      {
        h: { en: "3. Checking", fr: "3. La vérification" },
        p: {
          en: "The lines are added up and compared with the printed total. Lines the AI is unsure about are highlighted. Nothing reaches your stock until someone confirms.",
          fr: "Les lignes sont additionnées et comparées au total imprimé. Les lignes dont l'IA n'est pas sûre sont signalées. Rien n'arrive dans votre stock avant validation.",
        },
      },
      {
        h: { en: "4. Updating", fr: "4. La mise à jour" },
        p: {
          en: "One tap and the stock, the purchase prices and the cost of your dishes are updated. Price rises are flagged on the invoice.",
          fr: "Un geste et le stock, les prix d'achat et le coût de vos plats sont mis à jour. Les hausses de prix sont signalées sur la facture.",
        },
      },
    ],
  },
];

export const FAQ: { group: L; items: [L, L][] }[] = [
  {
    group: { en: "General", fr: "Général" },
    items: [
      [
        { en: "What equipment do I need?", fr: "De quel équipement ai-je besoin ?" },
        { en: "A tablet, phone or computer with a browser and an internet connection. A tablet in the kitchen is the most practical. See the compatible equipment page.", fr: "Une tablette, un téléphone ou un ordinateur avec un navigateur et une connexion internet. Une tablette en cuisine est le plus pratique. Voir la page équipement compatible." },
      ],
      [
        { en: "How much does support cost?", fr: "Combien coûte l'assistance ?" },
        { en: "Support by email is included in every plan.", fr: "L'assistance par e-mail est incluse dans toutes les offres." },
      ],
      [
        { en: "How much do updates cost?", fr: "Combien coûtent les mises à jour ?" },
        { en: "Nothing. Cuisine.AI runs online, so every restaurant always has the latest version.", fr: "Rien. Cuisine.AI fonctionne en ligne : chaque restaurant a toujours la dernière version." },
      ],
      [
        { en: "What is the minimum subscription period?", fr: "Quelle est la durée minimale d'abonnement ?" },
        { en: "One month with the monthly commitment, one year with the annual commitment, which costs less.", fr: "Un mois avec l'engagement mensuel, un an avec l'engagement annuel, qui coûte moins cher." },
      ],
      [
        { en: "Is the application in French?", fr: "L'application est-elle en français ?" },
        { en: "The application screens are in English today. The AI reads French invoices and labels, and the Ask Cuisine.AI assistant answers in French.", fr: "Les écrans de l'application sont en anglais pour l'instant. L'IA lit les factures et étiquettes en français, et l'assistant Cuisine.AI répond en français." },
      ],
      [
        { en: "Does every employee need an account?", fr: "Chaque employé a-t-il besoin d'un compte ?" },
        { en: "No. The restaurant has one account; staff pick their name on the shared tablet. Settings stay behind the admin PIN.", fr: "Non. Le restaurant a un seul compte ; chacun choisit son nom sur la tablette partagée. Les réglages restent protégés par le code administrateur." },
      ],
    ],
  },
  {
    group: { en: "Service, support and training", fr: "Service, assistance et formation" },
    items: [
      [
        { en: "Is there documentation?", fr: "Existe-t-il une documentation ?" },
        { en: "Yes: the Help Center explains every task step by step, and the guides can be downloaded as PDF.", fr: "Oui : le centre d'assistance explique chaque tâche pas à pas, et les guides sont téléchargeables en PDF." },
      ],
      [
        { en: "How can I see a demonstration?", fr: "Comment voir une démonstration ?" },
        { en: "Write to us from the contact page and we will show you Cuisine.AI, or start the free trial and try it with your own invoices.", fr: "Écrivez-nous depuis la page contact et nous vous montrerons Cuisine.AI, ou lancez l'essai gratuit avec vos propres factures." },
      ],
      [
        { en: "Can I use Cuisine.AI before committing?", fr: "Puis-je utiliser Cuisine.AI avant de m'engager ?" },
        { en: "Yes, with the 14-day free trial.", fr: "Oui, avec l'essai gratuit de 14 jours." },
      ],
      [
        { en: "What if the AI misreads an invoice?", fr: "Et si l'IA lit mal une facture ?" },
        { en: "You check every invoice before it is saved, and uncertain lines are highlighted. You can correct any line or type the invoice by hand.", fr: "Vous vérifiez chaque facture avant l'enregistrement, et les lignes incertaines sont signalées. Vous pouvez corriger n'importe quelle ligne ou saisir la facture à la main." },
      ],
      [
        { en: "Can I suggest ideas for the application?", fr: "Puis-je proposer des idées pour l'application ?" },
        { en: "Please do: write to us from the contact page.", fr: "Avec plaisir : écrivez-nous depuis la page contact." },
      ],
    ],
  },
];

/** "New features": what was added, from the project history. */
export const CHANGELOG: { date: string; title: L; items: L[] }[] = [
  {
    date: "2026-10-17",
    title: { en: "Cheaper, more careful invoice reading", fr: "Lecture des factures plus économique et plus prudente" },
    items: [
      { en: "A fast AI reads each invoice first; a stronger one re-reads only the lines that fail the checks", fr: "Une IA rapide lit d'abord chaque facture ; une IA plus puissante ne relit que les lignes qui échouent aux contrôles" },
      { en: "“Suggested match” when a product match needs your confirmation", fr: "« Correspondance suggérée » quand un produit doit être confirmé" },
    ],
  },
  {
    date: "2026-10-15",
    title: { en: "New clean look", fr: "Nouvelle apparence épurée" },
    items: [{ en: "Black-and-white design with a simple, very readable font", fr: "Design noir et blanc avec une police simple et très lisible" }],
  },
  {
    date: "2026-10-08",
    title: { en: "Smarter invoices, clearer stock, stronger security", fr: "Factures plus intelligentes, stock plus clair, sécurité renforcée" },
    items: [
      { en: "Printed line totals kept to the cent; credit notes and discounts", fr: "Montants imprimés gardés au centime ; avoirs et remises" },
      { en: "One PDF with several invoices, reviewed one after the other", fr: "Un PDF avec plusieurs factures, vérifiées l'une après l'autre" },
      { en: "“Check this line” on lines the AI is unsure about", fr: "« À vérifier » sur les lignes incertaines" },
      { en: "Stock page shows what is already in the cart; “Empty the cart”", fr: "La page stock montre ce qui est déjà au panier ; « Vider le panier »" },
      { en: "Food-safety score and key figures on the dashboard", fr: "Score d'hygiène et chiffres clés sur le tableau de bord" },
      { en: "Admin PIN that locks after 15 minutes, sign-in protection and audit log", fr: "Code admin verrouillé après 15 minutes, protection des connexions et journal d'audit" },
    ],
  },
  {
    date: "2026-10-02",
    title: { en: "Cuisine.AI is born", fr: "Naissance de Cuisine.AI" },
    items: [
      { en: "Temperatures, checklists, traceability, fryer oil and delivery checks", fr: "Températures, check-lists, traçabilité, huiles de friture et contrôles à réception" },
      { en: "Stock, inventories, supplier orders and production", fr: "Stock, inventaires, commandes fournisseurs et production" },
      { en: "AI reading of invoices, delivery notes and labels", fr: "Lecture par IA des factures, bons de livraison et étiquettes" },
      { en: "Smart order, menu costs, allergens, sensor API, inspection report and the Ask Cuisine.AI assistant", fr: "Commande intelligente, coûts du menu, allergènes, API sondes, rapport d'inspection et l'assistant Cuisine.AI" },
    ],
  },
];

/** Help Center: one short how-to per everyday task. */
export const HELP: { title: L; steps: L[] }[] = [
  {
    title: { en: "Record the temperatures", fr: "Faire les relevés de température" },
    steps: [
      { en: "Open Temperatures and choose your name.", fr: "Ouvrez « Temperatures » et choisissez votre nom." },
      { en: "Type each temperature, or tap “Say the temperatures” and say them out loud.", fr: "Tapez chaque température, ou touchez « Say the temperatures » et dites-les à voix haute." },
      { en: "If a reading is out of range, write what you did, then validate.", fr: "Si un relevé est hors norme, notez ce que vous avez fait, puis validez." },
    ],
  },
  {
    title: { en: "Scan a supplier invoice", fr: "Scanner une facture fournisseur" },
    steps: [
      { en: "Open Invoices → Scan an invoice and take a photo, or choose the PDF.", fr: "Ouvrez « Invoices » → « Scan an invoice » et prenez une photo, ou choisissez le PDF." },
      { en: "Check the lines, starting with those marked “Check this line”.", fr: "Vérifiez les lignes, en commençant par celles marquées « Check this line »." },
      { en: "Confirm: stock and prices are updated.", fr: "Validez : le stock et les prix sont mis à jour." },
    ],
  },
  {
    title: { en: "Check a delivery", fr: "Contrôler une livraison" },
    steps: [
      { en: "Open Deliveries and take a photo of the delivery note, or choose the matching order.", fr: "Ouvrez « Deliveries » et prenez le bon de livraison en photo, ou choisissez la commande correspondante." },
      { en: "Enter the temperatures and mark refused products.", fr: "Saisissez les températures et marquez les produits refusés." },
      { en: "Validate: accepted products go into stock.", fr: "Validez : les produits acceptés entrent en stock." },
    ],
  },
  {
    title: { en: "Place an order", fr: "Passer une commande" },
    steps: [
      { en: "In Stock, set the quantity under “Order more” and tap Cart, or use Smart order.", fr: "Dans « Stock », indiquez la quantité sous « Order more » et touchez « Cart », ou utilisez « Smart order »." },
      { en: "Open Orders: the cart is split by supplier.", fr: "Ouvrez « Orders » : le panier est séparé par fournisseur." },
      { en: "Add a note if needed and tap “Place the order”.", fr: "Ajoutez une note si besoin et touchez « Place the order »." },
    ],
  },
  {
    title: { en: "Do an inventory", fr: "Faire un inventaire" },
    steps: [
      { en: "In Stock, tap Inventory.", fr: "Dans « Stock », touchez « Inventory »." },
      { en: "Count each storage area, or take a photo of a shelf.", fr: "Comptez chaque zone de stockage, ou prenez une étagère en photo." },
      { en: "Validate: the stock is corrected and the differences are kept.", fr: "Validez : le stock est corrigé et les écarts sont conservés." },
    ],
  },
  {
    title: { en: "Print the inspection report", fr: "Imprimer le rapport d'inspection" },
    steps: [
      { en: "Open Inspection report.", fr: "Ouvrez « Inspection report »." },
      { en: "Choose the period.", fr: "Choisissez la période." },
      { en: "Tap “Print / save as PDF”.", fr: "Touchez « Print / save as PDF »." },
    ],
  },
];

/** Ebooks and guides: printable PDFs generated at build time. */
export const GUIDES: { slug: string; title: L; text: L; sections: Block[] }[] = [
  {
    slug: "guide-getting-started",
    title: { en: "Getting started with Cuisine.AI", fr: "Bien démarrer avec Cuisine.AI" },
    text: { en: "Set up your restaurant in an afternoon: account, fridges, team, first invoices.", fr: "Configurez votre restaurant en un après-midi : compte, frigos, équipe, premières factures." },
    sections: [
      { h: { en: "1. Create your restaurant", fr: "1. Créez votre restaurant" }, p: { en: "Sign up with the restaurant name, an email, a password and an admin PIN of 4 to 6 digits.", fr: "Inscrivez-vous avec le nom du restaurant, un e-mail, un mot de passe et un code administrateur de 4 à 6 chiffres." } },
      { h: { en: "2. Add your equipment", fr: "2. Ajoutez vos équipements" }, p: { en: "In Settings, add each fridge, freezer, hot cabinet and fryer with its temperature limits.", fr: "Dans « Settings », ajoutez chaque frigo, congélateur, armoire chaude et friteuse avec ses limites de température." } },
      { h: { en: "3. Add your team", fr: "3. Ajoutez votre équipe" }, p: { en: "Add the names of your staff and their team (kitchen, dining room). They will pick their name on the tablet.", fr: "Ajoutez le nom de vos employés et leur équipe (cuisine, salle). Ils choisiront leur nom sur la tablette." } },
      { h: { en: "4. Scan your first invoices", fr: "4. Scannez vos premières factures" }, p: { en: "Your products, suppliers and prices are created from them: no catalogue to type.", fr: "Vos produits, fournisseurs et prix sont créés à partir d'elles : aucun catalogue à saisir." } },
      { h: { en: "5. Set up the daily checklists", fr: "5. Préparez les check-lists" }, p: { en: "Create the opening, service and closing checklists for each team, with the time they must be done by.", fr: "Créez les check-lists d'ouverture, de service et de fermeture pour chaque équipe, avec l'heure limite." } },
    ],
  },
  {
    slug: "guide-inspection-checklist",
    title: { en: "Inspection-day checklist", fr: "Check-list du jour de contrôle" },
    text: { en: "The records to have ready when the food-safety inspector visits.", fr: "Les enregistrements à avoir prêts lors d'un contrôle d'hygiène." },
    sections: [
      {
        h: { en: "Records to show", fr: "Enregistrements à présenter" },
        list: [
          { en: "Temperature readings, with corrective actions", fr: "Relevés de température, avec les actions correctives" },
          { en: "Completed cleaning checklists", fr: "Check-lists de nettoyage complétées" },
          { en: "Delivery checks and refused products", fr: "Contrôles à réception et produits refusés" },
          { en: "Traceability: labels of opened products", fr: "Traçabilité : étiquettes des produits ouverts" },
          { en: "Fryer oil log", fr: "Suivi des huiles de friture" },
          { en: "Allergen information for every dish", fr: "Information allergènes pour chaque plat" },
        ],
      },
      { h: { en: "In Cuisine.AI", fr: "Dans Cuisine.AI" }, p: { en: "Open Inspection report, choose the period and print: everything above is in one document.", fr: "Ouvrez « Inspection report », choisissez la période et imprimez : tout ce qui précède est dans un seul document." } },
    ],
  },
];
