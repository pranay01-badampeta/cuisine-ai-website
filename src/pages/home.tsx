import { ArrowDown, ArrowRight } from "lucide-react";
import { CONTACT_EMAIL } from "../config";
import { UI, href, type L, type Lang } from "../i18n";
import { PLANS } from "../plans";
import { Faq, Shot } from "../ui";

const T = {
  kicker: { en: "For restaurants, bars and cafés", fr: "Pour les restaurants, bars et cafés" },
  title: { en: "Your kitchen's paperwork, done.", fr: "La paperasse de votre cuisine, réglée." },
  text: {
    en: "Cuisine.AI keeps your food-safety records, stock and supplier invoices in one simple app, and its AI does the typing for you.",
    fr: "Cuisine.AI réunit vos relevés d'hygiène, votre stock et vos factures fournisseurs dans une seule application simple, et son IA fait la saisie à votre place.",
  },
  how: { en: "See how it works", fr: "Voir comment ça marche" },
  facts: {
    en: ["HACCP included", "Any tablet or phone", "English & French"],
    fr: ["HACCP inclus", "Toute tablette ou téléphone", "Français & anglais"],
  },
  whatTitle: { en: "Three jobs, one app.", fr: "Trois tâches, une seule appli." },
  stepsTitle: { en: "How it works", fr: "Comment ça marche" },
  priceTitle: { en: "One price per restaurant.", fr: "Un prix par restaurant." },
  priceText: {
    en: "Food safety and HACCP are included in every plan. No hidden extras.",
    fr: "L'hygiène et le HACCP sont inclus dans chaque offre. Aucun supplément caché.",
  },
  from: { en: "from", fr: "à partir de" },
  perMonth: { en: "/ month", fr: "/ mois" },
  seePlans: { en: "See the plans", fr: "Voir les offres" },
  faqTitle: { en: "Questions", fr: "Questions" },
  endTitle: { en: "See it working in your kitchen.", fr: "Voyez-le tourner dans votre cuisine." },
  endText: { en: "Book a short demo, or simply write to us.", fr: "Réservez une courte démo, ou écrivez-nous simplement." },
};

const JOBS: { n: string; title: L; text: L; points: L[]; img: string }[] = [
  {
    n: "01",
    title: { en: "Food safety, without the clipboard.", fr: "L'hygiène, sans le classeur." },
    text: {
      en: "Your team records everything on a tablet, and the inspection report is ready in one click.",
      fr: "Votre équipe enregistre tout sur une tablette, et le rapport d'inspection est prêt en un clic.",
    },
    points: [
      { en: "Fridge temperatures, by voice or by sensor", fr: "Températures des frigos, à la voix ou par sonde" },
      { en: "Cleaning checklists and delivery checks", fr: "Plans de nettoyage et contrôles à réception" },
      { en: "Traceability, use-by dates and fryer oil", fr: "Traçabilité, DLC et huiles de friture" },
    ],
    img: "inspection-report",
  },
  {
    n: "02",
    title: { en: "Invoices that type themselves.", fr: "Des factures qui se saisissent toutes seules." },
    text: {
      en: "Take a photo of a supplier invoice. The AI reads every line and updates your stock and prices.",
      fr: "Prenez une facture fournisseur en photo. L'IA lit chaque ligne et met à jour votre stock et vos prix.",
    },
    points: [
      { en: "Photo or PDF, read line by line", fr: "Photo ou PDF, lu ligne par ligne" },
      { en: "Stock updated automatically", fr: "Stock mis à jour automatiquement" },
      { en: "Price rises flagged", fr: "Hausses de prix signalées" },
    ],
    img: "invoice-detail",
  },
  {
    n: "03",
    title: { en: "Know what every dish costs.", fr: "Sachez ce que coûte chaque plat." },
    text: {
      en: "Dish costs follow your latest purchase prices, so you see straight away which dishes lose margin.",
      fr: "Le coût des plats suit vos derniers prix d'achat : vous voyez tout de suite quels plats perdent de la marge.",
    },
    points: [
      { en: "Recipe and menu costs", fr: "Coûts des recettes et du menu" },
      { en: "Margin target per dish", fr: "Objectif de marge par plat" },
      { en: "Allergens on every dish", fr: "Allergènes sur chaque plat" },
    ],
    img: "menu-costs",
  },
];

const STEPS: { title: L; text: L }[] = [
  {
    title: { en: "Set up your restaurant", fr: "Créez votre restaurant" },
    text: { en: "Add your fridges, suppliers and products once.", fr: "Ajoutez une fois vos frigos, fournisseurs et produits." },
  },
  {
    title: { en: "Your team records", fr: "Votre équipe enregistre" },
    text: { en: "On a shared tablet: everyone picks their name and taps.", fr: "Sur une tablette partagée : chacun choisit son nom et touche." },
  },
  {
    title: { en: "You see everything", fr: "Vous voyez tout" },
    text: { en: "Dashboard, alerts and reports, ready for inspections.", fr: "Tableau de bord, alertes et rapports, prêts pour les contrôles." },
  },
];

