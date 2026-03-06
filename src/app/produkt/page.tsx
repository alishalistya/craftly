import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import MockDashboard from "@/components/sections/MockDashboard";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { produktFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "Produkt – Lagerverwaltung für Handwerksbetriebe",
  description:
    "Entdecken Sie alle Funktionen von Craftly: Lagerverwaltung, Bestellungen, Inventur und Bestandsoptimierung – kostenlos für Handwerksbetriebe.",
};

const produktFeatures = [
  {
    id: "lagerverwaltung",
    icon: "fa-warehouse",
    gradient: "from-blue-500 to-blue-600",
    title: "Lagerverwaltung",
    subtitle: "Alle Materialien an einem Ort",
    description:
      "Erfassen Sie alle Materialien Ihres Betriebs digital. Ordnen Sie Kategorien, Lagerorte und Lieferanten zu. Sehen Sie auf einen Blick, was vorrätig ist und was nachbestellt werden muss.",
    details: [
      "Unbegrenzte Materialien anlegen",
      "Kategorien und Lagerorte zuweisen",
      "Mengen in Echtzeit aktualisieren",
      "Barcode- und QR-Code-Scanner",
      "Suchfunktion und Filter",
      "Fotos zu Materialien hinzufügen",
    ],
  },
  {
    id: "bestellungen",
    icon: "fa-cart-shopping",
    gradient: "from-purple-500 to-purple-600",
    title: "Bestellungen",
    subtitle: "Material nachbestellen leicht gemacht",
    description:
      "Erstellen Sie Bestelllisten aus Ihrem aktuellen Bestand heraus. Craftly erkennt automatisch, welche Materialien unter den Mindestbestand gefallen sind, und schlägt Bestellungen vor.",
    details: [
      "Automatische Bestellvorschläge",
      "Bestelllisten per E-Mail versenden",
      "Lieferanten je Material hinterlegen",
      "Bestellhistorie einsehen",
      "Wareneingang buchen",
      "Liefertermine im Blick",
    ],
  },
  {
    id: "inventur",
    icon: "fa-clipboard-check",
    gradient: "from-amber to-amber-dark",
    title: "Inventur",
    subtitle: "Digitale Inventur in Minuten",
    description:
      "Vergessen Sie handgeschriebene Inventurlisten. Mit Craftly zählen Sie Ihre Bestände digital – per App oder am PC. Die Differenzen werden automatisch berechnet.",
    details: [
      "Inventur per Smartphone starten",
      "Barcode-Scan für schnelles Zählen",
      "Automatische Differenzberechnung",
      "Inventurbericht als PDF",
      "Teilinventur für einzelne Lagerorte",
      "Inventur-Historie",
    ],
  },
  {
    id: "bestandsoptimierung",
    icon: "fa-chart-pie",
    gradient: "from-green-500 to-green-600",
    title: "Bestandsoptimierung",
    subtitle: "Nie wieder zu viel oder zu wenig",
    description:
      "Craftly analysiert Ihren Materialverbrauch und schlägt optimale Mindestbestände vor. So vermeiden Sie Überbestände, die Kapital binden, und Fehlbestände, die den Betrieb aufhalten.",
    details: [
      "Verbrauchsanalyse je Material",
      "Mindestbestand automatisch vorschlagen",
      "Warnungen bei niedrigem Bestand",
      "Materialkosten im Blick",
      "Verbrauchstrends erkennen",
      "Berichte und Auswertungen",
    ],
  },
];

const audiences = [
  { icon: "fa-user", title: "Einmannbetriebe", description: "Auch als Solo-Handwerker den Überblick behalten." },
  { icon: "fa-users", title: "Kleine Teams (2–10)", description: "Gemeinsam arbeiten, jeder sieht den aktuellen Bestand." },
  { icon: "fa-building", title: "Mittlere Betriebe", description: "Mehrere Lager, Baustellen und Mitarbeiter verwalten." },
  { icon: "fa-graduation-cap", title: "Ausbildungsbetriebe", description: "Lehrlinge lernen von Anfang an, digital zu arbeiten." },
];

export default function ProduktPage() {
  return (
    <>
      <PageHero
        label="Produkt"
        title="Ihre digitale<br /><span class='text-brand'>Lagerverwaltung</span>"
        subtitle="Craftly gibt Ihrem Handwerksbetrieb die Werkzeuge, um Material effizient zu verwalten – einfach, übersichtlich und kostenlos."
        ctaText="Kostenlos starten"
        ctaHref="/kontakt"
        secondaryCtaText="Demo ansehen"
        secondaryCtaHref="#lagerverwaltung"
      >
        <FadeUp>
          <MockDashboard />
        </FadeUp>
      </PageHero>

      {/* Feature sections */}
      {produktFeatures.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-24 ${index % 2 === 0 ? "" : "bg-surface-subtle"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <FadeUp>
                  <div
                    className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 text-white bg-gradient-to-br ${feature.gradient}`}
                  >
                    <Icon name={feature.icon} />
                  </div>
                </FadeUp>
                <FadeUp>
                  <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-brand mb-2">
                    {feature.subtitle}
                  </span>
                  <h2 className="text-3xl font-extrabold mb-4">
                    {feature.title}
                  </h2>
                </FadeUp>
                <FadeUp>
                  <p className="text-text-muted mb-6">{feature.description}</p>
                </FadeUp>
                <FadeUp>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Icon
                          name="fa-check"
                          className="text-emerald-500 mt-0.5"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
              <FadeUp>
                <div className="bg-surface-subtle rounded-2xl border border-border p-10 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <Icon
                      name={feature.icon}
                      className={`text-6xl mb-4 text-brand/20`}
                    />
                    <p className="text-sm text-text-light">
                      Produktvorschau
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

      {/* Mobile / Baustelle */}
      <section className="py-24 bg-gradient-to-br from-dark to-dark-lighter text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="bg-white/5 rounded-2xl border border-white/10 p-10 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Icon name="fa-mobile-screen" className="text-6xl mb-4 text-brand/40" />
                  <p className="text-sm text-white/40">Mobilansicht</p>
                </div>
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-amber mb-2">
                  Für unterwegs
                </span>
                <h2 className="text-3xl font-extrabold mb-4">
                  Auf der Baustelle.<br />Im Lager. Überall.
                </h2>
              </FadeUp>
              <FadeUp>
                <p className="text-gray-300 mb-6">
                  Craftly funktioniert auf jedem Gerät – Smartphone, Tablet und
                  PC. Buchen Sie Material direkt auf der Baustelle, prüfen Sie
                  den Bestand im Transporter oder erstellen Sie Bestellungen vom
                  Büro aus.
                </p>
              </FadeUp>
              <FadeUp>
                <ul className="space-y-3">
                  {[
                    "Responsive Design für alle Bildschirmgrößen",
                    "Schneller Zugriff über den Browser",
                    "Barcode-Scanner mit der Smartphone-Kamera",
                    "Native App für iOS und Android in Planung",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <Icon name="fa-check" className="text-amber mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen geeignet */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Für wen?"
            title="Craftly passt sich an"
            subtitle="Egal ob Einmannbetrieb oder Mittelständler – Craftly wächst mit Ihren Anforderungen."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <FadeUp key={a.title}>
                <div className="text-center p-8 rounded-2xl bg-white border border-border hover:border-brand transition-all h-full">
                  <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4 text-xl text-brand">
                    <Icon name={a.icon} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-text-muted">{a.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Häufige Fragen"
            title="Fragen zum Produkt"
            subtitle="Technische Fragen zu Craftly – kurz und verständlich beantwortet."
          />
          <FAQAccordion items={produktFAQ} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
