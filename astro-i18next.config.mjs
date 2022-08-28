/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: "it",
  supportedLanguages: ["it", "en"],
  i18next: {
    debug: false,
    initImmediate: false,
    backend: {
      loadPath: "./src/locales/{{lng}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
}
