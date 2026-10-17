import { BookOpen, Cpu, Download, FileSpreadsheet, Laptop, Printer, Receipt, Smartphone, Tablet, Thermometer, Wifi } from "lucide-react";
import { APP } from "../config";
import { CHANGELOG, FAQ, GUIDES, HELP, POSTS, type Block, type Post } from "../content/resources";
import { UI, asset, href, type L, type Lang } from "../i18n";
import { CtaBanner, Faq, MoreArticles, PageHero, PostCard, Shot, formatDate } from "../ui";

export const RESOURCE_TITLES = {
  blog: { en: "Tips, tutorials, news…", fr: "Conseils, tutoriels, actualités…" },
  guides: UI.guides,
  faq: UI.faq,
  integrations: UI.integrations,
  equipment: UI.equipment,
  changelog: UI.newFeatures,
  developers: { en: "Developer API", fr: "API développeurs" },
  help: UI.help,
} satisfies Record<string, L>;

function Blocks({ lang, blocks }: { lang: Lang; blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <div key={i} className="mt-8">
          {b.h && <h2 className="text-2xl font-bold tracking-tight">{b.h[lang]}</h2>}
          {b.p && <p className="mt-3 text-lg leading-relaxed text-ink/80">{b.p[lang]}</p>}
          {b.list && (
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-lg text-ink/80">
              {b.list.map((l) => <li key={l.en}>{l[lang]}</li>)}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export function BlogPage({ lang }: { lang: Lang }) {
  return (
    <main>
      <PageHero lang={lang} title={RESOURCE_TITLES.blog[lang]} buttons={false} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {POSTS.map((p) => <PostCard key={p.slug} lang={lang} post={p} />)}
      </section>
    </main>
  );
}

export function PostPage({ lang, post }: { lang: Lang; post: Post }) {
  return (
    <main>
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <a href={href(lang, "blog")} className="text-sm font-semibold text-muted hover:text-ink">← {UI.blog[lang]}</a>
        <p className="mt-6 text-sm text-muted">{formatDate(lang, post.date)}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{post.title[lang]}</h1>
        <p className="mt-4 text-xl text-muted">{post.excerpt[lang]}</p>
        <Shot img={post.img} alt="" className="mt-10" />
        <Blocks lang={lang} blocks={post.body} />
      </article>
      <CtaBanner lang={lang} title={UI.tryFree[lang]} />
      <MoreArticles lang={lang} except={post.slug} />
    </main>
  );
}

export function GuidesPage({ lang }: { lang: Lang }) {
  const T = {
    text: { en: "Free guides to download and print.", fr: "Des guides gratuits à télécharger et imprimer." },
    download: { en: "Download the PDF", fr: "Télécharger le PDF" },
  };
  return (
    <main>
      <PageHero lang={lang} title={UI.guides[lang]} text={T.text[lang]} buttons={false} />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
        {GUIDES.map((g) => (
          <div key={g.slug} className="flex flex-col rounded-2xl border border-line p-6">
            <BookOpen className="size-6" />
            <h2 className="mt-4 text-xl font-semibold">{g.title[lang]}</h2>
            <p className="mt-2 flex-1 text-muted">{g.text[lang]}</p>
            <a href={asset(`${g.slug}-${lang}.pdf`)} download className="btn-primary mt-6 w-fit px-5"><Download className="size-4" /> {T.download[lang]}</a>
          </div>
        ))}
      </section>
    </main>
  );
}

/** The printable document behind each guide (turned into a PDF at build time). */
export function GuideDocument({ lang, slug }: { lang: Lang; slug: string }) {
  const g = GUIDES.find((x) => x.slug === slug)!;
  return (
    <article style={{ fontFamily: "-apple-system, Helvetica, Arial, sans-serif", color: "#0a0a0a", margin: 40 }}>
      <p style={{ fontWeight: 700 }}>Cuisine.AI</p>
      <h1 style={{ fontSize: 28, margin: "16px 0 8px" }}>{g.title[lang]}</h1>
      <p style={{ color: "#6b6b6b" }}>{g.text[lang]}</p>
      {g.sections.map((b, i) => (
        <section key={i} style={{ marginTop: 24 }}>
          {b.h && <h2 style={{ fontSize: 18, margin: "0 0 6px" }}>{b.h[lang]}</h2>}
          {b.p && <p style={{ margin: 0, lineHeight: 1.5 }}>{b.p[lang]}</p>}
          {b.list && (
            <ul style={{ margin: 0, lineHeight: 1.9, listStyle: "none", padding: 0 }}>
              {b.list.map((l) => <li key={l.en}>☐ {l[lang]}</li>)}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}

export function FaqPage({ lang }: { lang: Lang }) {
  const T = {
    still: { en: "Still have questions?", fr: "Vous avez encore des questions ?" },
    stillText: { en: "Don't hesitate to get in touch.", fr: "N'hésitez plus et prenez contact avec nous." },
    ready: { en: "Ready to start?", fr: "Vous êtes fin prêt(e) ?" },
  };
  return (
    <main>
      <PageHero lang={lang} title={UI.faq[lang]} buttons={false} />
      <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        {FAQ.map((g) => (
          <section key={g.group.en}>
            <h2 className="mb-4 text-2xl font-bold">{g.group[lang]}</h2>
            <Faq lang={lang} items={g.items} numbered />
          </section>
        ))}
        <div className="rounded-2xl bg-canvas p-8 text-center">
          <p className="text-xl font-semibold">{T.still[lang]}</p>
          <p className="mt-1 text-muted">{T.stillText[lang]}</p>
          <a href={href(lang, "contact")} className="btn-primary mt-5 px-6">{UI.contact[lang]}</a>
        </div>
      </div>
      <CtaBanner lang={lang} title={T.ready[lang]} />
    </main>
  );
}

export function IntegrationsPage({ lang }: { lang: Lang }) {
  const yes = { en: "Available", fr: "Disponible" };
  const no = { en: "Not available yet", fr: "Pas encore disponible" };
  const items: { icon: typeof Cpu; title: L; text: L; ok: boolean; link?: string }[] = [
    { icon: Thermometer, title: { en: "Temperature sensors", fr: "Sondes de température" }, text: { en: "Connected probes send their readings to Cuisine.AI with a sensor key.", fr: "Les sondes connectées envoient leurs relevés à Cuisine.AI avec une clé de sonde." }, ok: true, link: "developers" },
    { icon: FileSpreadsheet, title: { en: "CSV export", fr: "Export CSV" }, text: { en: "Every history (invoices, temperatures, stock movements…) exports to CSV for your accountant or spreadsheet.", fr: "Chaque historique (factures, températures, mouvements de stock…) s'exporte en CSV pour votre comptable ou votre tableur." }, ok: true },
    { icon: Printer, title: { en: "Printers", fr: "Imprimantes" }, text: { en: "Labels, allergen tables and reports print from the browser on any printer.", fr: "Étiquettes, tableaux des allergènes et rapports s'impriment depuis le navigateur sur n'importe quelle imprimante." }, ok: true, link: "equipment" },
    { icon: Receipt, title: { en: "Cash registers (POS)", fr: "Logiciels de caisse" }, text: { en: "Importing sales from your till is not available yet. Tell us which till you use.", fr: "L'import des ventes de votre caisse n'est pas encore disponible. Dites-nous quelle caisse vous utilisez." }, ok: false, link: "contact" },
    { icon: FileSpreadsheet, title: { en: "Accounting software", fr: "Logiciels comptables" }, text: { en: "No direct connection yet; the CSV export of supplier invoices works today.", fr: "Pas encore de connexion directe ; l'export CSV des factures fournisseurs fonctionne dès aujourd'hui." }, ok: false, link: "contact" },
  ];
  return (
    <main>
      <PageHero lang={lang} title={UI.integrations[lang]} text={{ en: "What Cuisine.AI connects to today, and what is coming.", fr: "Ce à quoi Cuisine.AI se connecte aujourd'hui, et ce qui arrive." }[lang]} buttons={false} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title.en} className="flex flex-col rounded-2xl border border-line p-6">
            <div className="flex items-center justify-between">
              <i.icon className="size-6" />
              <span className={`badge ${i.ok ? "bg-ink text-white" : "bg-canvas text-muted"}`}>{(i.ok ? yes : no)[lang]}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold">{i.title[lang]}</h2>
            <p className="mt-2 flex-1 text-sm text-muted">{i.text[lang]}</p>
            {i.link && <a href={href(lang, i.link)} className="mt-4 text-sm font-semibold underline underline-offset-4">{UI.readMore[lang]} →</a>}
          </div>
        ))}
      </section>
    </main>
  );
}

export function EquipmentPage({ lang }: { lang: Lang }) {
  const items: { icon: typeof Cpu; title: L; text: L }[] = [
    { icon: Tablet, title: { en: "Tablet", fr: "Tablette" }, text: { en: "The most practical in the kitchen. Any recent iPad or Android tablet with a browser and a camera.", fr: "Le plus pratique en cuisine. Tout iPad ou tablette Android récente avec un navigateur et un appareil photo." } },
    { icon: Smartphone, title: { en: "Phone", fr: "Téléphone" }, text: { en: "For deliveries, labels and invoice photos on the move. iPhone or Android.", fr: "Pour les livraisons, les étiquettes et les photos de factures en mouvement. iPhone ou Android." } },
    { icon: Laptop, title: { en: "Computer", fr: "Ordinateur" }, text: { en: "For costs, reports and settings in the office. Any recent browser.", fr: "Pour les coûts, les rapports et les réglages au bureau. Tout navigateur récent." } },
    { icon: Printer, title: { en: "Printer", fr: "Imprimante" }, text: { en: "Batch labels, allergen tables and inspection reports print on any printer connected to your device.", fr: "Étiquettes de production, tableaux des allergènes et rapports s'impriment sur toute imprimante reliée à votre appareil." } },
    { icon: Wifi, title: { en: "Wi-Fi", fr: "Wi-Fi" }, text: { en: "Cuisine.AI works online: make sure the Wi-Fi reaches the kitchen, the cold room and the delivery door.", fr: "Cuisine.AI fonctionne en ligne : vérifiez que le Wi-Fi atteint la cuisine, la chambre froide et la porte de livraison." } },
    { icon: Thermometer, title: { en: "Temperature probes", fr: "Sondes de température" }, text: { en: "Any connected probe or gateway that can send a web request (HTTPS + JSON).", fr: "Toute sonde ou passerelle connectée capable d'envoyer une requête web (HTTPS + JSON)." } },
  ];
  return (
    <main>
      <PageHero lang={lang} title={UI.equipment[lang]} text={{ en: "Cuisine.AI runs in the browser: no special hardware needed.", fr: "Cuisine.AI fonctionne dans le navigateur : aucun matériel spécial n'est nécessaire." }[lang]} buttons={false} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title.en} className="rounded-2xl border border-line p-6">
            <i.icon className="size-6" />
            <h2 className="mt-4 text-lg font-semibold">{i.title[lang]}</h2>
            <p className="mt-2 text-sm text-muted">{i.text[lang]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export function ChangelogPage({ lang }: { lang: Lang }) {
  return (
    <main>
      <PageHero lang={lang} title={UI.newFeatures[lang]} text={UI.newFeaturesHint[lang]} buttons={false} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="space-y-10 border-l-2 border-line pl-8">
          {CHANGELOG.map((c) => (
            <li key={c.date} className="relative">
              <span className="absolute top-1.5 -left-[2.4rem] size-3.5 rounded-full border-2 border-white bg-ink" />
              <p className="text-sm text-muted">{formatDate(lang, c.date)}</p>
              <h2 className="mt-1 text-xl font-semibold">{c.title[lang]}</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink/80">
                {c.items.map((i) => <li key={i.en}>{i[lang]}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export function DevelopersPage({ lang }: { lang: Lang }) {
  const T = {
    text: {
      en: "Connect temperature sensors and other systems to Cuisine.AI. Here is everything you need to send readings.",
      fr: "Connectez des sondes de température et d'autres systèmes à Cuisine.AI. Voici tout ce qu'il faut pour envoyer des relevés.",
    },
    key: { en: "1. Get the sensor key", fr: "1. Récupérez la clé de sonde" },
    keyText: {
      en: "In Cuisine.AI, open Settings → Account (admin PIN required) and create the sensor key of your restaurant. Keep it secret: it allows adding readings.",
      fr: "Dans Cuisine.AI, ouvrez Settings → Account (code administrateur requis) et créez la clé de sonde de votre restaurant. Gardez-la secrète : elle permet d'ajouter des relevés.",
    },
    send: { en: "2. Send readings", fr: "2. Envoyez les relevés" },
    sendText: {
      en: "POST a JSON body to the endpoint below. Name the equipment exactly as in Cuisine.AI (or use its id). Up to 50 readings per request.",
      fr: "Envoyez un corps JSON en POST à l'adresse ci-dessous. Nommez l'équipement exactement comme dans Cuisine.AI (ou utilisez son identifiant). Jusqu'à 50 relevés par requête.",
    },
    reply: { en: "3. Responses", fr: "3. Réponses" },
    codes: [
      ["201", { en: "Saved. The body lists each reading and whether it is in range.", fr: "Enregistré. Le corps liste chaque relevé et s'il est dans la norme." }],
      ["400", { en: "Invalid body or unknown equipment name.", fr: "Corps invalide ou équipement inconnu." }],
      ["401", { en: "Missing or invalid sensor key.", fr: "Clé de sonde absente ou invalide." }],
      ["429", { en: "Too many invalid keys from this address: try again later.", fr: "Trop de clés invalides depuis cette adresse : réessayez plus tard." }],
    ] as [string, L][],
  };
  const curl = `curl -X POST ${APP}/api/v1/temperatures \\
  -H "Authorization: Bearer <your sensor key>" \\
  -H "Content-Type: application/json" \\
  -d '{"readings":[{"equipment":"Cold room","value":3.2},{"equipment":"Chest freezer","value":-19}]}'`;
  const response = `{ "saved": [
  { "equipment": "Cold room", "value": 3.2, "in_range": true },
  { "equipment": "Chest freezer", "value": -19, "in_range": true }
] }`;
  return (
    <main>
      <PageHero lang={lang} eyebrow={UI.developers[lang]} title={RESOURCE_TITLES.developers[lang]} text={T.text[lang]} buttons={false} />
      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <div>
          <h2 className="text-2xl font-bold">{T.key[lang]}</h2>
          <p className="mt-3 text-muted">{T.keyText[lang]}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{T.send[lang]}</h2>
          <p className="mt-3 text-muted">{T.sendText[lang]}</p>
          <p className="mt-4 rounded-xl bg-canvas px-4 py-3 font-mono text-sm"><b>POST</b> {APP}/api/v1/temperatures</p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-ink p-5 text-xs leading-relaxed text-white">{curl}</pre>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{T.reply[lang]}</h2>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-canvas p-5 text-xs leading-relaxed">{response}</pre>
          <table className="mt-6 w-full text-left text-sm">
            <tbody className="divide-y divide-line border-y border-line">
              {T.codes.map(([code, text]) => (
                <tr key={code}><td className="w-20 py-3 font-mono font-semibold">{code}</td><td className="py-3 text-muted">{text[lang]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export function HelpPage({ lang }: { lang: Lang }) {
  const T = {
    text: { en: "Step-by-step help for everyday tasks.", fr: "L'aide pas à pas pour les tâches du quotidien." },
    more: { en: "Need more help?", fr: "Besoin de plus d'aide ?" },
  };
  return (
    <main>
      <PageHero lang={lang} title={UI.help[lang]} text={T.text[lang]} buttons={false} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {HELP.map((h) => (
          <div key={h.title.en} className="rounded-2xl border border-line p-6">
            <h2 className="text-lg font-semibold">{h.title[lang]}</h2>
            <ol className="mt-4 space-y-3 text-sm">
              {h.steps.map((s, i) => (
                <li key={s.en} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-white">{i + 1}</span>
                  <span className="text-ink/80">{s[lang]}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6">
        <p className="text-xl font-semibold">{T.more[lang]}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href={href(lang, "guides")} className="btn-outline px-5">{UI.guides[lang]}</a>
          <a href={href(lang, "faq")} className="btn-outline px-5">{UI.faq[lang]}</a>
          <a href={href(lang, "contact")} className="btn-primary px-5">{UI.contact[lang]}</a>
        </div>
      </section>
    </main>
  );
}
