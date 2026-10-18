import type { L } from "../i18n";

export type Section = { title: L; text: L; points: L[]; img: string };
export type Feature = {
  slug: string;
  group: "platform" | "options";
  menu: L; // name in the Software menu
  title: L;
  tagline: L;
  sections: Section[];
  closing: L; // the banner at the end of the page
};

export const FEATURES: Feature[] = [
  {
    slug: "purchasing",
    group: "platform",
    menu: { en: "Purchasing management", fr: "Gestion des achats" },
    title: { en: "Purchasing management", fr: "Gestion des achats" },
    tagline: {
      en: "Order the right quantities, check every delivery and keep an eye on supplier prices.",
      fr: "Commandez les bonnes quantités, contrôlez chaque livraison et surveillez les prix fournisseurs.",
    },
    sections: [
      {
        title: { en: "Supplier orders", fr: "Commandes fournisseurs" },
        text: {
          en: "Add products to the cart from the stock screen, or let Smart order fill it from how fast you use each product. The cart is split by supplier: one order per supplier, ready to send.",
          fr: "Ajoutez des produits au panier depuis le stock, ou laissez la commande intelligente le remplir selon votre consommation. Le panier est séparé par fournisseur : une commande par fournisseur, prête à envoyer.",
        },
        points: [
          { en: "Smart order based on daily use and minimum stock", fr: "Commande intelligente selon la consommation et le stock minimum" },
          { en: "One order per supplier, with a note for the delivery", fr: "Une commande par fournisseur, avec une note pour la livraison" },
          { en: "Choose how many days the order must cover", fr: "Choisissez le nombre de jours à couvrir" },
        ],
        img: "orders",
      },
      {
        title: { en: "Delivery checks", fr: "Contrôle à réception" },
        text: {
          en: "When the delivery arrives, check it against the order: quantities, temperatures and refused items. A photo of the delivery note fills the form for you.",
          fr: "À l'arrivée de la livraison, contrôlez-la par rapport à la commande : quantités, températures et produits refusés. Une photo du bon de livraison remplit le formulaire pour vous.",
        },
        points: [
          { en: "Delivery note matched with the order", fr: "Bon de livraison rapproché de la commande" },
          { en: "Temperature and compliance of each product", fr: "Température et conformité de chaque produit" },
          { en: "Accepted products go straight into stock", fr: "Les produits acceptés entrent directement en stock" },
        ],
        img: "deliveries",
      },
      {
        title: { en: "Price tracking", fr: "Suivi des prix" },
        text: {
          en: "Every invoice updates the purchase price of your products. When a supplier raises a price, you see it right away, with the percentage.",
          fr: "Chaque facture met à jour le prix d'achat de vos produits. Quand un fournisseur augmente un prix, vous le voyez tout de suite, avec le pourcentage.",
        },
        points: [
          { en: "Purchase prices updated from every invoice", fr: "Prix d'achat mis à jour à chaque facture" },
          { en: "Price rises highlighted line by line", fr: "Hausses de prix signalées ligne par ligne" },
          { en: "History of every supplier invoice", fr: "Historique de toutes les factures fournisseurs" },
        ],
        img: "invoice-detail",
      },
    ],
    closing: { en: "Take back control of your purchases", fr: "Reprenez le contrôle de vos achats" },
  },
  {
    slug: "invoices",
    group: "platform",
    menu: { en: "AI invoice reading", fr: "Lecture IA des factures" },
    title: { en: "AI invoice reading", fr: "Lecture des factures par IA" },
    tagline: {
      en: "Take a photo of a supplier invoice: stock, prices and costs update themselves.",
      fr: "Prenez une facture fournisseur en photo : le stock, les prix et les coûts se mettent à jour tout seuls.",
    },
    sections: [
      {
        title: { en: "Photo, scan or PDF", fr: "Photo, scan ou PDF" },
        text: {
          en: "Take a photo with the tablet, upload a scan or the PDF the supplier emailed. A PDF holding several invoices is split and you review them one after the other.",
          fr: "Prenez une photo avec la tablette, déposez un scan ou le PDF reçu par e-mail. Un PDF qui contient plusieurs factures est découpé et vous les vérifiez l'une après l'autre.",
        },
        points: [
          { en: "Photos, scans and emailed PDFs", fr: "Photos, scans et PDF reçus par e-mail" },
          { en: "Several invoices in one PDF", fr: "Plusieurs factures dans un seul PDF" },
          { en: "Duplicate invoices detected", fr: "Factures en double détectées" },
        ],
        img: "invoices",
      },
      {
        title: { en: "Every line read and matched", fr: "Chaque ligne lue et reconnue" },
        text: {
          en: "The AI reads every line, quantity, unit and price, and matches it to your own products. Packs are converted to your units: “2 cartons x 6” becomes 12 bottles.",
          fr: "L'IA lit chaque ligne, quantité, unité et prix, et la relie à vos propres produits. Les colis sont convertis dans vos unités : « 2 cartons x 6 » devient 12 bouteilles.",
        },
        points: [
          { en: "Matched to your catalogue, learns your suppliers' wording", fr: "Relié à votre catalogue, apprend les libellés de vos fournisseurs" },
          { en: "Credit notes and discount lines handled", fr: "Avoirs et lignes de remise pris en compte" },
          { en: "New products created from the invoice", fr: "Nouveaux produits créés depuis la facture" },
        ],
        img: "invoice-detail",
      },
      {
        title: { en: "You stay in control", fr: "Vous gardez la main" },
        text: {
          en: "Nothing is saved before someone confirms. Lines the AI is unsure about are highlighted so they get checked first. Typing an invoice by hand is always possible.",
          fr: "Rien n'est enregistré avant validation. Les lignes dont l'IA n'est pas sûre sont signalées pour être vérifiées en premier. La saisie manuelle reste toujours possible.",
        },
        points: [
          { en: "“Check this line” on uncertain lines", fr: "« À vérifier » sur les lignes incertaines" },
          { en: "Printed totals kept to the cent", fr: "Totaux imprimés conservés au centime" },
          { en: "Manual entry, free and unlimited", fr: "Saisie manuelle gratuite et illimitée" },
        ],
        img: "stock",
      },
    ],
    closing: { en: "Stop typing your invoices", fr: "Arrêtez de saisir vos factures" },
  },
  {
    slug: "costs",
    group: "platform",
    menu: { en: "Recipe and menu costs", fr: "Coûts des recettes et du menu" },
    title: { en: "Recipe and menu costs", fr: "Coûts des recettes et du menu" },
    tagline: {
      en: "The real cost of every dish and cocktail, updated from your latest invoice prices.",
      fr: "Le coût réel de chaque plat et cocktail, mis à jour avec vos derniers prix d'achat.",
    },
    sections: [
      {
        title: { en: "Cost of every dish", fr: "Coût de chaque plat" },
        text: {
          en: "Enter each recipe once. Its cost follows the purchase prices read from your invoices, so you always see today's cost, not last year's.",
          fr: "Saisissez chaque recette une seule fois. Son coût suit les prix d'achat lus sur vos factures : vous voyez le coût d'aujourd'hui, pas celui de l'an dernier.",
        },
        points: [
          { en: "Cost per portion, glass or litre", fr: "Coût par portion, verre ou litre" },
          { en: "Updated automatically from invoices", fr: "Mis à jour automatiquement depuis les factures" },
          { en: "Dishes and drinks in the same table", fr: "Plats et boissons dans le même tableau" },
        ],
        img: "menu-costs",
      },
      {
        title: { en: "Margins and cost ratio", fr: "Marges et ratio matière" },
        text: {
          en: "For each dish, Cuisine.AI shows the cost ratio and the margin, and tells you when a dish is above your target, with the price it should be sold at.",
          fr: "Pour chaque plat, Cuisine.AI affiche le ratio matière et la marge, et vous prévient quand un plat dépasse votre objectif, avec le prix de vente conseillé.",
        },
        points: [
          { en: "Cost ratio compared with your target", fr: "Ratio matière comparé à votre objectif" },
          { en: "Suggested selling price", fr: "Prix de vente conseillé" },
          { en: "Dishes hit by a price rise flagged", fr: "Plats touchés par une hausse de prix signalés" },
        ],
        img: "menu-costs",
      },
      {
        title: { en: "Allergen table", fr: "Tableau des allergènes" },
        text: {
          en: "The 14 allergens of each dish come from its ingredients. Print the allergen table of your whole menu in one click.",
          fr: "Les 14 allergènes de chaque plat viennent de ses ingrédients. Imprimez le tableau des allergènes de toute votre carte en un clic.",
        },
        points: [
          { en: "Built from the ingredients", fr: "Construit à partir des ingrédients" },
          { en: "Printable for the dining room", fr: "Imprimable pour la salle" },
          { en: "Updated when a recipe changes", fr: "Mis à jour quand une recette change" },
        ],
        img: "allergens",
      },
    ],
    closing: { en: "Know what every dish earns you", fr: "Sachez ce que vous rapporte chaque plat" },
  },
  {
    slug: "stock",
    group: "platform",
    menu: { en: "Inventories and stock", fr: "Inventaires et stock" },
    title: { en: "Inventories and stock", fr: "Inventaires et stock" },
    tagline: {
      en: "Live stock and stock value, updated by every invoice, delivery and production.",
      fr: "Stock et valeur du stock en direct, mis à jour par chaque facture, livraison et production.",
    },
    sections: [
      {
        title: { en: "Live stock", fr: "Stock en direct" },
        text: {
          en: "Every product shows its quantity, its storage area and how many days it will last at your current pace. Products below their minimum stand out.",
          fr: "Chaque produit affiche sa quantité, sa zone de stockage et le nombre de jours qu'il tiendra à votre rythme actuel. Les produits sous le minimum ressortent.",
        },
        points: [
          { en: "Days left for each product", fr: "Jours restants pour chaque produit" },
          { en: "Filter by supplier, storage area or running low", fr: "Filtre par fournisseur, zone ou produits bas" },
          { en: "Stock value always up to date", fr: "Valeur du stock toujours à jour" },
        ],
        img: "stock",
      },
      {
        title: { en: "Inventory counts", fr: "Inventaires" },
        text: {
          en: "Start an inventory: every product is listed by storage area with its expected quantity. Count, correct, validate. Or take a photo of a shelf and let the AI count.",
          fr: "Lancez un inventaire : chaque produit est listé par zone avec sa quantité attendue. Comptez, corrigez, validez. Ou prenez une étagère en photo et laissez l'IA compter.",
        },
        points: [
          { en: "Count by storage area", fr: "Comptage par zone de stockage" },
          { en: "AI shelf count from a photo", fr: "Comptage d'une étagère par photo" },
          { en: "Differences recorded in the history", fr: "Écarts enregistrés dans l'historique" },
        ],
        img: "mobile-stock",
      },
      {
        title: { en: "Every movement traced", fr: "Chaque mouvement tracé" },
        text: {
          en: "Invoices, deliveries, inventories and production batches all move the stock, and every movement is kept in the history, ready to export.",
          fr: "Factures, livraisons, inventaires et productions font bouger le stock, et chaque mouvement est gardé dans l'historique, prêt à être exporté.",
        },
        points: [
          { en: "Full history of stock movements", fr: "Historique complet des mouvements" },
          { en: "Shortages flagged when stock runs out", fr: "Manques signalés quand le stock est épuisé" },
          { en: "CSV export for your accountant", fr: "Export CSV pour votre comptable" },
        ],
        img: "history",
      },
    ],
    closing: { en: "Always know what you have", fr: "Sachez toujours ce que vous avez" },
  },
  {
    slug: "production",
    group: "platform",
    menu: { en: "Production", fr: "Production" },
    title: { en: "Production", fr: "Production" },
    tagline: {
      en: "Record what the kitchen prepares: ingredients leave the stock and you print the label.",
      fr: "Enregistrez ce que la cuisine prépare : les ingrédients sortent du stock et vous imprimez l'étiquette.",
    },
    sections: [
      {
        title: { en: "Kitchen batches", fr: "Productions de la cuisine" },
        text: {
          en: "Choose a recipe and the quantity produced. The ingredients are deducted from the stock in the right units, and the batch gets its use-by date.",
          fr: "Choisissez une recette et la quantité produite. Les ingrédients sont déduits du stock dans les bonnes unités, et la production reçoit sa date limite.",
        },
        points: [
          { en: "Ingredients deducted automatically", fr: "Ingrédients déduits automatiquement" },
          { en: "Use-by date from the recipe's shelf life", fr: "DLC calculée selon la durée de conservation" },
          { en: "Missing ingredients flagged", fr: "Ingrédients manquants signalés" },
        ],
        img: "production",
      },
      {
        title: { en: "Batch labels", fr: "Étiquettes de production" },
        text: {
          en: "Every batch has a label with the product, the date it was made, the use-by date, the batch number and who made it, ready to print on any printer.",
          fr: "Chaque production a son étiquette avec le produit, la date de fabrication, la DLC, le numéro de lot et qui l'a préparée, prête à imprimer sur n'importe quelle imprimante.",
        },
        points: [
          { en: "Product, dates and batch number", fr: "Produit, dates et numéro de lot" },
          { en: "Prints from the tablet or computer", fr: "Impression depuis la tablette ou l'ordinateur" },
          { en: "Kept for traceability", fr: "Conservée pour la traçabilité" },
        ],
        img: "production",
      },
      {
        title: { en: "Use-by dates and waste", fr: "DLC et pertes" },
        text: {
          en: "Batches and opened products that expire soon appear on one screen. What is thrown away is recorded, so you see your waste.",
          fr: "Les productions et produits ouverts qui expirent bientôt apparaissent sur un seul écran. Ce qui est jeté est enregistré : vous voyez vos pertes.",
        },
        points: [
          { en: "What expires in the next 3 days", fr: "Ce qui expire dans les 3 jours" },
          { en: "Waste recorded", fr: "Pertes enregistrées" },
          { en: "Alerts on the dashboard", fr: "Alertes sur le tableau de bord" },
        ],
        img: "dashboard",
      },
    ],
    closing: { en: "Organise your kitchen production", fr: "Organisez la production de votre cuisine" },
  },
  {
    slug: "reports",
    group: "platform",
    menu: { en: "Reports and dashboard", fr: "Rapports et tableau de bord" },
    title: { en: "Reports and dashboard", fr: "Rapports et tableau de bord" },
    tagline: {
      en: "One screen to see what needs attention today, and reports ready when you need them.",
      fr: "Un écran pour voir ce qui demande votre attention aujourd'hui, et des rapports prêts quand vous en avez besoin.",
    },
    sections: [
      {
        title: { en: "Dashboard", fr: "Tableau de bord" },
        text: {
          en: "Food-safety score, stock value, spending and products about to run out, plus a list of what needs attention right now: late tasks, missing temperatures, expired products.",
          fr: "Score d'hygiène, valeur du stock, dépenses et produits bientôt épuisés, plus la liste de ce qui demande votre attention : tâches en retard, températures manquantes, produits périmés.",
        },
        points: [
          { en: "Food-safety score over 7 days", fr: "Score d'hygiène sur 7 jours" },
          { en: "Spending over 30 days", fr: "Dépenses sur 30 jours" },
          { en: "What needs attention today", fr: "Ce qui demande votre attention aujourd'hui" },
        ],
        img: "dashboard",
      },
      {
        title: { en: "Inspection report", fr: "Rapport d'inspection" },
        text: {
          en: "Choose a period and print the food-safety summary: temperature checks, cleaning tasks, deliveries, traceability, fryer oil and corrective actions.",
          fr: "Choisissez une période et imprimez la synthèse hygiène : relevés de température, tâches de nettoyage, livraisons, traçabilité, huiles de friture et actions correctives.",
        },
        points: [
          { en: "PDF in one click", fr: "PDF en un clic" },
          { en: "Out-of-range readings and their actions", fr: "Relevés hors norme et actions associées" },
          { en: "Any period you choose", fr: "Sur la période de votre choix" },
        ],
        img: "inspection-report",
      },
      {
        title: { en: "Ask Cuisine.AI", fr: "Demandez à Cuisine.AI" },
        text: {
          en: "Ask a question in plain words: how much you spent at the butcher, which prices went up, which dishes are above target. The answer comes from your own records.",
          fr: "Posez votre question simplement : combien vous avez dépensé chez le boucher, quels prix ont augmenté, quels plats dépassent l'objectif. La réponse vient de vos propres données.",
        },
        points: [
          { en: "Answers from your stock, invoices and records", fr: "Réponses tirées de votre stock, factures et relevés" },
          { en: "In English or French", fr: "En français ou en anglais" },
          { en: "History of every record, exportable", fr: "Historique de chaque relevé, exportable" },
        ],
        img: "assistant",
      },
    ],
    closing: { en: "See your restaurant at a glance", fr: "Voyez votre restaurant d'un coup d'œil" },
  },
  {
    slug: "hygiene",
    group: "platform",
    menu: { en: "Hygiene", fr: "Hygiène" },
    title: { en: "Hygiene and HACCP", fr: "Hygiène et HACCP" },
    tagline: {
      en: "All your food-safety records in one place, ready when the inspector walks in.",
      fr: "Tous vos relevés d'hygiène au même endroit, prêts quand l'inspecteur arrive.",
    },
    sections: [
      {
        title: { en: "Temperature readings", fr: "Relevés de température" },
        text: {
          en: "Record every fridge, freezer and hot cabinet in seconds, by typing or by saying the temperatures out loud. Readings out of range ask for a corrective action.",
          fr: "Relevez chaque frigo, congélateur et armoire chaude en quelques secondes, en tapant ou en disant les températures à voix haute. Un relevé hors norme demande une action corrective.",
        },
        points: [
          { en: "Voice entry: “cold room 3, freezer minus 19”", fr: "Saisie vocale : « chambre froide 3, congélateur moins 19 »" },
          { en: "Limits set for each piece of equipment", fr: "Limites définies pour chaque équipement" },
          { en: "Corrective actions recorded", fr: "Actions correctives enregistrées" },
        ],
        img: "temperatures",
      },
      {
        title: { en: "Cleaning plan and checklists", fr: "Plan de nettoyage et check-lists" },
        text: {
          en: "Daily checklists for each team, with the time they must be done by. Late tasks show on the dashboard; everything done is kept with the name and time.",
          fr: "Des check-lists quotidiennes pour chaque équipe, avec l'heure limite. Les tâches en retard apparaissent sur le tableau de bord ; tout ce qui est fait est gardé avec le nom et l'heure.",
        },
        points: [
          { en: "Checklists per team and per day", fr: "Check-lists par équipe et par jour" },
          { en: "Late tasks flagged", fr: "Tâches en retard signalées" },
          { en: "Who did what, and when", fr: "Qui a fait quoi, et quand" },
        ],
        img: "tasks",
      },
      {
        title: { en: "Fryer oil", fr: "Huiles de friture" },
        text: {
          en: "Log quality checks, filtrations and oil changes for each fryer, with the polar compound reading if you measure it.",
          fr: "Enregistrez les contrôles, filtrations et changements d'huile de chaque friteuse, avec le taux de composés polaires si vous le mesurez.",
        },
        points: [
          { en: "Checks, filtration and changes", fr: "Contrôles, filtrations et changements" },
          { en: "Polar compounds (%)", fr: "Composés polaires (%)" },
          { en: "Included in the inspection report", fr: "Inclus dans le rapport d'inspection" },
        ],
        img: "oil",
      },
    ],
    closing: { en: "Be ready for the inspection", fr: "Soyez prêt pour le contrôle" },
  },
  {
    slug: "allergens",
    group: "platform",
    menu: { en: "Allergens and traceability", fr: "Allergènes et traçabilité" },
    title: { en: "Allergens and traceability", fr: "Allergènes et traçabilité" },
    tagline: {
      en: "Keep the label of every product you open and know the allergens of every dish.",
      fr: "Gardez l'étiquette de chaque produit ouvert et connaissez les allergènes de chaque plat.",
    },
    sections: [
      {
        title: { en: "Label photos", fr: "Photos d'étiquettes" },
        text: {
          en: "Take a picture of the label: the AI reads the product name, batch number, use-by date and allergens. The photo is kept with the record.",
          fr: "Prenez l'étiquette en photo : l'IA lit le nom du produit, le numéro de lot, la DLC et les allergènes. La photo est gardée avec l'enregistrement.",
        },
        points: [
          { en: "Batch and use-by date read by AI", fr: "Lot et DLC lus par l'IA" },
          { en: "Photo kept for inspections", fr: "Photo conservée pour les contrôles" },
          { en: "Linked to your catalogue products", fr: "Reliée aux produits de votre catalogue" },
        ],
        img: "traceability",
      },
      {
        title: { en: "Allergens of every dish", fr: "Allergènes de chaque plat" },
        text: {
          en: "The 14 regulated allergens follow your ingredients into your recipes, so the allergen table of your menu stays right when a supplier or a recipe changes.",
          fr: "Les 14 allergènes réglementaires suivent vos ingrédients dans vos recettes : le tableau des allergènes reste juste quand un fournisseur ou une recette change.",
        },
        points: [
          { en: "14 regulated allergens", fr: "14 allergènes réglementaires" },
          { en: "From ingredient to dish", fr: "De l'ingrédient au plat" },
          { en: "Printable allergen table", fr: "Tableau des allergènes imprimable" },
        ],
        img: "allergens",
      },
      {
        title: { en: "Use-by dates", fr: "Dates limites" },
        text: {
          en: "Opened products and batches that expire soon are listed in one place, so nothing out of date reaches a plate.",
          fr: "Les produits ouverts et les productions qui expirent bientôt sont listés au même endroit : rien de périmé n'arrive dans l'assiette.",
        },
        points: [
          { en: "Expiring in the next 3 days", fr: "Expire dans les 3 jours" },
          { en: "Alerts on the dashboard", fr: "Alertes sur le tableau de bord" },
          { en: "Waste recorded", fr: "Pertes enregistrées" },
        ],
        img: "dashboard",
      },
    ],
    closing: { en: "Trace every product", fr: "Tracez chaque produit" },
  },
  {
    slug: "sensors",
    group: "options",
    menu: { en: "Temperature sensors", fr: "Sondes de température" },
    title: { en: "Temperature sensors", fr: "Sondes de température" },
    tagline: {
      en: "Connected probes send their readings on their own. Nobody has to write them down.",
      fr: "Les sondes connectées envoient leurs relevés toutes seules. Plus personne n'a à les noter.",
    },
    sections: [
      {
        title: { en: "Automatic readings", fr: "Relevés automatiques" },
        text: {
          en: "Each restaurant gets a sensor key. Your probes send their readings to Cuisine.AI, which records them like a manual check.",
          fr: "Chaque restaurant reçoit une clé de sonde. Vos sondes envoient leurs relevés à Cuisine.AI, qui les enregistre comme un relevé manuel.",
        },
        points: [
          { en: "One key per restaurant", fr: "Une clé par restaurant" },
          { en: "Several fridges in one message", fr: "Plusieurs frigos dans un seul envoi" },
          { en: "Stored with the manual readings", fr: "Enregistrés avec les relevés manuels" },
        ],
        img: "temperatures",
      },
      {
        title: { en: "Out of range, flagged", fr: "Hors norme, signalé" },
        text: {
          en: "Each reading is compared with the limits of the equipment. Anything out of range appears on the dashboard and in the inspection report.",
          fr: "Chaque relevé est comparé aux limites de l'équipement. Tout relevé hors norme apparaît sur le tableau de bord et dans le rapport d'inspection.",
        },
        points: [
          { en: "Limits per fridge and freezer", fr: "Limites par frigo et congélateur" },
          { en: "Shown on the dashboard", fr: "Affiché sur le tableau de bord" },
          { en: "In the inspection report", fr: "Dans le rapport d'inspection" },
        ],
        img: "inspection-report",
      },
      {
        title: { en: "Simple to connect", fr: "Simple à connecter" },
        text: {
          en: "Any probe or gateway that can send a web request can be connected. The developer page explains the format, with an example.",
          fr: "Toute sonde ou passerelle capable d'envoyer une requête web peut être connectée. La page développeurs explique le format, avec un exemple.",
        },
        points: [
          { en: "Standard HTTPS and JSON", fr: "HTTPS et JSON standards" },
          { en: "Wrong keys are blocked", fr: "Les mauvaises clés sont bloquées" },
          { en: "Documented on the developer page", fr: "Documenté sur la page développeurs" },
        ],
        img: "history",
      },
    ],
    closing: { en: "Let your fridges report themselves", fr: "Laissez vos frigos faire leurs relevés" },
  },
  {
    slug: "mobile",
    group: "options",
    menu: { en: "Mobile application", fr: "Application mobile" },
    title: { en: "Mobile application", fr: "Application mobile" },
    tagline: {
      en: "Cuisine.AI goes where your team works: kitchen, cellar, delivery door.",
      fr: "Cuisine.AI va là où votre équipe travaille : cuisine, cave, porte de livraison.",
    },
    sections: [
      {
        title: { en: "On tablet and phone", fr: "Sur tablette et téléphone" },
        text: {
          en: "Cuisine.AI works in the browser of any tablet, phone or computer. Add it to the home screen and it opens like an app, full screen.",
          fr: "Cuisine.AI fonctionne dans le navigateur de toute tablette, tout téléphone ou ordinateur. Ajoutez-le à l'écran d'accueil : il s'ouvre comme une application, en plein écran.",
        },
        points: [
          { en: "iPad, Android, iPhone and computers", fr: "iPad, Android, iPhone et ordinateurs" },
          { en: "Nothing to install from a store", fr: "Rien à installer depuis un store" },
          { en: "Always the latest version", fr: "Toujours la dernière version" },
        ],
        img: "mobile-dashboard",
      },
      {
        title: { en: "One shared tablet for the team", fr: "Une tablette partagée pour l'équipe" },
        text: {
          en: "The restaurant has one account. Staff pick their name when they record something, and settings stay behind the admin PIN.",
          fr: "Le restaurant a un seul compte. Chacun choisit son nom quand il enregistre quelque chose, et les réglages restent protégés par le code administrateur.",
        },
        points: [
          { en: "Staff pick their name", fr: "Chacun choisit son nom" },
          { en: "Admin PIN that locks after 15 minutes", fr: "Code admin qui se verrouille après 15 minutes" },
          { en: "Who did what, recorded", fr: "Qui a fait quoi, enregistré" },
        ],
        img: "session",
      },
      {
        title: { en: "The camera does the typing", fr: "L'appareil photo fait la saisie" },
        text: {
          en: "Invoices, delivery notes, product labels and shelves: point the camera, the AI fills the form.",
          fr: "Factures, bons de livraison, étiquettes et étagères : visez avec l'appareil photo, l'IA remplit le formulaire.",
        },
        points: [
          { en: "Invoices and delivery notes", fr: "Factures et bons de livraison" },
          { en: "Product labels", fr: "Étiquettes produits" },
          { en: "Shelf counts", fr: "Comptage des étagères" },
        ],
        img: "mobile-stock",
      },
    ],
    closing: { en: "Take Cuisine.AI into the kitchen", fr: "Emmenez Cuisine.AI en cuisine" },
  },
];
