import { AlertTriangle, Camera, Check, ScanText, Sparkles, TrendingUp } from "lucide-react";

/** Illustrations of the app built in HTML, so they stay sharp on every screen. */

const LINES = [
  { label: "Sancerre blanc 75cl", match: "Sancerre white 75cl", qty: "12 bottles", price: "14,80 €", rise: "+5.7 %" },
  { label: "Aperol 70cl x6", match: "Aperol", qty: "4.2 L", price: "15,50 €/L" },
  { label: "Prosecco DOC 6x75cl", match: "Prosecco DOC", qty: "4.5 L", price: "9,60 €/L" },
  { label: "Gin London Dry 2x70cl", match: "London dry gin", qty: "1.4 L", price: "31,40 €/L", rise: "+4.2 %" },
  { label: "Limoncello artisanal", match: "New product", qty: "6 bottles", price: "12,00 €", check: true },
];

export function PaperInvoice({ className = "" }: { className?: string }) {
  return (
    <div className={`w-56 rounded-md bg-[#f6f3ec] p-4 font-mono text-[9px] leading-relaxed text-stone-700 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] ${className}`} aria-hidden>
      <p className="text-[11px] font-bold tracking-wide text-stone-900">CAVE SAINT-PAUL</p>
      <p>12 rue des Vignes, Paris 4e</p>
      <div className="my-2 flex justify-between border-y border-stone-300 py-1">
        <span>FACTURE FA-2026-0412</span>
        <span>02/10/2026</span>
      </div>
      {["Sancerre blanc 75cl  2 cart x6", "Aperol 70cl x6", "Prosecco DOC 6x75cl", "Gin London Dry 2x70cl", "Limoncello artisanal 6", "Consigne fût", "Frais de livraison"].map((l) => (
        <p key={l} className="flex justify-between gap-2">
          <span className="truncate">{l}</span>
          <span className="text-stone-400">····</span>
        </p>
      ))}
      <p className="mt-2 border-t border-stone-300 pt-1 text-right font-bold text-stone-900">TOTAL HT 447,90 €</p>
    </div>
  );
}

export function InvoiceReviewMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`card w-full max-w-md overflow-hidden ${className}`} aria-hidden>
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="icon-chip size-9 bg-brand-500/15 text-brand-400"><ScanText className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Cave Saint-Paul · FA-2026-0412</p>
          <p className="text-xs text-muted">Read by AI · 8 lines · 447,90 € excl. VAT</p>
        </div>
        <span className="badge bg-brand-500/15 text-brand-700"><Sparkles className="size-3" /> AI</span>
      </div>
      <ul className="divide-y divide-line">
        {LINES.map((l) => (
          <li key={l.label} className={`flex items-center gap-3 px-4 py-2.5 ${l.check ? "bg-saffron-500/[0.06]" : ""}`}>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium">{l.label}</p>
              <p className="truncate text-[11px] text-muted">
                → {l.match}
                {l.check && <span className="ml-1.5 font-semibold text-saffron-400">· check this line</span>}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-semibold">{l.qty}</p>
              <p className="text-[11px] text-muted">
                {l.price}
                {l.rise && <span className="ml-1 font-semibold text-red-400">{l.rise}</span>}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-line p-3">
        <div className="btn-primary pointer-events-none w-full"><Check className="size-4" /> Confirm &amp; update 5 products</div>
      </div>
    </div>
  );
}

export function FlowSteps() {
  const steps = [
    { icon: Camera, title: "Snap", text: "Photo, scan or the PDF the supplier emailed. Several invoices in one file are fine." },
    { icon: Sparkles, title: "AI reads", text: "Every line, quantity, unit and price, matched to your own products." },
    { icon: Check, title: "You confirm", text: "Unsure lines are highlighted. One tap and stock, prices and costs update." },
  ];
  return (
    <ol className="grid gap-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card relative flex gap-4 p-5">
          <span className="absolute top-3 right-4 font-display text-4xl text-white/10">{i + 1}</span>
          <span className="icon-chip bg-brand-500/15 text-brand-400"><s.icon className="size-5" /></span>
          <div className="pr-8">
            <p className="font-semibold">{s.title}</p>
            <p className="mt-1 text-sm text-muted">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DashboardMockup() {
  return (
    <div className="card overflow-hidden p-4" aria-hidden>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Today · Bistro du Canal</p>
        <span className="badge bg-brand-500/15 text-brand-700">Food safety 96 / 100</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Stock value", "1 505 €"],
          ["Tasks done", "7 / 8"],
          ["Fridges OK", "6 / 6"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line bg-canvas p-3">
            <p className="text-[10px] tracking-wide text-muted uppercase">{k}</p>
            <p className="mt-1 font-display text-lg">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <p className="flex items-center gap-2 rounded-xl bg-saffron-500/10 px-3 py-2 text-xs text-amber-800">
          <AlertTriangle className="size-3.5 shrink-0" /> Mussels run out today · 2 products below minimum
        </p>
        <p className="flex items-center gap-2 rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-700">
          <TrendingUp className="size-3.5 shrink-0" /> Sancerre price up 5.7 % · Tartare cost ratio now 31 %
        </p>
      </div>
    </div>
  );
}
