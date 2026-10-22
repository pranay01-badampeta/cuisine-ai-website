import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "../config";
import { type L, type Lang } from "../i18n";

const CONTACT = {
  title: { en: "Talk to us.", fr: "Parlons-en." },
  text: {
    en: "Ask for a demo, a price for several restaurants, or anything else.",
    fr: "Demandez une démo, un prix pour plusieurs restaurants, ou toute autre chose.",
  },
  emailUs: { en: "Or email us directly", fr: "Ou écrivez-nous directement" },
  name: { en: "Your name", fr: "Votre nom" },
  email: { en: "Email", fr: "E-mail" },
  company: { en: "Restaurant (optional)", fr: "Restaurant (facultatif)" },
  message: { en: "Message", fr: "Message" },
  send: { en: "Send", fr: "Envoyer" },
  privacy: {
    en: "Pressing Send opens your own email app with the message ready. Nothing is sent until you send it from there.",
    fr: "En appuyant sur Envoyer, votre application e-mail s'ouvre avec le message prêt. Rien n'est envoyé avant que vous l'envoyiez depuis celle-ci.",
  },
  subject: { en: "Contact from the Cuisine.AI website", fr: "Contact depuis le site Cuisine.AI" },
};

export function ContactPage({ lang }: { lang: Lang }) {
  const field = (id: string, label: L, type = "text", required = true) => (
    <div>
      <label htmlFor={id} className="field-label">{label[lang]}</label>
      <input id={id} name={id} type={type} required={required} className="input" autoComplete={id === "email" ? "email" : id === "name" ? "name" : "organization"} />
    </div>
  );
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-20">
      <section>
        <h1 className="headline text-6xl sm:text-7xl">{CONTACT.title[lang]}</h1>
        <p className="mt-5 max-w-md text-lg text-muted">{CONTACT.text[lang]}</p>
        <p className="mt-12 eyebrow">{CONTACT.emailUs[lang]}</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-flex items-center gap-2 text-lg underline underline-offset-4 hover:no-underline">
          <Mail className="size-5" /> {CONTACT_EMAIL}
        </a>
      </section>
      <form id="contact-form" data-to={CONTACT_EMAIL} data-subject={CONTACT.subject[lang]} className="space-y-5 rounded-3xl border border-line p-6 sm:p-8">
        {field("name", CONTACT.name)}
        {field("email", CONTACT.email, "email")}
        {field("company", CONTACT.company, "text", false)}
        <div>
          <label htmlFor="message" className="field-label">{CONTACT.message[lang]}</label>
          <textarea id="message" name="message" required rows={5} className="input py-3" />
        </div>
        <button className="btn-primary w-full rounded-full text-base">{CONTACT.send[lang]}</button>
        <p className="text-xs text-muted">{CONTACT.privacy[lang]}</p>
      </form>
    </main>
  );
}

export const CONTACT_TITLE = { en: "Contact", fr: "Contact" };
