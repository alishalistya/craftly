"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import Icon from "@/components/ui/Icon";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 bg-gradient-to-br from-brand-light to-amber-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-brand mb-3">
              Bereit?
            </span>
            <h2 className="text-4xl font-extrabold mb-4">
              Starten Sie jetzt &ndash;<br />kostenlos und unverbindlich
            </h2>
            <p className="text-lg text-text-muted mb-9">
              Tragen Sie sich in unsere Warteliste ein und geh&ouml;ren Sie zu
              den Ersten, die Craftly nutzen k&ouml;nnen.
            </p>
            {!submitted ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-3 max-w-lg mx-auto flex-col sm:flex-row"
                >
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    aria-label="E-Mail-Adresse"
                    className="flex-1 px-5 py-3.5 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap px-8 py-3.5 rounded-lg font-semibold text-base bg-brand text-white shadow-[0_4px_14px_var(--color-brand-glow)] hover:bg-brand-dark hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    Jetzt starten
                  </button>
                </form>
                <p className="text-xs text-text-light mt-3">
                  Kein Spam. Jederzeit abmeldbar. Versprochen.
                </p>
              </>
            ) : (
              <div className="p-5 bg-emerald-100 rounded-xl text-emerald-800 font-semibold">
                <Icon name="fa-check-circle" className="mr-2" />
                Vielen Dank! Sie sind auf der Warteliste. Wir melden uns bald
                bei Ihnen.
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
