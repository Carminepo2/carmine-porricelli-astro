// Format date with given locale
export function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale)
}
