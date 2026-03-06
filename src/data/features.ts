export interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    icon: "fa-warehouse",
    title: "Lagerverwaltung",
    description:
      "Alle Materialien an einem Ort. Kategorien, Lagerorte und Mengen immer aktuell \u2013 auch vom Handy aus.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: "fa-cart-shopping",
    title: "Bestellungen",
    description:
      "Material geht zur Neige? Erstellen Sie Bestelllisten mit einem Klick und bestellen Sie direkt beim Gro\u00dfhandel.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: "fa-clipboard-check",
    title: "Inventur",
    description:
      "Digitale Inventur in Minuten statt Stunden. Scannen, z\u00e4hlen, fertig \u2013 mit automatischer Differenzberechnung.",
    gradient: "from-amber to-amber-dark",
  },
  {
    icon: "fa-chart-pie",
    title: "Bestandsoptimierung",
    description:
      "Intelligente Vorschl\u00e4ge f\u00fcr Mindestbest\u00e4nde. Nie wieder zu viel oder zu wenig Material auf Lager.",
    gradient: "from-green-500 to-green-600",
  },
];

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: "fa-clipboard-list",
    title: "Zettelwirtschaft im Lager",
    description:
      "Handgeschriebene Listen, die niemand mehr findet. Keiner wei\u00df genau, was noch da ist und was fehlt.",
  },
  {
    icon: "fa-truck",
    title: "Unn\u00f6tige Fahrten zum Gro\u00dfhandel",
    description:
      "Auf der Baustelle merken Sie: Material fehlt. Die Fahrt zum H\u00e4ndler kostet Zeit und Nerven.",
  },
  {
    icon: "fa-coins",
    title: "Geld in Regalen gebunden",
    description:
      "Zu viel bestellt, zu wenig verbraucht \u2013 teures Material verstaubt im Regal und bindet Kapital.",
  },
  {
    icon: "fa-ban",
    title: "Keine passende Software",
    description:
      "Bestehende L\u00f6sungen sind teuer, kompliziert und nicht f\u00fcr das Handwerk gemacht.",
  },
];

export interface Step {
  icon: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: "fa-user-plus",
    title: "Kostenlos registrieren",
    description:
      "Erstellen Sie in 30 Sekunden Ihr Konto. Keine Kreditkarte, kein Abo, kein Kleingedrucktes.",
  },
  {
    icon: "fa-boxes-stacked",
    title: "Lager anlegen",
    description:
      "F\u00fcgen Sie Ihre Materialien hinzu \u2013 manuell oder per Scan. Ordnen Sie Kategorien und Lagerorte zu.",
  },
  {
    icon: "fa-rocket",
    title: "Loslegen",
    description:
      "Verwalten Sie Ihr Lager von \u00fcberall. Buchen Sie Zu- und Abg\u00e4nge, erstellen Sie Bestellungen und behalten Sie den \u00dcberblick.",
  },
];

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export const benefits: Benefit[] = [
  {
    icon: "fa-gift",
    title: "100% kostenlos",
    description:
      "Keine versteckten Kosten. Kein Abo. Kein Premium-Modell. Einfach kostenlos.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: "fa-feather",
    title: "Kinderleicht",
    description:
      "Intuitive Bedienung ohne Schulung. Wenn Sie WhatsApp k\u00f6nnen, k\u00f6nnen Sie Craftly.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "fa-clock",
    title: "Zeitsparend",
    description:
      "Weniger Suchzeit, weniger Fahrten, weniger Stress. Mehr Zeit f\u00fcrs Handwerk.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-dark",
  },
  {
    icon: "fa-shield-halved",
    title: "DSGVO-konform",
    description:
      "Server in Deutschland. Ihre Daten geh\u00f6ren Ihnen \u2013 und bleiben in Deutschland.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "1 Mio.", label: "Handwerksbetriebe in Deutschland" },
  { value: "70%", label: "ohne digitale Lagerl\u00f6sung" },
  { value: "0 \u20ac", label: "kostet Craftly \u2013 f\u00fcr immer" },
];
