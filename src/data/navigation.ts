export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  { label: "Produkt", href: "/produkt" },
  {
    label: "Lösungen",
    href: "/loesungen",
    children: [
      { label: "Elektriker", href: "/loesungen/elektriker" },
      { label: "SHK (Sanitär, Heizung, Klima)", href: "/loesungen/shk" },
      { label: "Maler", href: "/loesungen/maler" },
      { label: "Schreiner & Tischler", href: "/loesungen/schreiner" },
      { label: "Allgemeine Betriebe", href: "/loesungen/allgemein" },
    ],
  },
  { label: "Preise", href: "/preise" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Blog", href: "/blog" },
];

export const footerNavSections = [
  {
    title: "Produkt",
    links: [
      { label: "Features", href: "/produkt" },
      { label: "Lagerverwaltung", href: "/produkt#lagerverwaltung" },
      { label: "Bestellungen", href: "/produkt#bestellungen" },
      { label: "Inventur", href: "/produkt#inventur" },
      { label: "Preise", href: "/preise" },
    ],
  },
  {
    title: "Lösungen",
    links: [
      { label: "Elektriker", href: "/loesungen/elektriker" },
      { label: "SHK", href: "/loesungen/shk" },
      { label: "Maler", href: "/loesungen/maler" },
      { label: "Schreiner & Tischler", href: "/loesungen/schreiner" },
      { label: "Alle Gewerke", href: "/loesungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Blog", href: "/blog" },
      { label: "Karriere", href: "/karriere" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];
