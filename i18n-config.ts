export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'no', 'se'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
