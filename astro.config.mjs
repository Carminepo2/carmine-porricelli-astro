import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: "@fontsource/*"
    }
  },
  
  integrations: [tailwind(), preact(), sitemap(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en-US",
        it: "it-IT",
      },
    },
  }),]
});