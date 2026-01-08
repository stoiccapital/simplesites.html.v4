import React from 'react';
import Link from 'next/link';
import { components, colors, ColorTheme } from '../../config/design-system';

export type CTAButtonProps = {
  variant: 'primary' | 'ghost';
  theme: ColorTheme;
  label: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

/**
 * CTAButton Component
 * White slim CTA button (primary/ghost variants)
 * Owns: Button styling, hover/active/focus states
 * Does NOT own: Layout spacing
 * Supports both button and link (via href prop) modes
 */
export function CTAButton({
  variant,
  theme,
  label,
  onClick,
  href,
  type = 'button',
  className = '',
}: CTAButtonProps) {
  // Use semantic tokens only - no theme branching
  // Primary variant: uses semantic CTA tokens (black in light mode, white in dark mode)
  // Ghost variant: uses semantic border/text tokens
  const baseClasses = variant === 'primary' 
    ? components.button.primary.base 
    : components.button.secondary.base;
  
  let variantClasses: string;
  
  if (variant === 'primary') {
    // Primary uses semantic CTA tokens (no theme branching)
    // Hover and active states use token-based classes that adapt automatically
    variantClasses = `${colors.light.primary.bg} ${colors.light.primary.text} ${colors.light.primary.hover} ${colors.light.primary.active}`;
  } else {
    // Ghost/secondary variant: white base, semantic tokens in both modes (no theme branching)
    // Base: white (bg-bg-default in light mode)
    // Enhanced hover: background + border color change for better visibility
    // Active state slightly stronger than hover
    variantClasses = `bg-bg-default border border-border-subtle text-text-primary hover:bg-bg-neutral-hover hover:border-border-strong active:bg-bg-neutral-active active:border-border-strong`;
  }

  const commonClasses = `${baseClasses} ${variantClasses} cursor-pointer ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={commonClasses}
      >
        {label}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
    >
      {label}
    </button>
  );
}
