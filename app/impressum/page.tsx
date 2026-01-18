import { SITE_CONFIG, CONTACT_INFO } from "@/lib/config";

export const metadata = {
    title: "Impressum",
    description: "Impressum und rechtliche Informationen",
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black font-heading uppercase mb-12">
                    Impressum
                </h1>

                <div className="space-y-10 text-neutral-300">
                    {/* Angaben gemäß § 5 TMG */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Angaben gemäß § 5 TMG
                        </h2>

                        <p className="leading-relaxed">
                            <strong>ManualDuckbass – Emanuel Priss</strong>
                            <br />
                            DJ &amp; Producer
                            <br />
                            <br />

                            <strong>Anschrift:</strong>
                            <br />
                            Im Meierbruch 2
                            <br />
                            32756 Detmold
                            <br />
                            Deutschland
                            <br />
                            <br />

                            <strong>Kontakt:</strong>
                            <br />
                            E-Mail:{" "}
                            <a
                                href="mailto:manualduckbass@hotmail.com"
                                className="text-white hover:underline"
                            >
                                manualduckbass@hotmail.com
                            </a>
                        </p>
                    </section>

                    {/* Verantwortlich für den Inhalt */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                        </h2>
                        <p className="leading-relaxed">
                            Emanuel Priss
                            <br />
                            Im Meierbruch 2
                            <br />
                            32756 Detmold
                        </p>
                    </section>

                    {/* Haftungsausschluss */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Haftungsausschluss
                        </h2>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                            Haftung für Inhalte
                        </h3>
                        <p className="leading-relaxed">
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
                            wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                            oder gespeicherte fremde Informationen zu überwachen oder nach
                            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                            hinweisen.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                            Haftung für Links
                        </h3>
                        <p className="leading-relaxed">
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                            erkennbar.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                            Urheberrecht
                        </h3>
                        <p className="leading-relaxed">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                            kommerziellen Gebrauch gestattet.
                        </p>
                    </section>

                    {/* Datenschutz (Kurzinfo) */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Datenschutz</h2>
                        <p className="leading-relaxed">
                            Die Nutzung dieser Website ist in der Regel ohne Angabe
                            personenbezogener Daten möglich. Soweit auf unseren Seiten
                            personenbezogene Daten erhoben werden, erfolgt dies – soweit
                            möglich – stets auf freiwilliger Basis. Diese Daten werden ohne
                            Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                        </p>
                        <p className="leading-relaxed mt-4">
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
                            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
                            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                            nicht möglich.
                        </p>
                    </section>

                    {/* Online-Streitbeilegung */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Online-Streitbeilegung
                        </h2>
                        <p className="leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit:{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                https://ec.europa.eu/consumers/odr
                            </a>
                        </p>
                        <p className="leading-relaxed mt-4">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                            vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    {/* Website Development */}
                    <section className="pt-8 border-t border-neutral-800">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Website-Entwicklung
                        </h2>
                        <p className="leading-relaxed">
                            Programmiert mit ❤️ von{" "}
                            <a
                                href={`mailto:${CONTACT_INFO.developer.email}`}
                                className="text-white hover:underline font-medium"
                            >
                                {CONTACT_INFO.developer.name}
                            </a>
                        </p>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="mt-12">
                    <a
                        href="/"
                        className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Zurück zur Startseite
                    </a>
                </div>
            </div>
        </main>
    );
}
