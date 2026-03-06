import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/cards/PricingCard";
import FadeUp from "@/components/ui/FadeUp";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { pricingTiers } from "@/data/pricing";
import { pricingFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "Preise – Craftly ist kostenlos",
  description:
    "Craftly ist und bleibt kostenlos. Keine versteckten Kosten, kein Abo, kein Kleingedrucktes. Lagerverwaltung für Handwerksbetriebe – ohne Risiko.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        label="Preise"
        title="Einfach. <span class='text-brand'>Kostenlos.</span>"
        subtitle="Craftly ist für Handwerksbetriebe kostenlos. Kein Abo, keine versteckten Kosten, kein Kleingedrucktes. Einfach loslegen."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <FadeUp key={tier.name}>
                <PricingCard {...tier} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent explanation */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Transparenz"
            title="Warum wir das können"
            subtitle="Eine ehrliche Erklärung, warum Craftly kostenlos ist und bleiben kann."
          />
          <FadeUp>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border p-10">
              <p className="text-text-muted mb-4">
                Craftly befindet sich aktuell in der fr&uuml;hen Phase. Wir bauen das
                Produkt zusammen mit Handwerksbetrieben, die uns fr&uuml;hzeitig
                Feedback geben. In dieser Phase ist Craftly vollst&auml;ndig
                kostenlos.
              </p>
              <p className="text-text-muted mb-4">
                Langfristig planen wir, optionale Premium-Services f&uuml;r
                gr&ouml;&szlig;ere Betriebe anzubieten &ndash; etwa erweiterte
                Auswertungen, Mehrstandort-Verwaltung oder Integrationen mit
                Warenwirtschaftssystemen.
              </p>
              <p className="text-text-muted">
                Die <strong>Kernfunktionen der Lagerverwaltung</strong> &ndash;
                Material erfassen, Best&auml;nde verwalten, Bestellungen erstellen,
                Inventur durchf&uuml;hren &ndash; bleiben dauerhaft kostenlos. Das
                ist unser Versprechen.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Häufige Fragen"
            title="Fragen zu Preisen"
          />
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
