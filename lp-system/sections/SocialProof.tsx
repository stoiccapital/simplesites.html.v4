import React from 'react';
import type { SectionSocialProofCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { LogoGrid } from '../components/ui/LogoGrid';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type SocialProofProps = {
  copy: SectionSocialProofCopy;
  theme: ColorTheme;
};

/**
 * Social Proof Section
 * Layout: CenteredLayout
 * Alignment: Heading + subtitle CENTER, Logos centered via LogoGrid
 * Section spacing: Top section.y.xl, Bottom section.y.xl
 * Internal: H2 → subtitle block.y.md, Subtitle → LogoGrid block.y.lg
 */
export function SocialProof({ theme }: SocialProofProps) {
  const logos = [
    { logoName: 'react' as const, alt: 'React' },
    { logoName: 'typescript' as const, alt: 'TypeScript' },
    { logoName: 'vercel' as const, alt: 'Vercel' },
    { logoName: 'cloudflare' as const, alt: 'Cloudflare' },
  ];

  return (
    <section id="social-proof" data-section-id="social-proof" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout align="center">
        <div className={`text-center ${spacing.block.y.md}`}>
          <div className={`${typography.label} text-text-muted`}>
            Powered by
          </div>
        </div>
        <div className={spacing.block.y.lg}>
          <LogoGrid logos={logos} theme={theme} />
        </div>
      </CenteredLayout>
    </section>
  );
}
