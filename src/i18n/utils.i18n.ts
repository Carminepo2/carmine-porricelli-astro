import { ui, defaultLang, languages } from './ui.i18n'

type TranslationObject = (typeof ui)[typeof defaultLang]
type RemoveTrailingDot<T extends string> = T extends `${infer U}.` ? U : T
type GetTranslationKeys<T> = RemoveTrailingDot<
  T extends Record<string, unknown> ? { [K in keyof T]: `${K & string}.${GetTranslationKeys<T[K]>}` }[keyof T] : ''
>

export type TranslationKeys = GetTranslationKeys<TranslationObject>
export type Language = keyof typeof languages

/**
 * Get the current active language from the URL
 * @param url The URL object
 * @returns The language
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

/**
 * Get the translation function for the given language
 * @param lang The language
 * @returns The translation function
 */
export function useTranslations(lang: Language) {
  return function t(key: TranslationKeys) {
    const [first, ...rest] = key.split('.')

    const _ui: Record<string, any> = ui // eslint-disable-line @typescript-eslint/no-explicit-any

    let current = _ui?.[lang]?.[first] || _ui?.[defaultLang]?.[first]
    for (const k of rest) {
      if (!current) return key
      current = current[k]
    }

    if (typeof current === 'string') return current
    return key
  }
}
