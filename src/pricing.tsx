import { Fragment } from "react";
import { ArrowRight, Check, Minus, ShieldCheck, Sparkles } from "lucide-react";
import { APP } from "./config";
import { ADDONS, COMPARE, PLANS, PRICING_FAQ } from "./plans";

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
const bestSaving = Math.max(...PLANS.map((p) => Math.floor(((p.monthly - p.annual) / p.monthly) * 100)));

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-4 text-ink" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto size-4 text-line" aria-label="Not included" />;
  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="overflow-x-clip">
      {/* The billing switch works without JavaScript: the radio buttons below drive what is shown. */}
      <div className="group">
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center sm:px-6 lg:pt-20">
          <p className="text-sm font-semibold tracking-wider text-muted uppercase">Pricing</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple plans. Food safety included in every one.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            One price per restaurant, your whole team included. Choose how much the AI types for you.
          </p>

          <div className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-line bg-canvas p-1 text-sm font-semibold">
            <input type="radio" name="billing" id="annual" className="peer/annual sr-only" defaultChecked />
            <label htmlFor="annual" className="cursor-pointer rounded-full px-4 py-2 text-muted transition peer-checked/annual:bg-ink peer-checked/annual:text-white">
              Yearly <span className="ml-1 text-xs opacity-80">save up to {bestSaving} %</span>
            </label>
            <input type="radio" name="billing" id="monthly" className="peer/monthly sr-only" />
            <label htmlFor="monthly" className="cursor-pointer rounded-full px-4 py-2 text-muted transition peer-checked/monthly:bg-ink peer-checked/monthly:text-white">
              Monthly
            </label>
          </div>

          <p className="mx-auto mt-5 flex w-fit max-w-full items-start gap-2 rounded-2xl bg-canvas px-4 py-2.5 text-left text-sm">
            <Sparkles className="mt-0.5 size-4 shrink-0" />
            <span>Cuisine.AI is <b>free during the beta</b>, no card needed. These prices apply after the beta.</span>
          </p>
        </section>

        {/* Plans */}
        <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-8 sm:px-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.id} className={`relative flex flex-col rounded-2xl border p-7 ${p.highlight ? "border-ink shadow-[0_0_0_1px_var(--color-ink)]" : "border-line"}`}>
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">Most popular</span>
              )}
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted">{p.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tight group-has-[#monthly:checked]:hidden">{p.annual} €</span>
                <span className="hidden text-5xl font-semibold tracking-tight group-has-[#monthly:checked]:inline">{p.monthly} €</span>
                <span className="text-sm text-muted">/month per site</span>
              </div>
              <p className="mt-1 text-sm text-muted group-has-[#monthly:checked]:hidden">
                Billed {eur(p.annual * 12)} a year · you save {eur((p.monthly - p.annual) * 12)}
              </p>
              <p className="mt-1 hidden text-sm text-muted group-has-[#monthly:checked]:block">Billed monthly · stop any month</p>

              <a href={`${APP}/signup`} className={`mt-6 ${p.highlight ? "btn-primary" : "btn-outline"} w-full`}>
                Start free <ArrowRight className="size-4" />
              </a>

              <div className="mt-6 border-t border-line pt-6">
                <p className="text-sm font-semibold">{p.intro}</p>
                <ul className="mt-4 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>

      <p className="mx-auto max-w-6xl px-4 text-center text-sm text-muted sm:px-6">
        Prices per restaurant and per month, excluding VAT. Several restaurants? Each site has its own plan.
      </p>

      {/* Food safety callout */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center">
          <span className="icon-chip bg-white/10 text-white"><ShieldCheck className="size-5" /></span>
          <div className="flex-1">
            <p className="text-lg font-semibold">HACCP is not an option. It&apos;s included.</p>
            <p className="mt-1 text-sm text-white/70">
              Temperatures, cleaning checklists, traceability, frying oil, delivery checks and the inspection report come with every plan, at no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Add-ons</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {ADDONS.map((a) => (
            <div key={a.name} className="rounded-2xl border border-line p-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold">{a.name}</p>
                <p className="shrink-0"><span className="text-2xl font-semibold">{a.price}</span><span className="text-sm text-muted">{a.per}</span></p>
              </div>
              <p className="mt-2 text-sm text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section id="compare" className="mx-auto mt-20 max-w-6xl scroll-mt-20 px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Compare the plans</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="px-5 py-4 font-semibold">Feature</th>
                {PLANS.map((p) => (
                  <th key={p.id} className="w-36 px-5 py-4 text-center font-semibold">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((g) => (
                <Fragment key={g.group}>
                  <tr className="bg-canvas">
                    <td colSpan={4} className="px-5 py-2.5 text-xs font-semibold tracking-wider text-muted uppercase">{g.group}</td>
                  </tr>
                  {g.rows.map(([label, ...values]) => (
                    <tr key={label} className="border-t border-line">
                      <td className="px-5 py-3">{label}</td>
                      {values.map((v, i) => (
                        <td key={i} className="px-5 py-3 text-center"><Cell value={v} /></td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-20 max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Pricing questions</h2>
        <div className="mt-8 space-y-3">
          {PRICING_FAQ.map(([q, a]) => (
            <details key={q} className="card group/faq p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open/faq:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Try every feature free during the beta.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">No card, no commitment. Scan your first invoice in a few minutes.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`${APP}/signup`} className="btn bg-white px-6 text-base text-ink hover:bg-white/90">Create your free account <ArrowRight className="size-4" /></a>
            <a href="./" className="btn border border-white/30 px-6 text-base text-white hover:bg-white/10">See all features</a>
          </div>
        </div>
      </section>
    </main>
  );
}
