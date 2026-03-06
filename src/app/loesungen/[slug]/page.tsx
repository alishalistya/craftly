import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";
import { trades } from "@/data/trades";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trades.map((trade) => ({ slug: trade.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);
  if (!trade) return {};
  return {
    title: `${trade.name} – Lagerverwaltung für ${trade.shortName}`,
    description: `Craftly für ${trade.shortName}: ${trade.heroDescription.slice(0, 140)}`,
  };
}

export default async function TradePage({ params }: Props) {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);
  if (!trade) notFound();

  return (
    <>
      <PageHero
        label={trade.shortName}
        title={`Lagerverwaltung für <span class='text-brand'>${trade.shortName}</span>`}
        subtitle={trade.heroDescription}
        ctaText="Kostenlos starten"
        ctaHref="/kontakt"
        secondaryCtaText="Alle Gewerke"
        secondaryCtaHref="/loesungen"
      />

      {/* Problems */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Herausforderungen"
            title={`Typische Probleme im ${trade.shortName === "Alle Gewerke" ? "Handwerk" : trade.shortName + "-Betrieb"}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trade.problems.map((problem) => (
              <FadeUp key={problem.title}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl text-amber-dark mb-4">
                    <Icon name="fa-triangle-exclamation" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm text-text-muted">{problem.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Materialien"
            title="Was Sie mit Craftly verwalten"
            subtitle={`Typische Materialien im ${trade.shortName === "Alle Gewerke" ? "Handwerk" : trade.shortName + "-Bereich"}, die Sie mit Craftly organisieren können.`}
          />
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="bg-white rounded-2xl border border-border p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trade.materials.map((material) => (
                    <div key={material} className="flex items-center gap-3 text-sm">
                      <Icon name="fa-box" className="text-brand text-xs" />
                      <span>{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Vorteile"
            title={`So hilft Craftly ${trade.shortName === "Alle Gewerke" ? "Ihrem Betrieb" : "im " + trade.shortName + "-Betrieb"}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {trade.benefits.map((benefit) => (
              <FadeUp key={benefit}>
                <div className="bg-white rounded-xl p-6 border border-border flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="fa-check" className="text-emerald-600 text-sm" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
