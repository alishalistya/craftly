import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import ProblemCard from "@/components/cards/ProblemCard";
import FeatureCard from "@/components/cards/FeatureCard";
import BenefitCard from "@/components/cards/BenefitCard";
import MockDashboard from "@/components/sections/MockDashboard";
import StatsRow from "@/components/sections/StatsRow";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { features, problems, steps, benefits } from "@/data/features";
import { homeFAQ } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-brand-light via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <FadeUp>
              <h1 className="text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] mb-5">
                Handwerk.<br />
                <span className="text-brand">Einfach.</span> Digital.
              </h1>
            </FadeUp>
            <FadeUp>
              <p className="text-lg text-text-muted mb-8 max-w-lg mx-auto lg:mx-0">
                Craftly ist die kostenlose Lagerverwaltung, die speziell f&uuml;r
                Handwerksbetriebe entwickelt wurde. Schluss mit Zettelwirtschaft
                &ndash; behalten Sie Ihr Material immer im Blick.
              </p>
            </FadeUp>
            <FadeUp>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button href="/kontakt">
                  Kostenlos starten{" "}
                  <Icon name="fa-arrow-right" className="ml-2" />
                </Button>
                <Button href="/produkt" variant="outline">
                  Mehr erfahren
                </Button>
              </div>
            </FadeUp>
          </div>
          <FadeUp>
            <div className="relative flex justify-center items-center">
              <MockDashboard />
              <div className="hidden md:flex absolute -top-2 -right-5 bg-white rounded-xl p-3 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] items-center gap-2.5 text-sm font-semibold animate-float">
                <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center text-white">
                  <Icon name="fa-check" />
                </div>
                <span>Bestellung aufgegeben</span>
              </div>
              <div className="hidden md:flex absolute bottom-6 -left-5 bg-white rounded-xl p-3 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] items-center gap-2.5 text-sm font-semibold animate-float-delayed">
                <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                  <Icon name="fa-chart-line" />
                </div>
                <span>32% weniger Fehlbestand</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Das Problem"
            title="Kennen Sie das?"
            subtitle="Viele Handwerksbetriebe k&auml;mpfen t&auml;glich mit den gleichen Herausforderungen bei der Materialverwaltung."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Die L&ouml;sung"
            title="Alles, was Ihr Lager braucht"
            subtitle="Craftly gibt Ihnen die Werkzeuge, um Ihr Material effizient zu verwalten &ndash; ohne Schulung, ohne Abo."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="In 3 Schritten"
            title="So funktioniert&apos;s"
            subtitle="Einfacher geht's nicht. In wenigen Minuten ist Ihr digitales Lager einsatzbereit."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-11 left-[15%] right-[15%] h-[3px] bg-gradient-to-r from-brand to-amber rounded" />
            {steps.map((step) => (
              <FadeUp key={step.title}>
                <div className="text-center relative z-10">
                  <div className="w-[88px] h-[88px] rounded-full bg-white border-[3px] border-brand flex items-center justify-center mx-auto mb-6 text-2xl text-brand">
                    <Icon name={step.icon} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="Ihre Vorteile"
            title="Warum Craftly?"
            subtitle="Wir haben Craftly f&uuml;r Handwerker gebaut, die keine Zeit f&uuml;r komplizierte Software haben."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsRow />

      {/* FAQ */}
      <section className="py-24 bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="H&auml;ufige Fragen"
            title="FAQ"
            subtitle="Haben Sie Fragen? Hier finden Sie Antworten auf die h&auml;ufigsten."
          />
          <FAQAccordion items={homeFAQ} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
