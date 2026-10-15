import {
  ArrowRight, BookOpenCheck, Calculator, Camera, ChefHat, ClipboardCheck, FileText, Fingerprint, KeyRound,
  Lock, Mic, Package, ScrollText, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Tag, Thermometer, Truck, Users, Wheat,
} from "lucide-react";
import { DashboardMockup, FlowSteps, InvoiceReviewMockup, PaperInvoice } from "./mockups";
import { APP } from "./config";

const PAINS = [
  { icon: ClipboardCheck, title: "The inspector walks in", text: "Temperature sheets half filled, labels lost, the cleaning binder somewhere in the office." },
  { icon: FileText, title: "Sunday night invoices", text: "An hour typing supplier invoices line by line, after a full service." },
  { icon: Calculator, title: "Prices move, menus don't", text: "The supplier raised the price three weeks ago. Your dish costs never noticed." },
  { icon: Package, title: "Out of stock mid-service", text: "Nobody saw the mussels were running low until table 12 ordered them." },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    tag: "Food safety & HACCP",
    title: "Ready when the inspector is.",
    items: [
      [Thermometer, "Fridge and freezer temperatures, typed, said out loud, or sent by sensors"],
      [BookOpenCheck, "Daily cleaning and opening checklists for each team"],
      [Tag, "Traceability: photo of the label, batch and use-by read for you"],
      [Truck, "Delivery checks with temperatures and refused items"],
      [ScrollText, "Inspection report as a PDF in one click"],
    ],
  },
  {
    icon: Package,
    tag: "Stock & ordering",
    title: "Know what you have, order what you need.",
    items: [
      [Camera, "Invoices and delivery notes update the stock themselves"],
      [ShoppingCart, "Smart order fills the cart from how fast you use each product"],
      [Package, "Inventory count, or a photo of the shelf counted by AI"],
      [ChefHat, "Production batches deduct ingredients and print labels"],
      [Users, "One order per supplier, ready to send"],
    ],
  },
  {
    icon: Calculator,
    tag: "Costs & margins",
    title: "Real food cost, without a spreadsheet.",
    items: [
      [Calculator, "Cost of every dish and cocktail from your latest invoice prices"],
      [ArrowRight, "Price rise alerts the moment an invoice is read"],
      [Wheat, "Allergen table for the whole menu, built from the recipes"],
      [FileText, "History of every record, exportable"],
      [ShieldCheck, "Use-by dates and waste tracked"],
    ],
  },
  {
    icon: Sparkles,
    tag: "Your AI assistant",
    title: "Ask your restaurant anything.",
    items: [
      [Sparkles, "“How much did we spend at the butcher this month?”"],
      [Sparkles, "“Which dishes lost margin since the price rise?”"],
      [Sparkles, "“What should I order for the weekend?”"],
      [Sparkles, "Answers from your own records, in your language"],
      [Sparkles, "The dashboard flags what needs attention today"],
    ],
  },
] as const;

const COMPARE = [
  ["Recording a supplier invoice", "Type every line", "Take a photo"],
  ["Fridge temperatures", "Write them in a binder", "Say them out loud, or let sensors log them"],
  ["Stock count", "Count and type each product", "Photo of the shelf"],
  ["Deciding what to order", "Guess from memory", "Smart order fills the cart"],
  ["Updating dish costs", "Edit recipe sheets by hand", "Updated from every invoice"],
  ["Inspection day", "Dig through binders", "One-click PDF report"],
];

const SECURITY = [
  { icon: Lock, title: "Encrypted connection", text: "Every page is served over HTTPS." },
  { icon: Fingerprint, title: "Passwords never stored", text: "Passwords and PINs are hashed; sessions can be revoked." },
  { icon: KeyRound, title: "Admin PIN", text: "Settings, prices and team are locked behind a PIN that times out." },
  { icon: ScrollText, title: "Audit log", text: "Sign-ins and sensitive changes are recorded and visible to you." },
];

const FAQ = [
  ["Do I need to install anything?", "No. Cuisine.AI works in the browser on an iPad, a phone or a computer. You can add it to the home screen so it opens like an app."],
  ["Does every employee need an account?", "No. The restaurant has one account. On the shared tablet, staff pick their name when they record something, so you know who did what. Settings stay behind the admin PIN."],
  ["What if the AI misreads an invoice?", "Nothing is saved until someone confirms. You see every line before it reaches the stock, and lines the AI is unsure about are highlighted so they get checked first."],
  ["Can it handle credit notes, discounts and packs?", "Yes. Credit notes take stock back out, discount lines are counted, and packs are converted: “2 cartons x 6” becomes 12 bottles, “6 x 75 cl” becomes 4.5 L."],
  ["Can I connect my temperature sensors?", "Yes. Each restaurant gets an API key so connected probes can send readings automatically."],
  ["How long does it take to set up?", "Create the account, add your fridges and team, then scan your first invoices: products are created from them, so you don't have to type a catalogue."],
];

