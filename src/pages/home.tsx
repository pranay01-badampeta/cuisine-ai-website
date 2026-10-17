import { APP } from "../config";
import { UI, href, type L, type Lang } from "../i18n";
import { Buttons, CtaBanner, Faq, Marquee, Shot } from "../ui";

const T = {
  title: { en: "Take control of your restaurant.", fr: "Reprenez le contrôle de votre restaurant." },
  text: {
    en: "Cuisine.AI brings together your food safety, purchases, stock and costs to give you a clear view of your kitchen, with AI that does the typing.",
    fr: "Cuisine.AI réunit votre hygiène, vos achats, votre stock et vos coûts pour vous donner une vision claire de votre cuisine, avec une IA qui fait la saisie.",
  },
  ribbon: {
    en: ["HACCP included", "AI invoice reading", "Works on any tablet", "14-day free trial"],
    fr: ["HACCP inclus", "Lecture IA des factures", "Sur toutes les tablettes", "Essai gratuit 14 jours"],
  },
  measured: { en: "Everything measured. Nothing typed twice.", fr: "Tout est mesuré. Rien n'est saisi deux fois." },
  measuredText: {
    en: "Cuisine.AI helps you run your kitchen, control your costs and stay ready for inspections, every day.",
    fr: "Cuisine.AI vous aide à piloter votre cuisine, maîtriser vos coûts et rester prêt pour les contrôles, au quotidien.",
  },
  partners: {
    en: ["Temperature sensors", "CSV export", "Any tablet or phone", "Label printing"],
    fr: ["Sondes de température", "Export CSV", "Toutes tablettes et téléphones", "Impression d'étiquettes"],
  },
  partnersLink: { en: "Discover our integrations", fr: "Découvrez nos intégrations" },
  faqTitle: { en: "You have questions? We have answers", fr: "Vous avez des questions ? Nous avons les réponses" },
  ready: { en: "Ready to take back control of your kitchen?", fr: "Prêt à reprendre le contrôle de votre cuisine ?" },
} satisfies Record<string, L | { en: string[]; fr: string[] }>;

const BLOCKS: { eyebrow: L; title: L; text: L; img: string; slug: string }[] = [
  {
    eyebrow: { en: "Mobile application", fr: "Application mobile" },
    title: { en: "Cuisine.AI goes where you work.", fr: "Cuisine.AI vous suit sur le terrain." },
    text: {
      en: "Temperatures, deliveries, inventories and invoice scans: record everything in the kitchen, the cellar or at the delivery door, on any tablet or phone.",
      fr: "Températures, livraisons, inventaires et scans de factures : enregistrez tout en cuisine, en cave ou à la porte de livraison, sur n'importe quelle tablette ou téléphone.",
    },
    img: "mobile-dashboard",
    slug: "mobile",
  },
  {
    eyebrow: { en: "AI invoice reading", fr: "Lecture IA des factures" },
    title: { en: "One invoice. Zero typing.", fr: "Une facture. Zéro saisie." },
    text: {
      en: "Take a photo or drop the PDF: every line is read, matched to your products and added to the stock, and price rises are flagged.",
      fr: "Prenez une photo ou déposez le PDF : chaque ligne est lue, reliée à vos produits et ajoutée au stock, et les hausses de prix sont signalées.",
    },
    img: "invoice-detail",
    slug: "invoices",
  },
  {
    eyebrow: { en: "Dish costs and margins", fr: "Coûts et marges des plats" },
    title: { en: "Measure. Compare. Correct.", fr: "Mesurez. Comparez. Corrigez." },
    text: {
      en: "The cost of every dish follows your latest purchase prices. Cuisine.AI compares it with your target and tells you which dishes to re-price.",
      fr: "Le coût de chaque plat suit vos derniers prix d'achat. Cuisine.AI le compare à votre objectif et vous dit quels plats re-tarifer.",
    },
    img: "menu-costs",
    slug: "costs",
  },
  {
    eyebrow: { en: "Hygiene and HACCP", fr: "Hygiène et HACCP" },
    title: { en: "Ready when the inspector walks in.", fr: "Prêt quand l'inspecteur arrive." },
    text: {
      en: "Temperatures by voice or sensors, cleaning checklists, traceability, fryer oil and delivery checks, with the inspection report in one click.",
      fr: "Températures à la voix ou par sondes, check-lists de nettoyage, traçabilité, huiles de friture et contrôles à réception, avec le rapport d'inspection en un clic.",
    },
    img: "inspection-report",
    slug: "hygiene",
  },
];

