import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt – Sprechen Sie mit uns",
  description:
    "Haben Sie Fragen zu Dein Lagerhelfer? Schreiben Sie uns – wir melden uns schnell und persönlich bei Ihnen.",
};

const contactInfo = [
  {
    icon: "fa-envelope",
    title: "E-Mail",
    value: "hallo@deinlagerhelfer.de",
    description: "Wir antworten in der Regel innerhalb von 24 Stunden.",
  },
  {
    icon: "fa-comment-dots",
    title: "Chat",
    value: "Live-Chat verfügbar",
    description: "Montag bis Freitag, 9–17 Uhr.",
  },
  {
    icon: "fa-circle-question",
    title: "FAQ",
    value: "Häufige Fragen",
    description: "Vielleicht finden Sie die Antwort schon in unseren FAQ.",
    href: "/#faq",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Wir sind <span class='text-brand'>für Sie da</span>"
        subtitle="Haben Sie Fragen, Feedback oder möchten Sie eine Demo? Schreiben Sie uns – wir melden uns schnell und persönlich."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info) => (
                <FadeUp key={info.title}>
                  <div className="bg-surface-subtle rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand">
                        <Icon name={info.icon} />
                      </div>
                      <h3 className="font-bold">{info.title}</h3>
                    </div>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="text-brand font-semibold text-sm hover:underline"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-sm font-semibold">{info.value}</p>
                    )}
                    <p className="text-xs text-text-light mt-1">
                      {info.description}
                    </p>
                  </div>
                </FadeUp>
              ))}

              {/* Social */}
              <FadeUp>
                <div className="bg-surface-subtle rounded-2xl p-6 border border-border">
                  <h3 className="font-bold mb-3">Social Media</h3>
                  <div className="flex gap-3">
                    {["fa-linkedin-in", "fa-instagram", "fa-facebook-f"].map(
                      (icon) => (
                        <a
                          key={icon}
                          href="#"
                          className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-text-muted hover:text-brand hover:border-brand transition-all"
                        >
                          <i className={`fab ${icon}`} />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <FadeUp>
                <div className="bg-white rounded-2xl border border-border p-8 lg:p-10">
                  <h2 className="text-2xl font-extrabold mb-2">
                    Nachricht senden
                  </h2>
                  <p className="text-text-muted mb-8">
                    F&uuml;llen Sie das Formular aus und wir melden uns bei
                    Ihnen.
                  </p>
                  <ContactForm />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
