import 'server-only';
import type { Locale } from '../i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('../dictionaries/en').then((module) => module.default),
  fr: () => import('../dictionaries/fr').then((module) => module.default),
  no: () => import('../dictionaries/no').then((module) => module.default),
  sv: () => import('../dictionaries/sv').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
