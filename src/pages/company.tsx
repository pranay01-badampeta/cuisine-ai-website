import { Heart, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { CONTACT_EMAIL } from "../config";
import { UI, type L, type Lang } from "../i18n";
import { Buttons, PageHero } from "../ui";

const ABOUT = {
  title: { en: "About us", fr: "À propos de nous" },
  quote: {
    en: "“At Cuisine.AI we want restaurant teams to spend their time on what really matters: their guests and their food. The paperwork should take care of itself.”",
    fr: "« Chez Cuisine.AI, nous voulons que les équipes de restaurant passent leur temps sur ce qui compte vraiment : leurs clients et leur cuisine. La paperasse devrait se faire toute seule. »",
  },
  storyTitle: { en: "Our story", fr: "Notre histoire" },
  story: [
    {
      en: "Cuisine.AI started in 2026 from a simple observation: in restaurants and bars, managers spend hours every week filling in temperature sheets, typing supplier invoices and updating stock and recipe costs by hand.",
      fr: "Cuisine.AI est né en 2026 d'un constat simple : dans les restaurants et les bars, les responsables passent des heures chaque semaine à remplir des relevés de température, saisir des factures fournisseurs et mettre à jour le stock et les coûts des recettes à la main.",
    },
    {
      en: "We built one application that brings together food safety, purchases, stock and costs, and uses AI to do the typing: a photo of an invoice updates the stock, the prices and the cost of every dish.",
      fr: "Nous avons construit une seule application qui réunit l'hygiène, les achats, le stock et les coûts, et qui utilise l'IA pour la saisie : la photo d'une facture met à jour le stock, les prix et le coût de chaque plat.",
    },
  ],
  teamTitle: { en: "The team", fr: "L'équipe" },
  team: { en: "Cuisine.AI is built by Pranay Badampeta, with Saiprasad Bandari and xlucifer65.", fr: "Cuisine.AI est développé par Pranay Badampeta, avec Saiprasad Bandari et xlucifer65." },
  valuesTitle: { en: "Our values", fr: "Nos valeurs" },
  help: { en: "Need help getting started?", fr: "Besoin d'accompagnement ?" },
};

const VALUES: { icon: typeof Heart; title: L; text: L }[] = [
  { icon: Sparkles, title: { en: "Less typing", fr: "Moins de saisie" }, text: { en: "If a photo or a sensor can do it, nobody should have to type it.", fr: "Si une photo ou une sonde peut le faire, personne ne devrait avoir à le saisir." } },
  { icon: ShieldCheck, title: { en: "Food safety first", fr: "L'hygiène d'abord" }, text: { en: "HACCP records are part of the daily routine, not an extra.", fr: "Les relevés HACCP font partie du quotidien, pas d'un supplément." } },
  { icon: Heart, title: { en: "Simple for the whole team", fr: "Simple pour toute l'équipe" }, text: { en: "Staff pick their name and tap. No training needed.", fr: "Chacun choisit son nom et touche. Aucune formation nécessaire." } },
  { icon: Lock, title: { en: "Your data stays yours", fr: "Vos données restent les vôtres" }, text: { en: "Protected access, admin PIN, audit log and export of every record.", fr: "Accès protégé, code administrateur, journal d'audit et export de chaque relevé." } },
];

export function AboutPage({ lang }: { lang: Lang }) {
  return (
    <main>
      <PageHero lang={lang} title={ABOUT.title[lang]} buttons={false} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <blockquote className="text-2xl leading-snug font-semibold tracking-tight">{ABOUT.quote[lang]}</blockquote>
        <h2 className="mt-14 text-2xl font-bold">{ABOUT.storyTitle[lang]}</h2>
        {ABOUT.story.map((p) => (
          <p key={p.en} className="mt-4 text-lg text-muted">{p[lang]}</p>
        ))}
        <h2 className="mt-14 text-2xl font-bold">{ABOUT.teamTitle[lang]}</h2>
        <p className="mt-4 text-lg text-muted">{ABOUT.team[lang]}</p>
      </section>
      <section className="border-t border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{ABOUT.valuesTitle[lang]}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title.en} className="rounded-2xl border border-line bg-white p-6">
                <v.icon className="size-6" />
                <p className="mt-4 font-semibold">{v.title[lang]}</p>
                <p className="mt-2 text-sm text-muted">{v.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold">{ABOUT.help[lang]}</h2>
        <Buttons lang={lang} className="mt-6 justify-center" />
      </section>
    </main>
  );
}

const CONTACT = {
  title: { en: "Contact us", fr: "Contactez-nous" },
  callBack: { en: "To be called back", fr: "Être rappelé" },
  callBackText: { en: "Leave your phone number and we will call you back.", fr: "Laissez votre numéro et nous vous rappelons." },
  email: { en: "E-mail", fr: "E-mail" },
  name: { en: "Name", fr: "Nom" },
  phone: { en: "Phone number", fr: "Numéro de téléphone" },
  company: { en: "Restaurant / company name", fr: "Nom du restaurant / de la société" },
  message: { en: "Message", fr: "Message" },
  privacy: {
    en: "Cuisine.AI respects your privacy. We only use your details to answer your message. When you press Send, your own email app opens with the message ready: nothing is sent until you send it from there.",
    fr: "Cuisine.AI respecte votre vie privée. Nous utilisons vos coordonnées uniquement pour répondre à votre message. Quand vous appuyez sur Envoyer, votre application e-mail s'ouvre avec le message prêt : rien n'est envoyé avant que vous l'envoyiez depuis celle-ci.",
  },
  consent: { en: "I agree to receive further communications from Cuisine.AI.", fr: "J'accepte de recevoir d'autres communications de Cuisine.AI." },
  send: { en: "Send", fr: "Envoyer" },
  callBackMessage: { en: "Please call me back.", fr: "Merci de me rappeler." },
  subject: { en: "Contact from the Cuisine.AI website", fr: "Contact depuis le site Cuisine.AI" },
};

export function ContactPage({ lang }: { lang: Lang }) {
  const field = (id: string, label: L, type = "text", required = true) => (
    <div>
      <label htmlFor={id} className="field-label">{label[lang]}{required && <span className="text-red-600"> *</span>}</label>
      <input id={id} name={id} type={type} required={required} className="input" autoComplete={id === "email" ? "email" : id === "phone" ? "tel" : id === "name" ? "name" : "organization"} />
    </div>
  );
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
      <aside className="space-y-8">
        <div>
          <button type="button" data-call-back={CONTACT.callBackMessage[lang]} className="btn-primary px-6">{CONTACT.callBack[lang]}</button>
          <p className="mt-2 text-sm text-muted">{CONTACT.callBackText[lang]}</p>
        </div>
        <div className="border-t border-line pt-8">
          <p className="text-sm font-bold tracking-wider uppercase">{CONTACT.email[lang]}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block text-muted hover:text-ink">{CONTACT_EMAIL}</a>
        </div>
      </aside>
      <section>
        <h1 className="text-4xl font-bold tracking-tight uppercase">{CONTACT.title[lang]}</h1>
        <form id="contact-form" data-to={CONTACT_EMAIL} data-subject={CONTACT.subject[lang]} className="mt-8 space-y-5 border-t border-line pt-8">
          {field("email", CONTACT.email, "email")}
          {field("name", CONTACT.name)}
          {field("phone", CONTACT.phone, "tel")}
          {field("company", CONTACT.company, "text", false)}
          <div>
            <label htmlFor="message" className="field-label">{CONTACT.message[lang]}<span className="text-red-600"> *</span></label>
            <textarea id="message" name="message" required rows={5} className="input py-3" />
          </div>
          <p className="text-sm text-muted">{CONTACT.privacy[lang]}</p>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" name="consent" className="mt-0.5 size-4 accent-black" /> {CONTACT.consent[lang]}
          </label>
          <button className="btn-primary px-8">{CONTACT.send[lang]}</button>
        </form>
      </section>
    </main>
  );
}

export const PAGE_TITLES = {
  about: ABOUT.title,
  contact: CONTACT.title,
  pricing: UI.prices,
};

