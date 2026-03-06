export interface Trade {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  heroDescription: string;
  problems: { title: string; description: string }[];
  materials: string[];
  benefits: string[];
}

export const trades: Trade[] = [
  {
    slug: "elektriker",
    name: "Elektroinstallation",
    shortName: "Elektriker",
    icon: "fa-bolt",
    color: "from-blue-500 to-blue-600",
    heroDescription:
      "Kabel, Klemmen, Sicherungen, Z\u00e4hler \u2013 im Elektrohandwerk gibt es hunderte Kleinteile, die verwaltet werden m\u00fcssen. Craftly hilft Ihnen, den \u00dcberblick zu behalten.",
    problems: [
      {
        title: "Unz\u00e4hlige Kleinteile",
        description:
          "Klemmen, Dosen, Schalter, Sicherungen \u2013 die Vielfalt an Elektromaterial macht eine \u00dcbersicht fast unm\u00f6glich.",
      },
      {
        title: "Material auf Baustellen verteilt",
        description:
          "Material liegt auf verschiedenen Baustellen und im Lager. Wer wei\u00df schon, was genau wo ist?",
      },
      {
        title: "Teure Kabel richtig kalkulieren",
        description:
          "Kupferkabel sind teuer. Ohne genaue Bestandsf\u00fchrung wird zu viel bestellt oder es fehlt auf der Baustelle.",
      },
    ],
    materials: [
      "NYM-J Kabel (verschiedene Querschnitte)",
      "Leitungsschutzschalter",
      "Schalterdosen & Abzweigdosen",
      "Klemmen & Verbinder",
      "Schalter & Steckdosen",
      "Kabelkan\u00e4le & Rohre",
      "Z\u00e4hlerschr\u00e4nke & Verteiler",
      "LED-Leuchtmittel",
    ],
    benefits: [
      "Kabelrest-Verwaltung mit L\u00e4ngenangaben",
      "Schnelle Inventur per Barcode-Scan",
      "Mindestbestand-Warnung f\u00fcr Verbrauchsmaterial",
      "Bestelllisten f\u00fcr den Elektrogro\u00dfhandel",
    ],
  },
  {
    slug: "shk",
    name: "Sanit\u00e4r, Heizung, Klima",
    shortName: "SHK",
    icon: "fa-faucet-drip",
    color: "from-cyan-500 to-cyan-600",
    heroDescription:
      "Rohre, Fittings, Ventile, Kessel \u2013 SHK-Betriebe haben ein breites Materialsortiment. Craftly bringt Ordnung in Ihr Lager und auf die Baustelle.",
    problems: [
      {
        title: "Breites Sortiment",
        description:
          "Von Kupferrohren \u00fcber Fittings bis zu Heizk\u00f6rpern \u2013 SHK-Betriebe verwalten hunderte verschiedene Artikel.",
      },
      {
        title: "Saisonale Schwankungen",
        description:
          "Im Winter Heizungsmaterial, im Sommer Klimaanlagen \u2013 der Bedarf schwankt stark und muss geplant werden.",
      },
      {
        title: "Lieferzeiten bei Spezialmaterial",
        description:
          "Bestimmte Ventile oder Kessel haben lange Lieferzeiten. Ohne Planung steht die Baustelle still.",
      },
    ],
    materials: [
      "Kupfer- und Kunststoffrohre",
      "Fittings & Verschraubungen",
      "Thermostatventile",
      "Heizk\u00f6rper",
      "Warmwasserspeicher",
      "Dichtungen & Hanf",
      "Armaturen & Mischer",
      "Pumpen & Regler",
    ],
    benefits: [
      "Materialverwaltung nach Bauprojekt",
      "Rohrl\u00e4ngen und St\u00fcckzahl-Tracking",
      "Lieferanten-Zuordnung je Artikel",
      "Saisonale Bestandsplanung",
    ],
  },
  {
    slug: "maler",
    name: "Maler & Lackierer",
    shortName: "Maler",
    icon: "fa-paint-roller",
    color: "from-rose-500 to-rose-600",
    heroDescription:
      "Farben, Lacke, Grundierungen, Werkzeuge \u2013 im Malerhandwerk kommt es auf die richtigen Materialien in der richtigen Menge an. Craftly hilft bei der \u00dcbersicht.",
    problems: [
      {
        title: "Farbvorr\u00e4te im Blick behalten",
        description:
          "Welche Farben sind noch da? Welcher Farbton wurde beim letzten Auftrag verwendet? Ohne System wird das schnell un\u00fcbersichtlich.",
      },
      {
        title: "Verbrauchsmaterial nachbestellen",
        description:
          "Rollen, Pinsel, Abdeckfolien \u2013 das Verbrauchsmaterial geht schnell aus, wenn niemand den Bestand pr\u00fcft.",
      },
      {
        title: "Reste verwerten statt wegwerfen",
        description:
          "Angebrochene Farben und Lacke k\u00f6nnen oft noch verwendet werden \u2013 wenn man wei\u00df, dass sie noch da sind.",
      },
    ],
    materials: [
      "Wandfarben & Dispersionen",
      "Lacke & Lasuren",
      "Grundierungen & Haftgrund",
      "Spachtelmasse & F\u00fcller",
      "Abdeckmaterial & Folien",
      "Rollen & Pinsel",
      "Schleifpapier & -vliese",
      "Silikon & Acryl",
    ],
    benefits: [
      "Farbreste mit Mengenangabe tracken",
      "Verbrauchsmaterial automatisch nachbestellen",
      "Farbton-Zuordnung je Kunde/Projekt",
      "Material-Kalkulation pro Auftrag",
    ],
  },
  {
    slug: "schreiner",
    name: "Schreiner & Tischler",
    shortName: "Schreiner",
    icon: "fa-hammer",
    color: "from-amber to-amber-dark",
    heroDescription:
      "Holz, Platten, Beschl\u00e4ge, Leime \u2013 in der Schreinerei ist die Materialvielfalt gro\u00df. Craftly hilft Ihnen, Ihr Lager effizient zu verwalten.",
    problems: [
      {
        title: "Holz- und Plattenvorr\u00e4te",
        description:
          "Welche Platten sind noch auf Lager? Welche Ma\u00dfe? Ohne \u00dcbersicht werden unn\u00f6tig neue Platten bestellt.",
      },
      {
        title: "Vielf\u00e4ltige Beschl\u00e4ge",
        description:
          "Scharniere, Griffe, Ausz\u00fcge \u2013 die Beschlagvielfalt ist enorm und Fehlbest\u00e4nde bremsen die Fertigung.",
      },
      {
        title: "Verschnitt minimieren",
        description:
          "Reste von Platten und Massivholz k\u00f6nnen noch verwendet werden \u2013 wenn man wei\u00df, was vorhanden ist.",
      },
    ],
    materials: [
      "Massivholz (verschiedene Holzarten)",
      "Holzplatten (MDF, Multiplex, Span)",
      "Scharniere & Beschl\u00e4ge",
      "Schubladenausz\u00fcge",
      "Holzleim & Montagekleber",
      "Schrauben & D\u00fcbel",
      "Kantenumleimer",
      "Oberfl\u00e4chen\u00f6le & Wachse",
    ],
    benefits: [
      "Plattenreste mit Ma\u00dfen verwalten",
      "Beschlag-Sortiment im Blick",
      "Zuordnung zu Kundenauftr\u00e4gen",
      "Bestellvorschl\u00e4ge auf Basis vergangener Auftr\u00e4ge",
    ],
  },
  {
    slug: "allgemein",
    name: "Allgemeine Handwerksbetriebe",
    shortName: "Alle Gewerke",
    icon: "fa-wrench",
    color: "from-gray-600 to-gray-700",
    heroDescription:
      "Egal welches Gewerk \u2013 wo Material verwaltet werden muss, hilft Craftly. Einfach, digital und kostenlos f\u00fcr jeden Handwerksbetrieb.",
    problems: [
      {
        title: "Kein System, das passt",
        description:
          "Excel ist umst\u00e4ndlich, ERP zu komplex. Eine einfache L\u00f6sung f\u00fcr das Handwerk fehlt.",
      },
      {
        title: "Materialengp\u00e4sse",
        description:
          "Wenn Material fehlt, steht die Baustelle still. Das kostet Zeit, Geld und Nerven.",
      },
      {
        title: "Keine digitale L\u00f6sung im Betrieb",
        description:
          "Viele Betriebe arbeiten noch mit Papier und Bauchgef\u00fchl. Die Digitalisierung scheitert an der Komplexit\u00e4t.",
      },
    ],
    materials: [
      "Verbrauchsmaterial aller Art",
      "Werkzeuge & Maschinen",
      "Befestigungsmaterial",
      "Dichtungsmaterial",
      "Schutzbekleidung",
      "Reinigungsmittel",
      "B\u00fcromaterial",
      "Fahrzeugausstattung",
    ],
    benefits: [
      "Flexibel f\u00fcr jedes Gewerk anpassbar",
      "Einfacher Einstieg ohne Vorkenntnisse",
      "Zentrale Materialverwaltung f\u00fcr den ganzen Betrieb",
      "Bestellprozesse vereinfachen",
    ],
  },
];
