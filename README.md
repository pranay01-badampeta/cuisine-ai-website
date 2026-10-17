# Cuisine.AI website

The public product website for [Cuisine.AI](https://cuisine-ai-app.onrender.com), in English (site root) and French (`/fr/`).
The application itself lives in a separate, private repository.

- `src/pages/` – the page templates (home, feature pages, pricing, about, contact, blog, resources)
- `src/content/` – the text of the feature pages, blog, FAQ, help center, guides and "new features", in both languages
- `src/plans.ts` – prices and plan contents
- `src/config.ts` – the app address used by the "Log in" / "Free trial" buttons, and the contact e-mail
- `src/img/` – real screenshots of the app (demo restaurant)
- `npm run build` – renders every page to static HTML in `docs/` (served by GitHub Pages), with the downloadable PDFs
  (plan comparison and guides, printed by headless Google Chrome)
