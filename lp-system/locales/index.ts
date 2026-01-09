import type { PageCopyConfig } from '../config/types';
import enData from './en.json';
import deData from './de.json';

const localeData: Record<'en' | 'de', Record<string, PageCopyConfig>> = {
  en: enData as Record<string, PageCopyConfig>,
  de: deData as Record<string, PageCopyConfig>,
};

export function loadPageCopy(
  locale: 'en' | 'de',
  lpId: string
): PageCopyConfig | null {
  const data = localeData[locale];
  return data[lpId] || null;
}

export type ShellMessages = {
  navbar: {
    brand: string;
    links: {
      features: string;
      pricing: string;
      useCases: string;
      faq: string;
    };
    cta: string;
    ariaLabels: {
      goToHomepage: string;
      switchToEnglish: string;
      switchToGerman: string;
      openMenu: string;
      closeMenu: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      imprint: string;
      privacy: string;
      terms: string;
    };
  };
};

const shellMessages: Record<'en' | 'de', ShellMessages> = {
  en: {
    navbar: {
      brand: 'Simple Sites',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        useCases: 'Use Cases',
        faq: 'FAQ',
      },
      cta: 'Get Started',
      ariaLabels: {
        goToHomepage: 'Go to homepage',
        switchToEnglish: 'Switch to English',
        switchToGerman: 'Switch to German',
        openMenu: 'Open main menu',
        closeMenu: 'Close main menu',
      },
    },
    footer: {
      copyright: '© 2024 Simple Sites. All rights reserved.',
      links: {
        imprint: 'Imprint',
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
  },
  de: {
    navbar: {
      brand: 'Simple Sites',
      links: {
        features: 'Funktionen',
        pricing: 'Preise',
        useCases: 'Anwendungsfälle',
        faq: 'FAQ',
      },
      cta: 'Loslegen',
      ariaLabels: {
        goToHomepage: 'Zur Startseite',
        switchToEnglish: 'Zu Englisch wechseln',
        switchToGerman: 'Zu Deutsch wechseln',
        openMenu: 'Hauptmenü öffnen',
        closeMenu: 'Hauptmenü schließen',
      },
    },
    footer: {
      copyright: '© 2024 Simple Sites. Alle Rechte vorbehalten.',
      links: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
      },
    },
  },
};

export function getMessages(locale: 'en' | 'de'): ShellMessages {
  return shellMessages[locale];
}

