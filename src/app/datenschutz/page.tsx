import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Craftly – Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8">
          Datenschutzerkl&auml;rung
        </h1>

        <div className="space-y-8 text-text-muted">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Der Schutz Ihrer pers&ouml;nlichen Daten ist uns ein wichtiges
              Anliegen. Im Folgenden informieren wir Sie dar&uuml;ber, welche
              Daten wir erheben, wie wir sie verwenden und welche Rechte Sie
              haben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich f&uuml;r die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">
              Craftly GmbH (i.Gr.)
              <br />
              Musterstra&szlig;e 12
              <br />
              80331 M&uuml;nchen
              <br />
              E-Mail: datenschutz@craftly.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              3. Datenerfassung auf unserer Website
            </h2>
            <h3 className="text-base font-bold text-text-primary mt-4 mb-1">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns &uuml;bermittelt. Dies sind unter anderem
              Browsertyp und -version, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage.
            </p>
            <h3 className="text-base font-bold text-text-primary mt-4 mb-1">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
              f&uuml;r den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <h3 className="text-base font-bold text-text-primary mt-4 mb-1">
              Newsletter / Warteliste
            </h3>
            <p>
              Wenn Sie sich f&uuml;r unsere Warteliste anmelden, wird Ihre
              E-Mail-Adresse gespeichert, um Sie &uuml;ber den Produktstart zu
              informieren. Sie k&ouml;nnen sich jederzeit abmelden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              4. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft &uuml;ber Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>L&ouml;schung Ihrer Daten</li>
              <li>Einschr&auml;nkung der Verarbeitung</li>
              <li>Daten&uuml;bertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              5. Hosting
            </h2>
            <p>
              Diese Website wird auf Servern in Deutschland gehostet. Damit
              unterliegt die Datenverarbeitung den strengen Anforderungen der
              DSGVO und des BDSG.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              6. Cookies
            </h2>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. Es
              werden keine Tracking-Cookies oder Cookies f&uuml;r
              Werbezwecke eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              7. &Auml;nderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerkl&auml;rung
              gelegentlich anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht.
            </p>
            <p className="mt-2">
              Stand: M&auml;rz 2026
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm">
            <strong className="text-amber-800">Hinweis:</strong>{" "}
            <span className="text-amber-700">
              Diese Datenschutzerkl&auml;rung ist ein Platzhalter und muss
              vor dem produktiven Einsatz von einem Datenschutzbeauftragten
              oder Rechtsanwalt gepr&uuml;ft und erg&auml;nzt werden.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
