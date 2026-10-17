import { APP } from "../config";
import type { Feature } from "../content/features";
import { UI, type Lang } from "../i18n";
import { Checks, CtaBanner, MoreArticles, PageHero, Shot } from "../ui";

export default function FeaturePage({ lang, feature }: { lang: Lang; feature: Feature }) {
  return (
    <main>
      <PageHero lang={lang} eyebrow={feature.menu[lang]} title={feature.title[lang]} text={feature.tagline[lang]} />
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6">
        {feature.sections.map((s, i) => (
          <section key={s.title.en} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <h2 className="text-3xl font-bold tracking-tight">{s.title[lang]}</h2>
              <p className="mt-4 text-lg text-muted">{s.text[lang]}</p>
              <Checks items={s.points} lang={lang} />
              {i === 1 && <a href={`${APP}/signup`} className="btn-primary mt-8 px-6">{UI.tryFree[lang]}</a>}
            </div>
            <Shot img={s.img} alt={s.title[lang]} />
          </section>
        ))}
      </div>
      <CtaBanner lang={lang} title={feature.closing[lang]} />
      <MoreArticles lang={lang} />
    </main>
  );
}
