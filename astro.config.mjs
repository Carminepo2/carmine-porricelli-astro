import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"
import fonts from "astro-fonts-next"

import astroI18next from "astro-i18next"

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
    astroI18next({
      baseLanguage: "it",
      i18next: {
        supportedLngs: ["it", "en"],
      },
    }),
  ],
})
