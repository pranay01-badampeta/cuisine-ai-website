import { Logo } from "./Logo";
import { APP } from "./config";

const LINKS = [
  { href: "#invoices", label: "AI invoices" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <a href="#top" aria-label="Cuisine.AI home">
            <Logo />
          </a>
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-ink/5 hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <a href={`${APP}/login`} className="btn-ghost px-3">Log in</a>
            <a href={`${APP}/signup`} className="btn-primary">Start free</a>
          </div>
        </nav>
      </header>

      {children}

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Food safety, stock and supplier invoices for restaurants and bars, with AI that does the typing for you.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-ink">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Account</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href={`${APP}/signup`} className="hover:text-ink">Create an account</a></li>
              <li><a href={`${APP}/login`} className="hover:text-ink">Log in</a></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-line py-6 text-center text-xs text-muted">© {new Date().getFullYear()} Cuisine.AI</p>
      </footer>
    </div>
  );
}
