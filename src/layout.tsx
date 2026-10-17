import { ChevronDown, Menu, MessageCircle, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { APP } from "./config";
import { FEATURES } from "./content/features";
import { UI, href, type Lang } from "./i18n";

type Item = { label: string; slug: string; hint?: string };
type Group = { title: string; items: Item[] };

function menus(lang: Lang): { software: Group[]; business: Group[]; resources: Group[] } {
  const t = (k: keyof typeof UI) => UI[k][lang];
  const feature = (g: "platform" | "options"): Item[] => FEATURES.filter((f) => f.group === g).map((f) => ({ label: f.menu[lang], slug: f.slug }));
  return {
    software: [
      { title: t("forRestaurants"), items: feature("platform") },
      { title: t("options"), items: feature("options") },
    ],
    business: [{ title: "", items: [{ label: t("about"), slug: "about" }, { label: t("prices"), slug: "pricing" }] }],
    resources: [
      { title: t("education"), items: [{ label: t("blog"), slug: "blog" }, { label: t("guides"), slug: "guides" }, { label: t("faq"), slug: "faq" }] },
      {
        title: t("userResources"),
        items: [
          { label: t("integrations"), slug: "integrations" },
          { label: t("equipment"), slug: "equipment" },
          { label: t("newFeatures"), slug: "changelog", hint: t("newFeaturesHint") },
          { label: t("developers"), slug: "developers" },
          { label: t("help"), slug: "help" },
        ],
      },
    ],
  };
}

function Dropdown({ lang, label, groups, wide, title }: { lang: Lang; label: string; groups: Group[]; wide?: boolean; title?: string }) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition group-focus-within:bg-canvas group-hover:bg-canvas">
        {label} <ChevronDown className="size-3.5" />
      </button>
      <div
        className={`invisible absolute top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${wide ? "left-0 w-[42rem]" : "left-0 w-max min-w-56"}`}
      >
        <div className="rounded-2xl border border-line bg-white p-6 shadow-xl">
          {title && <p className="mb-5 text-center text-lg font-bold tracking-tight uppercase">{title}</p>}
          <div className={`grid gap-8 ${groups.length > 1 ? "grid-cols-2" : ""}`}>
            {groups.map((g) => (
              <div key={g.title || "items"}>
                {g.title && <p className="mb-3 text-xs font-bold tracking-wider text-muted uppercase">{g.title}</p>}
                <ul className="space-y-1">
                  {g.items.map((i) => (
                    <li key={i.slug}>
                      <a href={href(lang, i.slug)} className="block rounded-lg px-2 py-1.5 text-sm hover:bg-canvas">
                        {i.label}
                        {i.hint && <span className="mt-0.5 block text-xs text-muted italic">{i.hint}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SiteLayout({ lang, slug, children }: { lang: Lang; slug: string; children: React.ReactNode }) {
  const t = (k: keyof typeof UI) => UI[k][lang];
  const m = menus(lang);
  const other: Lang = lang === "en" ? "fr" : "en";
  const mobileGroups: [string, Group[]][] = [
    [t("software"), m.software],
    [t("business"), m.business],
    [t("resources"), m.resources],
  ];
  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center gap-1 px-4 sm:px-6">
          <a href={href(lang, "index")} aria-label="Cuisine.AI" className="mr-auto shrink-0 lg:mr-6">
            <Logo />
          </a>

          <div className="hidden flex-1 items-center gap-1 lg:flex">
            <Dropdown lang={lang} label={t("software")} groups={m.software} wide title={t("platform")} />
            <Dropdown lang={lang} label={t("business")} groups={m.business} />
            <Dropdown lang={lang} label={t("resources")} groups={m.resources} wide />
            <a href={href(lang, "blog")} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-canvas">{t("blog")}</a>
            <a href={href(lang, "contact")} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-canvas">{t("contact")}</a>
          </div>

          <div className="group relative hidden sm:block">
            <button type="button" className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold uppercase hover:bg-canvas">
              {lang} <ChevronDown className="size-3.5" />
            </button>
            <div className="invisible absolute top-full right-0 z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <a href={href(other, slug)} hrefLang={other} className="block rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold uppercase shadow-lg hover:bg-canvas">
                {other}
              </a>
            </div>
          </div>
          <button type="button" data-search-open aria-label={t("search")} className="grid size-10 place-items-center rounded-lg hover:bg-canvas">
            <Search className="size-5" />
          </button>
          <a href={`${APP}/login`} className="hidden px-2 text-sm font-semibold sm:block">{t("login")}</a>
          <a href={`${APP}/signup`} className="btn-primary ml-1 hidden sm:inline-flex">{t("freeTrial")}</a>

          {/* Phone and tablet menu */}
          <details className="group/menu lg:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-lg hover:bg-canvas [&::-webkit-details-marker]:hidden" aria-label={t("menu")}>
              <Menu className="size-5 group-open/menu:hidden" />
              <X className="hidden size-5 group-open/menu:block" />
            </summary>
            <div className="absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-line bg-white px-4 pb-8 shadow-xl">
              {mobileGroups.map(([label, groups]) => (
                <div key={label} className="border-b border-line py-4">
                  <p className="text-sm font-bold">{label}</p>
                  {groups.map((g) => (
                    <div key={g.title || "items"} className="mt-3">
                      {g.title && <p className="text-xs font-semibold tracking-wider text-muted uppercase">{g.title}</p>}
                      <ul className="mt-1">
                        {g.items.map((i) => (
                          <li key={i.slug}><a href={href(lang, i.slug)} className="block py-1.5 text-sm">{i.label}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
              <a href={href(lang, "blog")} className="block border-b border-line py-4 text-sm font-bold">{t("blog")}</a>
              <a href={href(lang, "contact")} className="block border-b border-line py-4 text-sm font-bold">{t("contact")}</a>
              <a href={href(other, slug)} hrefLang={other} className="block border-b border-line py-4 text-sm font-bold">{other === "fr" ? "Français" : "English"}</a>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href={`${APP}/login`} className="btn-outline">{t("login")}</a>
                <a href={`${APP}/signup`} className="btn-primary">{t("freeTrial")}</a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      {children}

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{t("footerText")}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">{t("software")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {FEATURES.map((f) => (
                <li key={f.slug}><a href={href(lang, f.slug)} className="hover:text-ink">{f.menu[lang]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">{t("resources")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {m.resources.flatMap((g) => g.items).map((i) => (
                <li key={i.slug}><a href={href(lang, i.slug)} className="hover:text-ink">{i.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">{t("company")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href={href(lang, "about")} className="hover:text-ink">{t("about")}</a></li>
              <li><a href={href(lang, "pricing")} className="hover:text-ink">{t("prices")}</a></li>
              <li><a href={href(lang, "contact")} className="hover:text-ink">{t("contact")}</a></li>
              <li><a href={`${APP}/signup`} className="hover:text-ink">{t("createAccount")}</a></li>
              <li><a href={`${APP}/login`} className="hover:text-ink">{t("login")}</a></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-line py-6 pb-20 text-center text-xs text-muted sm:pb-6">© {new Date().getFullYear()} Cuisine.AI</p>
      </footer>

      {/* Chat bubble, like the "Bonjour !" bubble on the reference site: opens the contact page. */}
      {slug !== "contact" && (
        <a href={href(lang, "contact")} className="fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-ink/85">
          <MessageCircle className="size-4" /> {t("chat")}
        </a>
      )}

      {/* Search, filled by the small script added at build time. */}
      <dialog id="site-search" className="m-auto mt-24 w-[min(36rem,calc(100%-2rem))] rounded-2xl border border-line p-0 shadow-2xl backdrop:bg-black/40">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-4 text-muted" />
          <input id="site-search-input" className="h-14 flex-1 bg-transparent outline-none" placeholder={t("searchPlaceholder")} autoComplete="off" aria-label={t("search")} />
          <button type="button" data-search-close aria-label="Close" className="grid size-8 place-items-center rounded-lg hover:bg-canvas"><X className="size-4" /></button>
        </div>
        <ul id="site-search-results" className="max-h-96 overflow-y-auto p-2" data-empty={t("noResults")} />
      </dialog>
    </div>
  );
}
