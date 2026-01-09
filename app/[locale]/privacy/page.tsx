'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '../../../lp-system/components/Navbar';
import { Footer } from '../../../lp-system/components/Footer';
import { CenteredLayout } from '../../../lp-system/components/layouts/CenteredLayout';
import { getMessages } from '../../../lp-system/locales';
import { spacing, typography, globalBackground, ColorTheme } from '../../../lp-system/config/design-system';
import { DEFAULT_THEME } from '../../../lp-system/config/preferences';

export default function PrivacyPage() {
  const params = useParams();
  const locale = (params?.locale as 'en' | 'de') || 'en';
  const messages = getMessages(locale);
  const theme: ColorTheme = DEFAULT_THEME;

  const content = {
    de: {
      title: 'Datenschutzerklärung',
      lastUpdated: 'Stand: November 2025',
      sections: [
        {
          heading: '1. Verantwortlicher',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            'E-Mail: support@fahrly.de',
            'WhatsApp: +49 171 841 1868',
          ],
        },
        {
          heading: '2. Verarbeitung personenbezogener Daten',
          paragraphs: [
            'Wir verarbeiten personenbezogene Daten ausschließlich gemäß der DSGVO.',
            '',
            'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO zur Bereitstellung unserer Dienste, zur Kommunikation sowie zur Erfüllung gesetzlicher Pflichten.',
          ],
        },
        {
          heading: '3. Hosting & Speicherung',
          paragraphs: [
            'Unsere Systeme werden auf Servern innerhalb der EU betrieben.',
            'Alle Übertragungen erfolgen SSL-verschlüsselt.',
          ],
        },
        {
          heading: '4. Weitergabe an Dritte',
          paragraphs: [
            'Daten werden nur weitergegeben an:',
            '- technische Dienstleister (z. B. Hosting)',
            '- wenn gesetzlich vorgeschrieben',
            '- oder mit Ihrer Einwilligung',
          ],
        },
        {
          heading: '5. Ihre Rechte',
          paragraphs: [
            'Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch.',
            'Anfragen bitte an: support@fahrly.de',
          ],
        },
        {
          heading: '6. Cookies',
          paragraphs: [
            'Wir verwenden nur technisch notwendige Cookies.',
          ],
        },
        {
          heading: '7. Speicherdauer',
          paragraphs: [
            'Daten werden nur so lange gespeichert, wie erforderlich oder gesetzlich vorgeschrieben.',
          ],
        },
        {
          heading: '8. Kontakt Datenschutz',
          paragraphs: [
            'Fahrly Solutions LLC',
            'E-Mail: support@fahrly.de',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: November 2025',
      sections: [
        {
          heading: '1. Data Controller',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
            '',
            'Email: support@fahrly.de',
            'WhatsApp: +49 171 841 1868',
          ],
        },
        {
          heading: '2. Processing of Personal Data',
          paragraphs: [
            'We process personal data exclusively in accordance with the GDPR.',
            '',
            'Processing is based on Art. 6 para. 1 GDPR for the provision of our services, for communication, and for the fulfillment of legal obligations.',
          ],
        },
        {
          heading: '3. Hosting & Storage',
          paragraphs: [
            'Our systems are operated on servers within the EU.',
            'All transmissions are SSL-encrypted.',
          ],
        },
        {
          heading: '4. Disclosure to Third Parties',
          paragraphs: [
            'Data is only disclosed to:',
            '- technical service providers (e.g., hosting)',
            '- if legally required',
            '- or with your consent',
          ],
        },
        {
          heading: '5. Your Rights',
          paragraphs: [
            'Information, correction, deletion, restriction, data portability, objection.',
            'Please send inquiries to: support@fahrly.de',
          ],
        },
        {
          heading: '6. Cookies',
          paragraphs: [
            'We only use technically necessary cookies.',
          ],
        },
        {
          heading: '7. Storage Duration',
          paragraphs: [
            'Data is only stored for as long as necessary or legally required.',
          ],
        },
        {
          heading: '8. Privacy Contact',
          paragraphs: [
            'Fahrly Solutions LLC',
            'Email: support@fahrly.de',
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
            {pageContent.sections.map((section, idx) => (
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
            ))}
          </div>
        </CenteredLayout>
      </main>
      <Footer theme={theme} labels={messages.footer} locale={locale} />
    </div>
  );
}

