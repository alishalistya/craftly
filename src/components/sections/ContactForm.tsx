"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-8 bg-emerald-50 rounded-2xl text-center border border-emerald-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-2xl text-emerald-600">
          <Icon name="fa-check" />
        </div>
        <h3 className="text-xl font-bold mb-2">Nachricht gesendet!</h3>
        <p className="text-text-muted">
          Vielen Dank f&uuml;r Ihre Nachricht. Wir melden uns in der Regel
          innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Ihr Name"
            className="w-full px-4 py-3 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="ihre@email.de"
            className="w-full px-4 py-3 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-1.5">
          Betrieb <span className="text-text-light font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Name Ihres Betriebs"
          className="w-full px-4 py-3 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-1.5">
          Betreff
        </label>
        <select
          id="subject"
          className="w-full px-4 py-3 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand bg-white"
        >
          <option value="allgemein">Allgemeine Anfrage</option>
          <option value="demo">Demo anfragen</option>
          <option value="support">Technischer Support</option>
          <option value="partnerschaft">Partnerschaft</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
          Nachricht
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Wie k&ouml;nnen wir Ihnen helfen?"
          className="w-full px-4 py-3 border-2 border-border rounded-lg text-base outline-none transition-colors focus:border-brand resize-y"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          required
          className="mt-1 accent-brand"
        />
        <label htmlFor="privacy" className="text-sm text-text-muted">
          Ich habe die{" "}
          <a href="/datenschutz" className="text-brand underline">
            Datenschutzerkl&auml;rung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.
        </label>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-3.5 rounded-lg font-semibold text-base bg-brand text-white shadow-[0_4px_14px_var(--color-brand-glow)] hover:bg-brand-dark hover:-translate-y-0.5 transition-all cursor-pointer"
      >
        Nachricht senden
      </button>
    </form>
  );
}
