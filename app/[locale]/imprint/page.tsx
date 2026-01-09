'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '../../../lp-system/components/Navbar';
import { Footer } from '../../../lp-system/components/Footer';
import { CenteredLayout } from '../../../lp-system/components/layouts/CenteredLayout';
import { getMessages } from '../../../lp-system/locales';
import { spacing, typography, globalBackground, ColorTheme } from '../../../lp-system/config/design-system';
import { DEFAULT_THEME } from '../../../lp-system/config/preferences';

export default function ImprintPage() {
  const params = useParams();
  const locale = (params?.locale as 'en' | 'de') || 'en';
  const messages = getMessages(locale);
  const theme: ColorTheme = DEFAULT_THEME;

  const content = {
    de: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 TMG',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
          ],
        },
        {
          heading: 'Kontakt',
          paragraphs: [
            'E-Mail: support@fahrly.de',
            'WhatsApp: +49 171 841 1868',
          ],
        },
        {
          heading: 'Vertretungsberechtigte Person',
          paragraphs: [
            'Adam Belamri',
            '(verantwortlich für den Inhalt nach § 55 Abs. 2 RStV)',
          ],
        },
        {
          heading: 'EU-Streitschlichtung',
          paragraphs: [
            'Plattform der EU-Kommission zur Online-Streitbeilegung:',
            'https://ec.europa.eu/consumers/odr/',
            '',
            'Unsere E-Mail-Adresse finden Sie oben.',
          ],
        },
        {
          heading: 'Verbraucherstreitbeilegung',
          paragraphs: [
            'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          ],
        },
      ],
    },
    en: {
      title: 'Legal Notice',
      sections: [
        {
          heading: 'Information pursuant to § 5 TMG',
          paragraphs: [
            'Fahrly Solutions LLC',
            '1111b South Governors Avenue, STE 40935',
            'Dover, DE 19904',
            'United States',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Email: support@fahrly.de',
            'WhatsApp: +49 171 841 1868',
          ],
        },
        {
          heading: 'Authorized representative',
          paragraphs: [
            'Adam Belamri',
            '(Responsible for content pursuant to § 55 para. 2 RStV)',
          ],
        },
        {
          heading: 'EU dispute resolution',
          paragraphs: [
            'Platform of the EU Commission for online dispute resolution:',
            'https://ec.europa.eu/consumers/odr/',
            '',
            'Our email address is listed above.',
          ],
        },
        {
          heading: 'Consumer dispute resolution',
          paragraphs: [
            'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
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

