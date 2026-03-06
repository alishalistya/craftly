export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Kostenlos",
    price: "0 \u20ac",
    priceNote: "f\u00fcr immer",
    description:
      "Alles, was ein kleiner Handwerksbetrieb f\u00fcr die Lagerverwaltung braucht.",
    features: [
      "Unbegrenzte Materialien",
      "Lagerverwaltung & Kategorien",
      "Bestelllisten erstellen",
      "Digitale Inventur",
      "Barcode-Scanner",
      "Nutzung auf allen Ger\u00e4ten",
      "DSGVO-konform",
    ],
    cta: "Kostenlos starten",
    highlighted: true,
    badge: "Empfohlen",
  },
  {
    name: "Early Access",
    price: "0 \u20ac",
    priceNote: "w\u00e4hrend der Fr\u00fchphase",
    description:
      "Zugang zu neuen Funktionen vor allen anderen \u2013 und Ihr Feedback z\u00e4hlt.",
    features: [
      "Alle Kostenlos-Features",
      "Neue Funktionen vorab testen",
      "Direkter Draht zum Team",
      "Einfluss auf die Produktentwicklung",
      "Priorisierter Support",
    ],
    cta: "Zugang anfragen",
    highlighted: false,
  },
  {
    name: "Individuelle Einf\u00fchrung",
    price: "Auf Anfrage",
    priceNote: "",
    description:
      "Pers\u00f6nliche Unterst\u00fctzung bei der Einrichtung f\u00fcr gr\u00f6\u00dfere Betriebe.",
    features: [
      "Alle Kostenlos-Features",
      "Pers\u00f6nliches Onboarding",
      "Daten-Import Ihrer Materiallisten",
      "Individuelle Einrichtung",
      "Schulung f\u00fcr Ihr Team",
      "Dedizierter Ansprechpartner",
    ],
    cta: "Kontakt aufnehmen",
    highlighted: false,
  },
];
