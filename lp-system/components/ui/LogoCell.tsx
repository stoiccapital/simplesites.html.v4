import React from 'react';
import { spacing, colors, components, ColorTheme } from '../../config/design-system';
import { LogoIcon } from './LogoIcon';

export type LogoCellProps = {
  src?: string;
  alt: string;
  theme: ColorTheme;
  className?: string;
  wrapperClassName?: string;
  logoName?: 'react' | 'typescript' | 'vercel' | 'cloudflare';
};

/**
 * LogoCell Component
 * Single logo cell with normalized styling
 * Owns: Internal padding, logo height, border styling
 * Does NOT own: Section-level spacing
 */
export function LogoCell({ src, alt, theme, className = '', wrapperClassName = '', logoName }: LogoCellProps) {
  const themeColors = colors[theme];
  const isDark = theme === 'dark';
  
  const borderClass = isDark ? colors.dark.divider.subtle : themeColors.divider.subtle;
  const opacityClass = isDark ? 'opacity-70 hover:opacity-100' : 'opacity-80 hover:opacity-100';

  return (
    <div
      className={`
        ${spacing.logo.pad.md}
        ${borderClass}
        border
        ${spacing.logo.width.md}
        flex
        items-center
        justify-center
        ${components.transition.default}
        ${wrapperClassName}
      `}
    >
      {logoName ? (
        <div className={`text-text-secondary ${opacityClass} ${components.transition.default}`}>
          <LogoIcon
            name={logoName}
            alt={alt}
            className={`${spacing.logo.height.md} w-auto ${className}`}
          />
        </div>
      ) : src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${spacing.logo.height.md}
            w-auto
            object-contain
            ${opacityClass}
            ${components.transition.default}
            ${className}
          `}
        />
      ) : (
        <div className={`
          ${spacing.logo.height.md}
          w-auto
          text-text-muted
          text-xs
          ${opacityClass}
          ${className}
        `}>
          {alt}
        </div>
      )}
    </div>
  );
}
