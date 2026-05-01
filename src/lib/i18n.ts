import zhTW from '../i18n/zh-TW.json';
import en from '../i18n/en.json';

export type Locale = 'zh-TW' | 'en';

export const dictionaries = {
  'zh-TW': zhTW,
  en,
} as const;

export type Dictionary = typeof zhTW;

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return 'zh-TW';
}

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return `/en${clean === '/' ? '' : clean}`;
  return clean;
}

export function altLocalePath(currentLocale: Locale, currentPath: string): string {
  const targetLocale: Locale = currentLocale === 'en' ? 'zh-TW' : 'en';
  if (currentLocale === 'en') {
    const stripped = currentPath.replace(/^\/en/, '') || '/';
    return stripped;
  }
  return localizedPath(targetLocale, currentPath);
}