const HOME_FAQ: [L, L][] = [
  [
    { en: "Does Cuisine.AI replace my till (POS)?", fr: "Cuisine.AI remplace-t-il ma caisse ?" },
    { en: "No. Cuisine.AI handles food safety, purchases, stock and costs; your till keeps taking payments.", fr: "Non. Cuisine.AI gère l'hygiène, les achats, le stock et les coûts ; votre caisse continue d'encaisser." },
  ],
  [
    { en: "How much does Cuisine.AI cost and how can I try it?", fr: "Combien coûte Cuisine.AI et comment l'essayer ?" },
    { en: "Plans start at 80 € per month per site. Every plan starts with a 14-day free trial.", fr: "Les offres commencent à 80 € par mois et par site. Chaque offre commence par un essai gratuit de 14 jours." },
  ],
  [
    { en: "Will my kitchen team manage to use it?", fr: "Mes équipes en cuisine réussiront-elles à l'utiliser ?" },
    { en: "Yes: staff pick their name on the tablet and tap. Temperatures can even be said out loud.", fr: "Oui : chacun choisit son nom sur la tablette et touche. Les températures peuvent même être dites à voix haute." },
  ],
  [
    { en: "What if the AI misreads an invoice?", fr: "Et si l'IA lit mal une facture ?" },
    { en: "Nothing is saved before someone confirms, and uncertain lines are highlighted.", fr: "Rien n'est enregistré avant validation, et les lignes incertaines sont signalées." },
  ],
  [
    { en: "How does Cuisine.AI help me increase my margin?", fr: "Comment Cuisine.AI m'aide-t-il à augmenter ma marge ?" },
    { en: "Purchase prices are read from every invoice, so dish costs stay right, price rises are flagged and dishes above your target are pointed out with a suggested price.", fr: "Les prix d'achat sont lus sur chaque facture : les coûts des plats restent justes, les hausses sont signalées et les plats au-dessus de l'objectif sont indiqués avec un prix conseillé." },
  ],
];

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <main>
      <section className="bg-canvas">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{T.title[lang]}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{T.text[lang]}</p>
            <Buttons lang={lang} className="mt-8" />
            <p className="mt-3 text-sm text-muted">{UI.trial14[lang]}</p>
          </div>
          <Shot img="dashboard" alt="" />
        </div>
      </section>

      <Marquee items={T.ribbon[lang]} dark />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{T.measured[lang]}</h2>
          <p className="mt-4 text-lg text-muted">{T.measuredText[lang]}</p>
        </div>
        <div className="mt-16 space-y-20">
          {BLOCKS.map((b, i) => (
            <div key={b.slug} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="text-sm font-semibold tracking-wider text-muted uppercase">{b.eyebrow[lang]}</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">{b.title[lang]}</h3>
                <p className="mt-4 text-lg text-muted">{b.text[lang]}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`${APP}/signup`} className="btn-primary px-6">{UI.tryFree[lang]}</a>
                  <a href={href(lang, b.slug)} className="btn-ghost px-4">{UI.readMore[lang]} →</a>
                </div>
              </div>
              <Shot img={b.img} alt={b.title[lang]} />
            </div>
          ))}
        </div>
      </section>

      <Marquee items={T.partners[lang]} />
      <p className="py-6 text-center">
        <a href={href(lang, "integrations")} className="text-sm font-semibold underline underline-offset-4">{T.partnersLink[lang]}</a>
      </p>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">{T.faqTitle[lang]}</h2>
        <div className="mt-8">
          <Faq lang={lang} items={HOME_FAQ} />
        </div>
      </section>

      <CtaBanner lang={lang} title={T.ready[lang]} />
    </main>
  );
}
