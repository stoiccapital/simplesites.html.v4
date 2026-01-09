'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '../../../lp-system/components/Navbar';
import { Footer } from '../../../lp-system/components/Footer';
import { CenteredLayout } from '../../../lp-system/components/layouts/CenteredLayout';
import { getMessages } from '../../../lp-system/locales';
import { spacing, typography, components, globalBackground, ColorTheme } from '../../../lp-system/config/design-system';
import { DEFAULT_THEME } from '../../../lp-system/config/preferences';

export default function ThanksPage() {
  const params = useParams();
  const locale = (params?.locale as 'en' | 'de') || 'en';
  const messages = getMessages(locale);
  const theme: ColorTheme = DEFAULT_THEME;

  const copy = {
    heading: locale === 'en' ? 'Request received' : 'Anfrage erhalten',
    body: locale === 'en'
      ? "Thanks — we'll review your details and reply within 24 hours."
      : 'Vielen Dank — wir werden Ihre Angaben prüfen und innerhalb von 24 Stunden antworten.',
    backToHome: locale === 'en' ? 'Back to home' : 'Zurück zur Startseite',
  };

  return (
    <div className={`min-h-screen ${globalBackground.neutral.darkest}`}>
      <Navbar theme={theme} labels={messages.navbar} locale={locale} />
      <main className={spacing.section.y['2xl']}>
        <CenteredLayout align="center">
          <div className={`max-w-2xl mx-auto ${spacing.block.y.lg}`}>
            <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h1>
            <p className={`${typography.body} text-text-secondary ${spacing.block.y.lg}`}>
              {copy.body}
            </p>
            <div>
              <Link
                href={`/${locale}`}
                className={`${components.button.secondary.base} bg-bg-default border border-border-subtle text-text-primary hover:bg-bg-neutral-hover hover:border-border-strong active:bg-bg-neutral-active active:border-border-strong cursor-pointer inline-block`}
              >
                {copy.backToHome}
              </Link>
            </div>
          </div>
        </CenteredLayout>
      </main>
      <Footer theme={theme} labels={messages.footer} locale={locale} />
    </div>
  );
}

