import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import TradeCard from "@/components/cards/TradeCard";
import StatsRow from "@/components/sections/StatsRow";
import CTASection from "@/components/sections/CTASection";
import { trades } from "@/data/trades";

export const metadata: Metadata = {
  title: "Lösungen für Gewerke – Lagerverwaltung für jedes Handwerk",
  description:
    "Dein Lagerhelfer passt sich Ihrem Gewerk an: Elektriker, SHK, Maler, Schreiner und mehr. Entdecken Sie, wie Dein Lagerhelfer Ihrem Handwerksbetrieb hilft.",
};

export default function LoesungenPage() {
  return (
    <>
      <PageHero
        label="Lösungen"
        title="Für jedes <span class='text-brand'>Gewerk</span> die richtige Lösung"
        subtitle="Dein Lagerhelfer versteht die Anforderungen verschiedener Handwerksberufe. Entdecken Sie, wie Dein Lagerhelfer speziell Ihrem Betrieb hilft."
      />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((trade) => (
              <TradeCard
                key={trade.slug}
                slug={trade.slug}
                name={trade.name}
                shortName={trade.shortName}
                icon={trade.icon}
                color={trade.color}
                description={trade.heroDescription.slice(0, 120) + "..."}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsRow />
      <CTASection />
    </>
  );
}
