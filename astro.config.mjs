import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"

import astroI18next from "astro-i18next"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact(),
    astroI18next({
      baseLanguage: "it",
      i18next: {
        supportedLngs: ["it", "en"],
      },
    }),
  ],
})
