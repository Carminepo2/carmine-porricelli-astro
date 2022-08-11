import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"

import astroI18next from "astro-i18next"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: "@fontsource/*",
    },
  },

  integrations: [
    tailwind(),
    preact(),
    sitemap(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          it: "it-IT",
        },
      },
    }),
    astroI18next({
      baseLanguage: "it",
      i18next: {
        debug: true, // convenient during development to check for missing keys
        supportedLngs: ["it", "en"],
      },
    }),
  ],
})