export default function WelcomePage() {
  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-28">
          <div className="animate-rise">
            <span className="badge border border-brand-300/50 bg-brand-500/10 text-brand-700">
              <Sparkles className="size-3" /> For restaurants, bars and cafés
            </span>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-tight sm:text-6xl">
              Run your kitchen,
              <br />
              <span className="text-gradient">not your paperwork.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Food safety records, stock, supplier orders and invoices in one app. Take a photo of an invoice and the AI
              updates your stock, prices and food costs. Your team cooks; Cuisine.AI does the typing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`${APP}/signup`} className="btn-primary px-6 text-base">Create your free account <ArrowRight className="size-4" /></a>
              <a href="#invoices" className="btn-outline px-6 text-base">See the AI in action</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["No installation", "Works on iPad, phone and computer", "Set up in an afternoon"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand-400" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <PaperInvoice className="absolute -top-8 -left-4 z-0 hidden -rotate-6 sm:block lg:left-2" />
            <InvoiceReviewMockup className="relative z-10 ml-auto sm:mt-16" />
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">Sound familiar?</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">The work nobody opened a restaurant for.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PAINS.map((p) => (
              <div key={p.title} className="card p-5">
                <span className="icon-chip bg-saffron-500/10 text-saffron-400"><p.icon className="size-5" /></span>
                <p className="mt-4 font-semibold">{p.title}</p>
                <p className="mt-1.5 text-sm text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI invoices */}
      <section id="invoices" className="scroll-mt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">AI invoice capture</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Take a photo. The invoice types itself.</h2>
            <p className="mt-4 text-muted">
              Cuisine.AI reads supplier invoices the way a careful manager would: it matches each line to your products,
              converts packs into your units, spots price rises and flags anything it isn&apos;t sure about.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                "Photos, scans and emailed PDFs",
                "Several invoices in one PDF",
                "Credit notes and discounts",
                "Packs converted to your units",
                "Learns your supplier’s wording",
                "Duplicate invoices caught",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-brand-500/15 text-brand-400">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <FlowSteps />
        </div>
      </section>

      {/* Pillars */}
      <section id="features" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">Everything in one place</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Four jobs. One app. Connected.</h2>
            <p className="mt-4 text-muted">
              An invoice updates the stock, the stock drives the order, the prices feed your dish costs, and the
              inspector&apos;s report builds itself from what your team records every day.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.tag} className="card card-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="icon-chip bg-brand-500/15 text-brand-400"><p.icon className="size-5" /></span>
                  <span className="text-sm font-semibold text-brand-700">{p.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.items.map(([Icon, text]) => (
                    <li key={text} className="flex gap-3 text-sm text-ink/85">
                      <Icon className="mt-0.5 size-4 shrink-0 text-muted" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Less typing */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">Less typing, everywhere</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">The same jobs, without the paperwork.</h2>
            <div className="card mt-8 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-[11px] tracking-wider text-muted uppercase">
                    <th className="px-4 py-3 font-semibold">Task</th>
                    <th className="px-4 py-3 font-semibold">The usual way</th>
                    <th className="px-4 py-3 font-semibold text-brand-400">With Cuisine.AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {COMPARE.map(([task, before, after]) => (
                    <tr key={task}>
                      <td className="px-4 py-3 font-medium">{task}</td>
                      <td className="px-4 py-3 text-muted">{before}</td>
                      <td className="px-4 py-3 text-brand-700">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:pt-24">
            <DashboardMockup />
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Mic className="size-4 text-brand-400" /> &ldquo;Cold room 3, freezer minus 19&rdquo; is a complete temperature check.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">How it works</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Set up today. Your team uses it tomorrow.</h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Create your restaurant", "Name, fridges and freezers, your team and an admin PIN. About ten minutes."],
              ["Scan your invoices", "Your products, suppliers and prices are created from them. No catalogue to type."],
              ["Hand over the tablet", "Staff pick their name and tap. Checklists, temperatures and deliveries take seconds."],
            ].map(([title, text], i) => (
              <li key={title} className="relative">
                <span className="font-display text-6xl font-semibold text-gradient">{i + 1}</span>
                <p className="mt-3 text-lg font-semibold">{title}</p>
                <p className="mt-1.5 text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Security */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wider text-brand-400 uppercase">Security</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Your records, protected.</h2>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted"><Smartphone className="size-4" /> Works on any device, nothing stored on it.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECURITY.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line p-5">
                <s.icon className="size-5 text-brand-400" />
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">Questions</h2>
          <div className="mt-10 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-300/40 bg-gradient-to-br from-brand-200/60 via-surface to-surface px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">Give your team their evenings back.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">Create your restaurant, scan your first invoice and see your stock fill itself in.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`${APP}/signup`} className="btn-primary px-6 text-base">Create your free account <ArrowRight className="size-4" /></a>
              <a href={`${APP}/login`} className="btn-outline px-6 text-base">Log in</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
