import { APP } from "../config";
import { asset, href, type Lang } from "../i18n";
import { OPTIONS, PLANS } from "../plans";

const T = {
  title: { en: "Plans adapted to your needs!", fr: "Des offres adaptées à vos besoins !" },
  trial: { en: "14-day free trial.", fr: "Essai gratuit pendant 14 jours." },
  perSite: { en: "/month/site", fr: "/mois/site" },
  billed: { en: "billed", fr: "facturé" },
  year: { en: "/year", fr: "/an" },
  month: { en: "/month", fr: "/mois" },
  cta: { en: "Choose this plan", fr: "Choisir cette offre" },
  orTrial: { en: "or start the 14-day free trial", fr: "ou commencer l'essai gratuit de 14 jours" },
  annual: { en: "Annual commitment: billed", fr: "Engagement annuel : facturé" },
  save: { en: "SAVE", fr: "ÉCONOMISEZ" },
  monthly: { en: "Monthly commitment: billed", fr: "Engagement mensuel : facturé" },
  download: { en: "Download the full comparison table of the plans", fr: "Télécharger le tableau comparatif complet des forfaits" },
  discover: { en: "Discover", fr: "Découvrir" },
};

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export default function PricingPage({ lang }: { lang: Lang }) {
  return (
    <main className="bg-canvas px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{T.title[lang]}</h1>
          <p className="mt-2 text-muted">{T.trial[lang]}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name.en} className="relative flex flex-col overflow-hidden border-t-2 border-ink bg-white px-6 pt-8 pb-6 text-center">
              {p.badge && (
                <span className="absolute top-5 -right-12 w-44 rotate-45 bg-ink py-1 text-center text-xs font-semibold text-white">{p.badge[lang]}</span>
              )}
              <h2 className="border-b border-line pb-4 text-2xl tracking-wide uppercase">{p.name[lang]}</h2>
              <p className="mt-4 font-medium">{p.users[lang]}</p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f.en}>{f[lang]}</li>
                ))}
              </ul>
              <p className="mt-8">
                <span className="text-4xl font-semibold">{p.annual}€</span>
                <span className="text-sm text-muted">{T.perSite[lang]}</span>
              </p>
              <p className="mt-3 text-sm">{T.billed[lang]} {eur(p.annual * 12)} {T.year[lang]}</p>
              <a href={`${APP}/billing/start?plan=${p.id}&period=year`} className="btn-primary mt-4 w-full rounded-none">{T.cta[lang]}</a>
              <a href={`${APP}/signup`} className="mt-2 text-xs text-muted underline underline-offset-2 hover:text-ink">{T.orTrial[lang]}</a>
              <div className="mt-5 space-y-1 text-left text-xs text-muted">
                <a href={`${APP}/billing/start?plan=${p.id}&period=year`} className="block hover:text-ink hover:underline">{T.annual[lang]} {eur(p.annual * 12)} {T.year[lang]} - {T.save[lang]} {eur((p.monthly - p.annual) * 12)}</a>
                <a href={`${APP}/billing/start?plan=${p.id}&period=month`} className="block hover:text-ink hover:underline">{T.monthly[lang]} {eur(p.monthly)} {T.month[lang]}</a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a href={asset(`cuisine-ai-plan-comparison-${lang}.pdf`)} download className="text-sm font-semibold tracking-wide uppercase underline underline-offset-4">
            {T.download[lang]}
          </a>
        </p>

        <div className="mx-auto mt-10 grid max-w-xl gap-6">
          {OPTIONS.map((o) => (
            <div key={o.name.en} className="bg-white p-6 text-center">
              <h2 className="text-lg font-semibold">{o.name[lang]}</h2>
              <p className="mt-2 text-3xl font-semibold">{o.price}€<span className="text-sm font-normal text-muted">{T.month[lang]}</span></p>
              <p className="mt-3 text-sm text-muted">{o.text[lang]}</p>
              <a href={href(lang, o.slug)} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">{T.discover[lang]} →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
