import { asset, type L, type Lang } from "./i18n";

/** A real screenshot of the app, in a simple browser or phone frame. */
export function Shot({ img, alt, className = "" }: { img: string; alt: string; className?: string }) {
  const phone = img.startsWith("mobile-");
  if (phone) {
    return (
      <div className={`overflow-hidden rounded-[2rem] border-[7px] border-ink bg-white shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)] ${className}`}>
        <img src={asset(`img/${img}.jpg`)} alt={alt} loading="lazy" className="block w-full" />
      </div>
    );
  }
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-35px_rgb(0_0_0/0.45)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-4 py-2.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </div>
      <img src={asset(`img/${img}.jpg`)} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

/** Questions that open on click. */
export function Faq({ lang, items }: { lang: Lang; items: [L, L][] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a]) => (
        <details key={q.en} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-4 text-lg">
            <span className="flex-1">{q[lang]}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-2xl text-muted">{a[lang]}</p>
        </details>
      ))}
    </div>
  );
}
