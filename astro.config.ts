import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import type { AstroIntegration } from 'astro'
import { copyFileSync, existsSync, lstatSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'
import sitemap from '@astrojs/sitemap'
import { defaultLang, languages } from './src/i18n'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.carmineporricelli.it',
  integrations: [
    tailwind(),
    generateLocaleAstroPages(),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: languages
      }
    })
  ],
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages)
  },
  build: {
    inlineStylesheets: 'always'
  }
})

/**
 * This integration will copy all the files in the `src/pages` directory to a new directory `src/pages/[locale]`
 * where `[locale]` is the name of the locale. This eliminates the need to create/maintain multiple copies of the same
 * page for each locale.
 */
function generateLocaleAstroPages(): AstroIntegration {
  const LOCALE_DIR_NAME = '[locale]'
  const PAGES_DIR = 'src/pages'
  const LOCALE_DIR = join(PAGES_DIR, LOCALE_DIR_NAME)
  function copyAllFilesInDir(srcDir: string, destDir: string): void {
    if (!existsSync(destDir)) {
      mkdirSync(destDir, {
        recursive: true
      })
    }
    const files = readdirSync(srcDir)
    for (const file of files) {
      if (file === LOCALE_DIR_NAME) continue
      const srcFile = join(srcDir, file)
      if (lstatSync(srcFile).isDirectory()) {
        copyAllFilesInDir(srcFile, join(destDir, file))
        continue
      }
      const destFile = join(destDir, file)
      copyFileSync(srcFile, destFile)
    }
  }
  return {
    name: 'GenerateLocaleAstroPages',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        copyAllFilesInDir(PAGES_DIR, LOCALE_DIR)
        updateConfig({
          vite: {
            server: {
              watch: {
                ignored: /\[locale\]/
              }
            }
          }
        })
      },
      'astro:server:setup': ({ server }) => {
        copyAllFilesInDir(PAGES_DIR, LOCALE_DIR)
        server.watcher.on('change', (path) => {
          if (path.includes(PAGES_DIR)) {
            copyAllFilesInDir(PAGES_DIR, LOCALE_DIR)
          }
        })
      }
    }
  }
}
