/**
 * Preference Constants and Helpers
 * 
 * Defines allowed values, cookie keys, defaults, and pure helper functions
 * for theme and locale preferences.
 */

// ============================================================================
// THEME CONSTANTS
// ============================================================================

export const THEME_COOKIE_KEY = 'theme';

export type Theme = 'light' | 'dark';

export const DEFAULT_THEME: Theme = 'light';

export const VALID_THEMES: readonly Theme[] = ['light', 'dark'] as const;

// ============================================================================
// LOCALE CONSTANTS
// ============================================================================

export const LOCALES = ['en', 'de'] as const;

export type Locale = typeof LOCALES[number];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Validates if a value is a valid theme
 */
export function isValidTheme(value: unknown): value is Theme {
  return typeof value === 'string' && VALID_THEMES.includes(value as Theme);
}

/**
 * Returns the opposite locale
 */
export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'en' ? 'de' : 'en';
}

/**
 * Builds a locale-aware path by prefixing the path with the locale.
 * Ensures exactly one slash between locale and path.
 * If path is already locale-prefixed, does not double-prefix.
 * 
 * @param locale - The locale string (e.g., 'en', 'de')
 * @param path - The path to prefix (e.g., '/start', '/imprint', '/#pricing', '/')
 * @returns The locale-prefixed path (e.g., '/en/start', '/de/imprint', '/en/#pricing')
 * 
 * @example
 * buildLocalePath('en', '/start') // => '/en/start'
 * buildLocalePath('de', '/imprint') // => '/de/imprint'
 * buildLocalePath('en', '/#pricing') // => '/en/#pricing'
 * buildLocalePath('en', '/') // => '/en'
 * buildLocalePath('en', '/en/start') // => '/en/start' (no double-prefix)
 */
export function buildLocalePath(locale: string, path: string): string {
  // Normalize path: ensure it starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Check if path is already locale-prefixed
  if (normalizedPath.startsWith(`/${locale}/`) || normalizedPath === `/${locale}`) {
    return normalizedPath;
  }
  
  // Handle root path
  if (normalizedPath === '/') {
    return `/${locale}`;
  }
  
  // Build locale-prefixed path
  return `/${locale}${normalizedPath}`;
}
