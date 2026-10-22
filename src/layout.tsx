import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { UI, href, type Lang } from "./i18n";

/** The four places a visitor can go: what it does, what it costs, questions, and talking to us. */
const links = (lang: Lang) => [
  { label: UI.features[lang], href: href(lang, "index", "#features") },
  { label: UI.pricing[lang], href: href(lang, "pricing") },
  { label: UI.faq[lang], href: href(lang, "index", "#faq") },
  { label: UI.contact[lang], href: href(lang, "contact") },
];

function LangSwitch({ lang, slug }: { lang: Lang; slug: string }) {
  return (
    <span className="flex items-center gap-1 text-xs font-semibold">
      {(["en", "fr"] as Lang[]).map((l) =>
        l === lang ? (
          <span key={l} className="rounded-full bg-ink px-2 py-1 text-white uppercase">{l}</span>
        ) : (
          <a key={l} href={href(l, slug)} hrefLang={l} className="rounded-full px-2 py-1 text-muted uppercase hover:text-ink">{l}</a>
        ),
      )}
    </span>
  );
}

export default function SiteLayout({ lang, slug, children }: { lang: Lang; slug: string; children: React.ReactNode }) {
  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <a href={href(lang, "index")} aria-label="Cuisine.AI" className="mr-auto shrink-0">
            <Logo />
          </a>
          <ul className="hidden items-center gap-7 text-sm md:flex">
            {links(lang).map((l) => (
              <li key={l.href}><a href={l.href} className="text-muted transition hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
          <div className="hidden sm:block"><LangSwitch lang={lang} slug={slug} /></div>
          <a href={href(lang, "contact")} className="btn-primary hidden rounded-full px-5 sm:inline-flex">{UI.demo[lang]}</a>

          {/* Phones */}
          <details className="group/menu md:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full hover:bg-canvas [&::-webkit-details-marker]:hidden" aria-label={UI.menu[lang]}>
              <Menu className="size-5 group-open/menu:hidden" />
              <X className="hidden size-5 group-open/menu:block" />
            </summary>
            <div className="absolute inset-x-0 top-16 border-b border-line bg-white px-4 pb-6 shadow-xl">
              <ul>
                {links(lang).map((l) => (
                  <li key={l.href}><a href={l.href} className="block border-b border-line py-4 text-lg">{l.label}</a></li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <LangSwitch lang={lang} slug={slug} />
                <a href={href(lang, "contact")} className="btn-primary rounded-full px-5">{UI.demo[lang]}</a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      {children}

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted">{UI.footerText[lang]}</p>
            <p className="mt-2 text-sm text-muted">{UI.team[lang]}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links(lang).map((l) => (
              <li key={l.href}><a href={l.href} className="text-muted hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-line px-4 py-6 text-xs text-muted sm:px-6">
          <span>© {new Date().getFullYear()} Cuisine.AI</span>
          <LangSwitch lang={lang} slug={slug} />
        </div>
      </footer>
    </div>
  );
}
