import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen von Craftly.",
};

export default function AGBPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8">
          Allgemeine Gesch&auml;ftsbedingungen
        </h1>

        <div className="space-y-8 text-text-muted">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              1. Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Gesch&auml;ftsbedingungen gelten f&uuml;r die
              Nutzung der Plattform Craftly, betrieben von der Craftly GmbH
              (i.Gr.), Musterstra&szlig;e 12, 80331 M&uuml;nchen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              2. Leistungsbeschreibung
            </h2>
            <p>
              Craftly stellt eine webbasierte Lagerverwaltung f&uuml;r
              Handwerksbetriebe zur Verf&uuml;gung. Die Grundfunktionen sind
              kostenlos nutzbar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              3. Registrierung und Nutzerkonto
            </h2>
            <p>
              F&uuml;r die Nutzung von Craftly ist eine Registrierung
              erforderlich. Der Nutzer ist verpflichtet, wahrheitsgem&auml;&szlig;e
              Angaben zu machen und seine Zugangsdaten vertraulich zu behandeln.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              4. Verf&uuml;gbarkeit
            </h2>
            <p>
              Craftly strebt eine m&ouml;glichst hohe Verf&uuml;gbarkeit an.
              Ein Anspruch auf unterbrechungsfreie Verf&uuml;gbarkeit besteht
              nicht. Wartungsarbeiten werden nach M&ouml;glichkeit vorab
              angek&uuml;ndigt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              5. Datenschutz
            </h2>
            <p>
              Es gelten die Bestimmungen unserer{" "}
              <a href="/datenschutz" className="text-brand underline">
                Datenschutzerkl&auml;rung
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              6. Haftung
            </h2>
            <p>
              Craftly haftet nur f&uuml;r Sch&auml;den, die auf Vorsatz oder
              grobe Fahrl&auml;ssigkeit zur&uuml;ckzuf&uuml;hren sind.
              Die Haftung f&uuml;r leichte Fahrl&auml;ssigkeit ist
              ausgeschlossen, soweit gesetzlich zul&auml;ssig.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              7. K&uuml;ndigung
            </h2>
            <p>
              Der Nutzer kann sein Konto jederzeit k&uuml;ndigen und seine
              Daten l&ouml;schen lassen. Es gibt keine Vertragsbindung oder
              K&uuml;ndigungsfristen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              8. Schlussbestimmungen
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland.
              Gerichtsstand ist M&uuml;nchen, soweit gesetzlich zul&auml;ssig.
            </p>
            <p className="mt-2">Stand: M&auml;rz 2026</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm">
            <strong className="text-amber-800">Hinweis:</strong>{" "}
            <span className="text-amber-700">
              Diese AGB sind ein Platzhalter und m&uuml;ssen vor dem
              produktiven Einsatz juristisch gepr&uuml;ft und erg&auml;nzt
              werden.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
