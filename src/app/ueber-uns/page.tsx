import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Über uns – Das Team hinter Dein Lagerhelfer",
  description:
    "Wir bauen Dein Lagerhelfer, weil wir überzeugt sind: Jeder Handwerksbetrieb verdient eine einfache, kostenlose Lagerverwaltung.",
};

const values = [
  {
    icon: "fa-hand-holding-heart",
    title: "Für das Handwerk gemacht",
    description:
      "Wir entwickeln nicht für alle – wir entwickeln für Handwerksbetriebe. Jede Funktion wird mit echten Handwerkern getestet und verbessert.",
  },
  {
    icon: "fa-lightbulb",
    title: "Einfachheit zuerst",
    description:
      "Software muss nicht kompliziert sein. Wir verzichten bewusst auf alles, was nicht nötig ist – und konzentrieren uns auf das Wesentliche.",
  },
  {
    icon: "fa-lock-open",
    title: "Kostenlos und ehrlich",
    description:
      "Keine Tricks, kein Kleingedrucktes. Dein Lagerhelfer ist kostenlos, weil wir glauben, dass grundlegende Werkzeuge für jeden zugänglich sein sollten.",
  },
  {
    icon: "fa-comments",
    title: "Feedback-getrieben",
    description:
      "Wir bauen Dein Lagerhelfer nicht im stillen Kämmerlein. Unsere Nutzer bestimmen mit, welche Funktionen als Nächstes kommen.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Die Idee",
    description:
      "Aus Gesprächen mit Handwerksbetrieben entsteht die Idee: eine einfache, kostenlose Lagerverwaltung speziell für das Handwerk.",
  },
  {
    year: "2025",
    title: "Erste Prototypen",
    description:
      "Wir testen frühe Versionen mit ausgewählten Betrieben und sammeln Feedback zu den wichtigsten Funktionen.",
  },
  {
    year: "2026",
    title: "Early Access",
    description:
      "Dein Lagerhelfer geht in die offene Frühphase. Handwerksbetriebe können sich registrieren und die erste Version nutzen.",
  },
  {
    year: "2026",
    title: "Und jetzt?",
    description:
      "Wir arbeiten an neuen Funktionen, hören auf unser Feedback und wachsen Schritt für Schritt – gemeinsam mit unseren Nutzern.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Wir bauen Dein Lagerhelfer für<br />das <span class='text-brand'>Handwerk</span>"
        subtitle="Weil jeder Handwerksbetrieb eine einfache, kostenlose Lagerverwaltung verdient – ohne Kompromisse."
      />

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="text-3xl font-extrabold mb-6">Unsere Mission</h2>
            </FadeUp>
            <FadeUp>
              <p className="text-lg text-text-muted mb-6">
                &Uuml;ber eine Million Handwerksbetriebe gibt es in Deutschland.
                Die meisten verwalten ihr Material noch mit Zetteln, Excel oder
                Bauchgef&uuml;hl. Bestehende Software ist oft zu teuer, zu
                komplex oder nicht auf das Handwerk zugeschnitten.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="text-lg text-text-muted">
                Dein Lagerhelfer &auml;ndert das. Wir bauen eine Lagerverwaltung, die so
                einfach ist wie eine Handy-App &ndash; und f&uuml;r jeden
                Handwerksbetrieb kostenlos zug&auml;nglich. Denn
                Digitalisierung sollte kein Luxus sein, sondern
                selbstverst&auml;ndlich.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Was uns antreibt"
            title="Unsere Werte"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <FadeUp key={value.title}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-xl text-brand mb-4">
                    <Icon name={value.icon} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-text-muted">{value.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Unsere Geschichte"
            title="Von der Idee zum Produkt"
          />
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <FadeUp key={index}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-semibold text-brand">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team note */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6 text-3xl text-brand">
                <Icon name="fa-people-group" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4">Ein kleines Team, gro&szlig;e Ambitionen</h2>
              <p className="text-text-muted mb-4">
                Hinter Dein Lagerhelfer steht ein kleines, engagiertes Team aus
                Produktentwicklern und Handwerks-Enthusiasten. Wir kennen die
                Herausforderungen im Betrieb &ndash; und bauen L&ouml;sungen, die
                wirklich helfen.
              </p>
              <p className="text-text-muted">
                M&ouml;chten Sie mitmachen oder haben Feedback? Wir freuen uns
                auf Ihre Nachricht.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
