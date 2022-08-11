import i18next from "i18next"

export const localizePath = (
  path: string = "/",
  locale: string | null = null
): string => {
  const supportedLngs = i18next.options.supportedLngs as string[]

  if (!locale) {
    locale = i18next.language
  }

  if (!(supportedLngs as string[]).includes(locale)) {
    console.warn(
      `WARNING(astro-i18next): "${locale}" locale is not supported, add it to the supportedLngs in your astro config.`
    )
    return path
  }

  // remove all leading slashes
  path = path.replace(/^\/+/g, "")

  let pathSegments = path.split("/")

  if (
    JSON.stringify(pathSegments) === JSON.stringify([""]) ||
    JSON.stringify(pathSegments) === JSON.stringify(["", ""])
  ) {
    return locale === supportedLngs[0] ? `/` : `/${locale}/`
  }

  // make a copy of i18next's supportedLngs
  const otherLocales = [...supportedLngs]
  otherLocales.slice(1) // remove base locale (first index)

  // loop over all locales except the base one
  for (const otherLocale of otherLocales) {
    if (pathSegments[0] === otherLocale) {
      // if the path starts with one of the other locales, remove it from the path
      pathSegments.shift()
      break // no need to continue
    }
  }

  // prepend the given locale if it's not the base one
  if (locale !== supportedLngs[0]) {
    pathSegments = [locale, ...pathSegments]
  }

  return "/" + pathSegments.join("/")
}

export const localizeUrl = (
  url: string,
  locale: string | null = null
): string => {
  const [protocol, , host, ...path] = url.split("/")
  const baseUrl = protocol + "//" + host

  return baseUrl + localizePath(path.join("/"), locale)
}
