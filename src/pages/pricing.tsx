import { ArrowRight, Check } from "lucide-react";
import { UI, href, type Lang } from "../i18n";
import { COMPARE, OPTIONS, PLANS } from "../plans";

const T = {
  title: { en: "Simple pricing.", fr: "Des prix simples." },
  text: {
    en: "One price per restaurant, per month. Food safety and HACCP are included in every plan.",
    fr: "Un prix par restaurant et par mois. L'hygiène et le HACCP sont inclus dans chaque offre.",
  },
  perMonth: { en: "/ month", fr: "/ mois" },
  yearly: { en: "billed yearly", fr: "facturé à l'année" },
  orMonthly: { en: "or {n} € month to month", fr: "ou {n} € sans engagement annuel" },
  vat: { en: "Prices per restaurant, excluding VAT.", fr: "Prix par restaurant, hors taxes." },
  compare: { en: "Compare every feature", fr: "Comparer toutes les fonctionnalités" },
  feature: { en: "Feature", fr: "Fonctionnalité" },
};

export default function PricingPage({ lang }: { lang: Lang }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <h1 className="headline text-6xl sm:text-7xl">{T.title[lang]}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{T.text[lang]}</p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PLANS.map((p) => {
          const featured = Boolean(p.badge);
          return (
            <div key={p.id} className={`flex flex-col rounded-3xl border p-7 ${featured ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{p.name[lang]}</h2>
                {p.badge && <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">{p.badge[lang]}</span>}
              </div>
              <p className={`mt-1 text-sm ${featured ? "text-white/60" : "text-muted"}`}>{p.users[lang]}</p>
              <p className="mt-6">
                <span className="headline text-6xl">{p.annual} €</span>
                <span className={`text-sm ${featured ? "text-white/60" : "text-muted"}`}> {T.perMonth[lang]}</span>
              </p>
              <p className={`mt-1 text-xs ${featured ? "text-white/60" : "text-muted"}`}>
                {T.yearly[lang]} · {T.orMonthly[lang].replace("{n}", String(p.monthly))}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f.en} className="flex gap-2.5">
                    <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-white" : "text-ink"}`} /> {f[lang]}
                  </li>
                ))}
              </ul>
              <a
                href={href(lang, "contact")}
                className={`btn mt-8 rounded-full ${featured ? "bg-white text-ink hover:bg-white/90" : "bg-ink text-white hover:bg-ink/85"}`}
              >
                {UI.demo[lang]} <ArrowRight className="size-4" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        {T.vat[lang]}
        {OPTIONS.map((o) => ` ${o.name[lang]}: +${o.price} € ${T.perMonth[lang]}.`)}
      </p>

      <details className="group mt-14 rounded-3xl border border-line [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 font-semibold">
          {T.compare[lang]}
          <span className="grid size-8 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">+</span>
        </summary>
        <div className="overflow-x-auto px-6 pb-6">
          <table className="w-full min-w-[34rem] text-sm">
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="py-3 pr-4 font-semibold">{T.feature[lang]}</th>
                {PLANS.map((p) => (
                  <th key={p.id} className="px-2 py-3 text-center font-semibold">{p.name[lang]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([name, ...cells]) => (
                <tr key={name.en} className="border-b border-line">
                  <td className="py-2.5 pr-4">{name[lang]}</td>
                  {cells.map((c, i) => (
                    <td key={i} className="px-2 py-2.5 text-center text-muted">{c[lang]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </main>
  );
}
