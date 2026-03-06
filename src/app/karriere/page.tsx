import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Karriere – Arbeiten bei Dein Lagerhelfer",
  description:
    "Werde Teil des Dein Lagerhelfer-Teams. Wir bauen die Lagerverwaltung für das deutsche Handwerk – einfach, kostenlos und mit Herz.",
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        label="Karriere"
        title="Arbeiten bei <span class='text-brand'>Dein Lagerhelfer</span>"
        subtitle="Wir bauen ein Produkt, das Handwerksbetrieben den Alltag erleichtert. Wenn dich das begeistert, bist du hier richtig."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6 text-3xl text-brand">
                <Icon name="fa-seedling" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                Aktuell keine offenen Stellen
              </h2>
              <p className="text-text-muted mb-6">
                Wir sind ein kleines Team und wachsen mit Bedacht. Aktuell
                haben wir keine offenen Positionen &ndash; aber das kann sich
                &auml;ndern.
              </p>
              <p className="text-text-muted mb-8">
                Wenn Sie Interesse haben, bei Dein Lagerhelfer mitzuwirken &ndash;
                sei es als Entwickler, Designer, im Marketing oder im
                Kundenkontakt &ndash; schreiben Sie uns gerne eine
                Initiativbewerbung.
              </p>
            </FadeUp>
            <FadeUp>
              <div className="bg-surface-subtle rounded-2xl border border-border p-8">
                <h3 className="font-bold mb-2">Initiativbewerbung</h3>
                <p className="text-sm text-text-muted mb-4">
                  Senden Sie uns eine kurze Nachricht mit ein paar S&auml;tzen
                  &uuml;ber sich und was Sie bei Dein Lagerhelfer machen m&ouml;chten.
                </p>
                <a
                  href="mailto:karriere@deinlagerhelfer.de"
                  className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
                >
                  <Icon name="fa-envelope" />
                  karriere@deinlagerhelfer.de
                </a>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: "fa-house-laptop", title: "Remote-first", desc: "Arbeite von überall in Deutschland." },
                  { icon: "fa-hand-holding-heart", title: "Mit Sinn", desc: "Ein Produkt, das echten Betrieben hilft." },
                  { icon: "fa-rocket", title: "Startup-Spirit", desc: "Kurze Wege, schnelle Entscheidungen." },
                ].map((perk) => (
                  <div key={perk.title} className="p-6 rounded-2xl bg-surface-subtle border border-border">
                    <Icon name={perk.icon} className="text-2xl text-brand mb-3" />
                    <h4 className="font-bold text-sm mb-1">{perk.title}</h4>
                    <p className="text-xs text-text-muted">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
