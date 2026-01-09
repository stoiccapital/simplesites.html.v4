'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '../../../lp-system/components/Navbar';
import { Footer } from '../../../lp-system/components/Footer';
import { CenteredLayout } from '../../../lp-system/components/layouts/CenteredLayout';
import { getMessages } from '../../../lp-system/locales';
import { spacing, typography, globalBackground, ColorTheme } from '../../../lp-system/config/design-system';
import { DEFAULT_THEME } from '../../../lp-system/config/preferences';

export default function TermsPage() {
  const params = useParams();
  const locale = (params?.locale as 'en' | 'de') || 'en';
  const messages = getMessages(locale);
  const theme: ColorTheme = DEFAULT_THEME;

  const content = {
    de: {
      title: 'Allgemeine Geschäftsbedingungen (AGB)',
      lastUpdated: 'Stand: Januar 2026',
      sections: [
        {
          heading: '§ 1 Geltungsbereich',
          paragraphs: [
            'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Erbringung von Dienstleistungen im Bereich der Konzeption, Gestaltung, Entwicklung und Bereitstellung von Landing Pages und Websites (nachfolgend „Leistungen") durch die Fahrly Solutions LLC.',
            '',
            'Anbieter im Sinne dieser AGB ist:',
            '',
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            '(nachfolgend „Fahrly")',
            '',
            'Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne von § 14 BGB (B2B).',
            'Verträge mit Verbrauchern werden nicht geschlossen.',
            '',
            'Abweichende Bedingungen des Kunden finden keine Anwendung, es sei denn, Fahrly stimmt ihrer Geltung ausdrücklich schriftlich zu.',
          ],
        },
        {
          heading: '§ 2 Vertragsschluss',
          paragraphs: [
            'Ein Vertrag kommt zustande durch:',
            '',
            'Übermittlung einer Projektanfrage durch den Kunden (z. B. über ein Formular auf der Website),',
            'Bestätigung oder Angebotserstellung durch Fahrly per E-Mail, und',
            'ausdrückliche Annahme des Angebots durch den Kunden (z. B. per E-Mail).',
            '',
            'Ein automatischer Vertragsschluss durch bloßen Besuch der Website findet nicht statt.',
            '',
            'Der Kunde bestätigt mit Vertragsschluss, dass er berechtigt ist, im Namen seines Unternehmens zu handeln.',
          ],
        },
        {
          heading: '§ 3 Leistungsumfang',
          paragraphs: [
            'Fahrly erbringt Dienstleistungen im Bereich:',
            '',
            'Konzeption und Strukturierung von Landing Pages und Websites',
            'Design und technische Umsetzung (z. B. HTML/CSS/JS)',
            'Mehrsprachige Umsetzung (z. B. Deutsch / Englisch)',
            'Übergabe von statischen Website-Dateien oder Deployments',
            '',
            'Der konkrete Leistungsumfang ergibt sich ausschließlich aus dem individuell vereinbarten Angebot.',
            '',
            'Nicht geschuldet sind insbesondere, sofern nicht ausdrücklich vereinbart:',
            '',
            'fortlaufende Wartung oder Betreuung',
            'Hosting-Leistungen',
            'Suchmaschinenoptimierung (SEO)',
            'rechtliche Prüfung von Inhalten',
          ],
        },
        {
          heading: '§ 4 Preise und Zahlungsbedingungen',
          paragraphs: [
            'Alle Preise verstehen sich als Nettopreise zzgl. ggf. anfallender Steuern.',
            '',
            'Für Kunden innerhalb der EU mit gültiger Umsatzsteuer-Identifikationsnummer gilt das Reverse-Charge-Verfahren.',
            '',
            'Die Abrechnung erfolgt gemäß dem individuell vereinbarten Angebot, in der Regel:',
            '',
            'als einmalige Projektpauschale oder',
            'nach vereinbarten Meilensteinen.',
            '',
            'Zahlungen sind innerhalb der im Angebot genannten Frist ohne Abzug fällig.',
            '',
            'Bei Zahlungsverzug ist Fahrly berechtigt, weitere Leistungen bis zum Zahlungseingang zurückzuhalten.',
          ],
        },
        {
          heading: '§ 5 Mitwirkungspflichten des Kunden',
          paragraphs: [
            'Der Kunde verpflichtet sich, alle zur Leistungserbringung erforderlichen Inhalte, Informationen und Freigaben rechtzeitig bereitzustellen.',
            '',
            'Verzögerungen, die auf fehlende oder verspätete Mitwirkung des Kunden zurückzuführen sind, verlängern vereinbarte Lieferfristen entsprechend.',
          ],
        },
        {
          heading: '§ 6 Lieferzeiten und Abnahme',
          paragraphs: [
            'Vereinbarte Lieferzeiten sind Zieltermine, sofern nicht ausdrücklich als verbindlich bezeichnet.',
            '',
            'Nach Übergabe der Leistung hat der Kunde diese unverzüglich zu prüfen und etwaige Mängel innerhalb von 7 Tagen schriftlich mitzuteilen.',
            '',
            'Erfolgt innerhalb dieser Frist keine Rückmeldung, gilt die Leistung als abgenommen.',
          ],
        },
        {
          heading: '§ 7 Nutzungsrechte',
          paragraphs: [
            'Nach vollständiger Zahlung erhält der Kunde ein einfaches, zeitlich und räumlich unbegrenztes Nutzungsrecht an den gelieferten Arbeitsergebnissen.',
            '',
            'Quellcodes, Templates oder Systembestandteile, die Teil interner Frameworks von Fahrly sind, bleiben geistiges Eigentum von Fahrly, sofern nicht ausdrücklich anders vereinbart.',
          ],
        },
        {
          heading: '§ 8 Haftung',
          paragraphs: [
            'Fahrly haftet unbeschränkt bei:',
            '',
            'Vorsatz und grober Fahrlässigkeit',
            'Verletzung von Leben, Körper oder Gesundheit',
            '',
            'Bei einfacher Fahrlässigkeit haftet Fahrly nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vertragstypischen, vorhersehbaren Schaden.',
            '',
            'Eine Haftung für entgangenen Gewinn, ausgebliebene Einsparungen oder mittelbare Schäden ist ausgeschlossen.',
          ],
        },
        {
          heading: '§ 9 Datenschutz',
          paragraphs: [
            'Fahrly verarbeitet personenbezogene Daten ausschließlich im Einklang mit den geltenden Datenschutzgesetzen, insbesondere der DSGVO.',
            '',
            'Details ergeben sich aus der Datenschutzerklärung auf der Website.',
          ],
        },
        {
          heading: '§ 10 Änderungen der AGB',
          paragraphs: [
            'Fahrly behält sich vor, diese AGB anzupassen, sofern dies aus rechtlichen oder organisatorischen Gründen erforderlich ist.',
            '',
            'Änderungen werden dem Kunden rechtzeitig mitgeteilt.',
          ],
        },
        {
          heading: '§ 11 Anwendbares Recht & Gerichtsstand',
          paragraphs: [
            'Es gilt das Recht des Bundesstaates Delaware, USA, unter Ausschluss des UN-Kaufrechts.',
            '',
            'Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Dover, Delaware, USA.',
            '',
            'Zwingende Verbraucherschutzvorschriften finden keine Anwendung, da ausschließlich B2B-Verträge geschlossen werden.',
          ],
        },
        {
          heading: '§ 12 Kontakt',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            'E-Mail: support@fahrly.de',
            '',
            'WhatsApp: +49 171 841 1868',
            'Web: www.fahrly.de',
          ],
        },
      ],
    },
    en: {
      title: 'Terms and Conditions',
      lastUpdated: 'Last updated: January 2026',
      sections: [
        {
          heading: '§ 1 Scope of Application',
          paragraphs: [
            'These General Terms and Conditions (GTC) apply to all contracts for the provision of services in the field of conception, design, development, and provision of landing pages and websites (hereinafter "Services") by Fahrly Solutions LLC.',
            '',
            'Provider within the meaning of these GTC is:',
            '',
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            '(hereinafter "Fahrly")',
            '',
            'These GTC apply exclusively to businesses within the meaning of § 14 BGB (B2B).',
            'Contracts with consumers are not concluded.',
            '',
            'Deviating terms and conditions of the customer do not apply unless Fahrly expressly agrees to their validity in writing.',
          ],
        },
        {
          heading: '§ 2 Conclusion of Contract',
          paragraphs: [
            'A contract is concluded by:',
            '',
            'Submission of a project inquiry by the customer (e.g., via a form on the website),',
            'Confirmation or preparation of an offer by Fahrly by email, and',
            'Express acceptance of the offer by the customer (e.g., by email).',
            '',
            'No automatic contract conclusion occurs through mere visit to the website.',
            '',
            'The customer confirms upon contract conclusion that he is authorized to act on behalf of his company.',
          ],
        },
        {
          heading: '§ 3 Scope of Services',
          paragraphs: [
            'Fahrly provides services in the field of:',
            '',
            'Conception and structuring of landing pages and websites',
            'Design and technical implementation (e.g., HTML/CSS/JS)',
            'Multilingual implementation (e.g., German / English)',
            'Handover of static website files or deployments',
            '',
            'The specific scope of services is determined exclusively by the individually agreed offer.',
            '',
            'Not included are in particular, unless expressly agreed:',
            '',
            'Ongoing maintenance or support',
            'Hosting services',
            'Search engine optimization (SEO)',
            'Legal review of content',
          ],
        },
        {
          heading: '§ 4 Prices and Payment Terms',
          paragraphs: [
            'All prices are net prices plus applicable taxes.',
            '',
            'For customers within the EU with a valid VAT identification number, the reverse charge procedure applies.',
            '',
            'Billing is carried out according to the individually agreed offer, typically:',
            '',
            'as a one-time project flat rate or',
            'according to agreed milestones.',
            '',
            'Payments are due within the period specified in the offer without deduction.',
            '',
            'In case of payment default, Fahrly is entitled to withhold further services until payment is received.',
          ],
        },
        {
          heading: '§ 5 Customer Cooperation Obligations',
          paragraphs: [
            'The customer is obligated to provide all content, information, and approvals required for service provision in a timely manner.',
            '',
            'Delays caused by missing or delayed cooperation by the customer extend agreed delivery deadlines accordingly.',
          ],
        },
        {
          heading: '§ 6 Delivery Times and Acceptance',
          paragraphs: [
            'Agreed delivery times are target dates unless expressly designated as binding.',
            '',
            'After handover of the service, the customer must examine it immediately and report any defects in writing within 7 days.',
            '',
            'If no feedback is received within this period, the service is deemed accepted.',
          ],
        },
        {
          heading: '§ 7 Usage Rights',
          paragraphs: [
            'After full payment, the customer receives a simple, temporally and spatially unlimited right of use to the delivered work results.',
            '',
            'Source codes, templates, or system components that are part of internal frameworks of Fahrly remain intellectual property of Fahrly, unless expressly agreed otherwise.',
          ],
        },
        {
          heading: '§ 8 Liability',
          paragraphs: [
            'Fahrly is liable without limitation for:',
            '',
            'Intent and gross negligence',
            'Injury to life, body, or health',
            '',
            'In case of simple negligence, Fahrly is only liable for violation of essential contractual obligations and limited to contract-typical, foreseeable damage.',
            '',
            'Liability for lost profits, unrealized savings, or indirect damages is excluded.',
          ],
        },
        {
          heading: '§ 9 Data Protection',
          paragraphs: [
            'Fahrly processes personal data exclusively in accordance with applicable data protection laws, in particular the GDPR.',
            '',
            'Details are set out in the Privacy Policy on the website.',
          ],
        },
        {
          heading: '§ 10 Changes to the GTC',
          paragraphs: [
            'Fahrly reserves the right to adjust these GTC if this is necessary for legal or organizational reasons.',
            '',
            'Changes will be communicated to the customer in a timely manner.',
          ],
        },
        {
          heading: '§ 11 Applicable Law & Jurisdiction',
          paragraphs: [
            'The law of the State of Delaware, USA, applies, excluding the UN Convention on Contracts for the International Sale of Goods.',
            '',
            'The place of jurisdiction for all disputes arising from or in connection with this contract is Dover, Delaware, USA.',
            '',
            'Mandatory consumer protection regulations do not apply, as only B2B contracts are concluded.',
          ],
        },
        {
          heading: '§ 12 Contact',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            'Email: support@fahrly.de',
            '',
            'WhatsApp: +49 171 841 1868',
            'Web: www.fahrly.de',
          ],
        },
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <div className={`min-h-screen ${globalBackground.neutral.darkest}`}>
      <Navbar theme={theme} labels={messages.navbar} locale={locale} />
      <main className={spacing.section.y['2xl']}>
        <CenteredLayout align="left">
          <div className={`max-w-2xl mx-auto ${spacing.block.y.lg}`}>
            <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
              {pageContent.title}
            </h1>
            <p className={`${typography.body} text-text-secondary ${spacing.block.y.lg}`}>
              {pageContent.lastUpdated}
            </p>
            {pageContent.sections.length > 0 ? (
              pageContent.sections.map((section, idx) => (
                <div key={idx} className={spacing.block.y.lg}>
                  <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.sm}`}>
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, pIdx) => (
                    paragraph ? (
                      <p key={pIdx} className={`${typography.body} text-text-secondary ${pIdx < section.paragraphs.length - 1 ? spacing.element.y.xs : ''}`}>
                        {paragraph}
                      </p>
                    ) : (
                      <br key={pIdx} />
                    )
                  ))}
                </div>
              ))
            ) : (
              <p className={`${typography.body} text-text-secondary`}>
                {locale === 'de' 
                  ? 'Die Inhalte der Allgemeinen Geschäftsbedingungen werden hier veröffentlicht, sobald sie verfügbar sind.'
                  : 'Terms and Conditions content will be published here once available.'}
              </p>
            )}
          </div>
        </CenteredLayout>
      </main>
      <Footer theme={theme} labels={messages.footer} locale={locale} />
    </div>
  );
}

