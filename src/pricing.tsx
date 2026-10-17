import { APP } from "./config";
import { OPTIONS, PLANS } from "./plans";

const eur = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export default function PricingPage() {
  return (
    <main className="bg-canvas px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Plans adapted to your needs!</h1>
          <p className="mt-2 text-muted">14-day free trial.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className="relative flex flex-col border-t-2 border-ink bg-white px-6 pt-8 pb-6 text-center">
              {p.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ink px-3 py-1 text-xs font-semibold text-white">{p.badge}</span>
              )}
              <h2 className="border-b border-line pb-4 text-2xl tracking-wide uppercase">{p.name}</h2>
              <p className="mt-4 font-medium">{p.users}</p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="mt-8">
                <span className="text-4xl font-semibold">{p.annual}€</span>
                <span className="text-sm text-muted">/month/site</span>
              </p>
              <p className="mt-3 text-sm">billed {eur(p.annual * 12)} /year</p>
              <a href={`${APP}/signup`} className="btn-primary mt-4 w-full rounded-none">Start free trial</a>
              <div className="mt-5 space-y-1 text-left text-xs text-muted">
                <p>Annual commitment: billed {eur(p.annual * 12)} /year - SAVE {eur((p.monthly - p.annual) * 12)}</p>
                <p>Monthly commitment: billed {eur(p.monthly)} /month</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a href="cuisine-ai-plan-comparison.pdf" download className="text-sm font-semibold tracking-wide uppercase underline underline-offset-4">
            Download the full comparison table of the plans
          </a>
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OPTIONS.map((o) => (
            <div key={o.name} className="bg-white p-6 text-center">
              <h2 className="text-lg font-semibold">{o.name}</h2>
              <p className="mt-2 text-3xl font-semibold">{o.price}€<span className="text-sm font-normal text-muted">/month</span></p>
              <p className="mt-3 text-sm text-muted">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