const FAQ: [L, L][] = [
  [
    { en: "Does Cuisine.AI replace my till (POS)?", fr: "Cuisine.AI remplace-t-il ma caisse ?" },
    { en: "No. Your till keeps taking payments; Cuisine.AI handles food safety, purchases, stock and costs.", fr: "Non. Votre caisse continue d'encaisser ; Cuisine.AI gère l'hygiène, les achats, le stock et les coûts." },
  ],
  [
    { en: "Will my kitchen team manage to use it?", fr: "Mon équipe en cuisine saura-t-elle l'utiliser ?" },
    { en: "Yes. Staff pick their name on the tablet and tap. Temperatures can even be said out loud.", fr: "Oui. Chacun choisit son nom sur la tablette et touche. Les températures peuvent même être dites à voix haute." },
  ],
  [
    { en: "What if the AI misreads an invoice?", fr: "Et si l'IA lit mal une facture ?" },
    { en: "Nothing is saved until someone checks it, and uncertain lines are highlighted.", fr: "Rien n'est enregistré avant d'être vérifié, et les lignes incertaines sont signalées." },
  ],
  [
    { en: "Is HACCP extra?", fr: "Le HACCP est-il en option ?" },
    { en: "No. Food safety and HACCP are included in every plan.", fr: "Non. L'hygiène et le HACCP sont inclus dans chaque offre." },
  ],
  [
    { en: "How do I start?", fr: "Comment commencer ?" },
    { en: "Book a demo or write to us: we show you the app and help you set up your restaurant.", fr: "Réservez une démo ou écrivez-nous : nous vous montrons l'application et vous aidons à créer votre restaurant." },
  ],
];

export default function HomePage({ lang }: { lang: Lang }) {
  const cheapest = Math.min(...PLANS.map((p) => p.annual));
  return (
    <main>
      {/* 1. What it is */}
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="eyebrow">{T.kicker[lang]}</p>
        <h1 className="headline mx-auto mt-5 max-w-4xl text-[3.4rem] sm:text-7xl lg:text-[6.2rem]">{T.title[lang]}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{T.text[lang]}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={href(lang, "contact")} className="btn-primary rounded-full px-7 text-base">{UI.demo[lang]} <ArrowRight className="size-4" /></a>
          <a href="#how" className="btn-outline rounded-full px-7 text-base">{T.how[lang]} <ArrowDown className="size-4" /></a>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {T.facts[lang].map((f) => (
            <li key={f} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-ink" /> {f}</li>
          ))}
        </ul>
        <div className="relative mx-auto mt-14 max-w-5xl pb-6">
          <Shot img="dashboard" alt="The Cuisine.AI dashboard" />
          <Shot img="mobile-dashboard" alt="Cuisine.AI on a phone" className="absolute -right-2 -bottom-2 hidden w-44 sm:block lg:-right-10 lg:w-52" />
        </div>
      </section>

      {/* 2. What it does */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
        <h2 className="headline text-5xl sm:text-6xl">{T.whatTitle[lang]}</h2>
        <div className="mt-16 space-y-24">
          {JOBS.map((j, i) => (
            <article key={j.n} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="font-mono text-sm text-muted">{j.n}</p>
                <h3 className="headline mt-3 text-4xl sm:text-5xl">{j.title[lang]}</h3>
                <p className="mt-5 text-lg text-muted">{j.text[lang]}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {j.points.map((p) => (
                    <li key={p.en} className="flex items-center gap-3"><span className="h-px w-5 bg-ink" /> {p[lang]}</li>
                  ))}
                </ul>
              </div>
              <Shot img={j.img} alt={j.title[lang]} />
            </article>
          ))}
        </div>
      </section>

      {/* 3. How it works */}
      <section id="how" className="scroll-mt-16 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="headline text-5xl sm:text-6xl">{T.stepsTitle[lang]}</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title.en} className="border-t border-white/20 pt-6">
                <span className="headline text-6xl text-white/40">{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title[lang]}</h3>
                <p className="mt-2 text-white/65">{s.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Price */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-end gap-8 border-b border-line pb-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="headline text-5xl sm:text-6xl">{T.priceTitle[lang]}</h2>
            <p className="mt-4 max-w-lg text-lg text-muted">{T.priceText[lang]}</p>
          </div>
          <div className="md:text-right">
            <p className="text-muted">{T.from[lang]}</p>
            <p className="headline text-7xl">{cheapest} €<span className="font-sans text-lg text-muted"> {T.perMonth[lang]}</span></p>
            <a href={href(lang, "pricing")} className="btn-outline mt-5 rounded-full px-6">{T.seePlans[lang]} <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      {/* 5. Questions */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 pb-24 sm:px-6">
        <h2 className="headline text-5xl sm:text-6xl">{T.faqTitle[lang]}</h2>
        <div className="mt-10">
          <Faq lang={lang} items={FAQ} />
        </div>
      </section>

      {/* 6. Talk to us */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-20 text-center text-white sm:px-12">
          <h2 className="headline mx-auto max-w-3xl text-5xl sm:text-6xl">{T.endTitle[lang]}</h2>
          <p className="mt-4 text-white/65">{T.endText[lang]}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={href(lang, "contact")} className="btn rounded-full bg-white px-7 text-base text-ink hover:bg-white/90">{UI.demo[lang]} <ArrowRight className="size-4" /></a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn rounded-full border border-white/30 px-7 text-base text-white hover:bg-white/10">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
