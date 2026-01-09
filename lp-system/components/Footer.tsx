import React from 'react';
import Link from 'next/link';
import { spacing, layout, footer, typography } from '../config/design-system';
import { buildLocalePath } from '../config/preferences';

export type FooterLabels = {
  copyright: string;
  links: {
    imprint: string;
    privacy: string;
    terms: string;
  };
};

export type FooterProps = {
  theme: 'light' | 'dark'; // Keep for API compatibility, but not used internally
  labels: FooterLabels;
  locale: 'en' | 'de';
};

export function Footer({ labels, locale }: FooterProps) {
  return (
    <footer aria-label="Footer" className={`${footer.bg} border-t ${footer.borderColor} ${footer.section.padding.y}`}>
      <div className={`${layout.container.maxWidth} ${layout.container.px} mx-auto`}>
        <div className={`flex flex-col md:flex-row justify-between items-center ${spacing.gap.sm}`}>
          <div className={`${typography.textXs} ${footer.text.muted}`}>
            {labels.copyright}
          </div>
          <nav aria-label="Footer navigation" className={`flex items-center ${spacing.gap.md}`}>
            <Link href={buildLocalePath(locale, '/imprint')} className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.imprint}
            </Link>
            <Link href={buildLocalePath(locale, '/privacy')} className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.privacy}
            </Link>
            <Link href={buildLocalePath(locale, '/terms')} className={`${typography.textXs} ${footer.text.muted} hover:text-link-hover transition-colors`}>
              {labels.links.terms}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
