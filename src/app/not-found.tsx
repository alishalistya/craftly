import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="pt-36 pb-24 min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-8 text-4xl text-brand">
          <Icon name="fa-hard-hat" />
        </div>
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-text-secondary">
          Hier wird gerade gebaut
        </h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Die Seite, die Sie suchen, existiert leider nicht oder wurde
          verschoben. Aber keine Sorge &ndash; das Lager ist in Ordnung.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/">Zur Startseite</Button>
          <Button href="/kontakt" variant="outline">
            Kontakt
          </Button>
        </div>
      </div>
    </section>
  );
}
