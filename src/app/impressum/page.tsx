import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Craftly – Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-text-muted">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p>
              Craftly GmbH (i.Gr.)
              <br />
              Musterstra&szlig;e 12
              <br />
              80331 M&uuml;nchen
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Kontakt
            </h2>
            <p>
              E-Mail: hallo@craftly.de
              <br />
              Telefon: +49 (0) 89 123 456 78
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Vertreten durch
            </h2>
            <p>[Name der Gesch&auml;ftsf&uuml;hrung – bitte erg&auml;nzen]</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: Amtsgericht M&uuml;nchen
              <br />
              Registernummer: [bitte erg&auml;nzen]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a
              Umsatzsteuergesetz:
              <br />
              [bitte erg&auml;nzen]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Verantwortlich f&uuml;r den Inhalt gem&auml;&szlig; &sect; 55
              Abs. 2 RSt
            </h2>
            <p>
              [Name – bitte erg&auml;nzen]
              <br />
              Musterstra&szlig;e 12
              <br />
              80331 M&uuml;nchen
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Streitschlichtung
            </h2>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm">
            <strong className="text-amber-800">Hinweis:</strong>{" "}
            <span className="text-amber-700">
              Die mit [bitte erg&auml;nzen] markierten Felder m&uuml;ssen mit
              den tats&auml;chlichen Unternehmensdaten ersetzt werden.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
