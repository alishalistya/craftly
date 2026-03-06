export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "lagerverwaltung-handwerk-digital",
    title: "Lagerverwaltung im Handwerk: Warum digital besser ist",
    excerpt:
      "Zettelwirtschaft war gestern. Erfahren Sie, warum immer mehr Handwerksbetriebe ihre Lagerverwaltung digitalisieren und welche Vorteile das bringt.",
    category: "Ratgeber",
    date: "2026-02-28",
    readTime: "5 Min.",
  },
  {
    slug: "inventur-tipps-handwerker",
    title: "Inventur im Handwerksbetrieb: 5 Tipps f\u00fcr weniger Aufwand",
    excerpt:
      "Die j\u00e4hrliche Inventur muss kein Albtraum sein. Mit diesen f\u00fcnf einfachen Tipps wird die Bestandsaufnahme schnell und stressfrei.",
    category: "Praxistipps",
    date: "2026-02-15",
    readTime: "4 Min.",
  },
  {
    slug: "materialkosten-senken",
    title: "Materialkosten senken: So vermeiden Sie \u00dcberbest\u00e4nde",
    excerpt:
      "Zu viel Material im Lager bindet Kapital. Wir zeigen, wie Sie mit einfachen Ma\u00dfnahmen Ihre Lagerbest\u00e4nde optimieren und bares Geld sparen.",
    category: "Finanzen",
    date: "2026-01-30",
    readTime: "6 Min.",
  },
  {
    slug: "digitalisierung-handwerk-2026",
    title: "Digitalisierung im Handwerk 2026: Wo stehen wir?",
    excerpt:
      "Eine \u00dcbersicht \u00fcber den Stand der Digitalisierung im deutschen Handwerk. Welche Tools nutzen Betriebe und wo gibt es noch Nachholbedarf?",
    category: "Branche",
    date: "2026-01-18",
    readTime: "7 Min.",
  },
  {
    slug: "bestellprozesse-optimieren",
    title: "Bestellprozesse im Handwerk einfach optimieren",
    excerpt:
      "Vom Erkennen des Bedarfs bis zur Lieferung \u2013 so gestalten Sie Ihre Bestellprozesse effizienter und vermeiden unn\u00f6tige Fahrten zum Gro\u00dfhandel.",
    category: "Praxistipps",
    date: "2026-01-05",
    readTime: "5 Min.",
  },
];
