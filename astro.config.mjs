import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"
import fonts from "astro-fonts-next"

import astroI18next from "astro-i18next"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: "astro-google-fonts-optimizer/*",
    },
  },

  integrations: [
    tailwind(),
    preact(),
    fonts({
      url: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
    }),
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
        supportedLngs: ["it", "en"],
      },
    }),
  ],
})
