import { ArrowRight, Check } from "lucide-react";
import { APP } from "./config";
import { POSTS, type Post } from "./content/resources";
import { UI, asset, href, type L, type Lang } from "./i18n";

/** A real screenshot of the app in a simple frame. */
export function Shot({ img, alt, className = "" }: { img: string; alt: string; className?: string }) {
  const phone = img.startsWith("mobile-");
  return (
    <div className={`overflow-hidden border border-line bg-white shadow-[0_20px_50px_-25px_rgb(0_0_0/0.35)] ${phone ? "mx-auto w-full max-w-[17rem] rounded-[2rem] border-[6px] border-ink" : "rounded-2xl"} ${className}`}>
      <img src={asset(`img/${img}.jpg`)} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

export function PageHero({ lang, title, text, eyebrow, buttons = true }: { lang: Lang; title: string; text?: string; eyebrow?: string; buttons?: boolean }) {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
        {eyebrow && <p className="text-sm font-semibold tracking-wider text-muted uppercase">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{text}</p>}
        {buttons && <Buttons lang={lang} className="mt-8 justify-center" />}
      </div>
    </section>
  );
}

export function Buttons({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={href(lang, "contact")} className="btn-primary px-6">{UI.requestDemo[lang]}</a>
      <a href={`${APP}/signup`} className="btn-outline px-6">{UI.freeTrial[lang]}</a>
    </div>
  );
}

export function Checks({ items, lang }: { items: L[]; lang: Lang }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((i) => (
        <li key={i.en} className="flex gap-3">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-white"><Check className="size-3" /></span>
          {i[lang]}
        </li>
      ))}
    </ul>
  );
}

export function CtaBanner({ lang, title }: { lang: Lang; title: string }) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-3 text-white/70">{UI.trial14[lang]}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`${APP}/signup`} className="btn bg-white px-6 text-ink hover:bg-white/90">{UI.freeTrial[lang]} <ArrowRight className="size-4" /></a>
          <a href={href(lang, "contact")} className="btn border border-white/30 px-6 text-white hover:bg-white/10">{UI.requestDemo[lang]}</a>
        </div>
      </div>
    </section>
  );
}

/** A ribbon of short phrases scrolling sideways, like the reference home page. */
export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y py-4 ${dark ? "border-ink bg-ink text-white" : "border-line bg-white"}`} aria-label={items.join(", ")}>
      <div className="marquee flex w-max gap-8 text-sm font-bold tracking-widest whitespace-nowrap uppercase" aria-hidden>
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-8">{t}<span>•</span></span>
        ))}
      </div>
    </div>
  );
}

export function formatDate(lang: Lang, d: string) {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function PostCard({ lang, post }: { lang: Lang; post: Post }) {
  return (
    <a href={href(lang, post.slug)} className="group block overflow-hidden rounded-2xl border border-line bg-white transition hover:border-ink/40">
      <div className="aspect-[16/10] overflow-hidden border-b border-line bg-canvas">
        <img src={asset(`img/${post.img}.jpg`)} alt="" loading="lazy" className="h-full w-full object-cover object-top transition group-hover:scale-[1.02]" />
      </div>
      <div className="p-5">
        <p className="text-xs text-muted">{formatDate(lang, post.date)}</p>
        <p className="mt-2 font-semibold">{post.title[lang]}</p>
        <p className="mt-2 text-sm text-muted">{post.excerpt[lang]}</p>
        <p className="mt-4 text-sm font-semibold">{UI.readMore[lang]} →</p>
      </div>
    </a>
  );
}

export function MoreArticles({ lang, except }: { lang: Lang; except?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <p className="text-sm font-semibold tracking-wider text-muted uppercase">{UI.wantMore[lang]}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight">{UI.articles[lang]}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {POSTS.filter((p) => p.slug !== except).slice(0, 3).map((p) => (
          <PostCard key={p.slug} lang={lang} post={p} />
        ))}
      </div>
    </section>
  );
}

/** Numbered question/answer list, as on the reference FAQ. */
export function Faq({ lang, items, numbered = false }: { lang: Lang; items: [L, L][]; numbered?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map(([q, a], i) => (
        <details key={q.en} className="group rounded-2xl border border-line bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-4 font-semibold">
            {numbered && <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>}
            <span className="flex-1">{q[lang]}</span>
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45">+</span>
          </summary>
          <p className={`mt-3 text-muted ${numbered ? "pl-9" : ""}`}>{a[lang]}</p>
        </details>
      ))}
    </div>
  );
}
