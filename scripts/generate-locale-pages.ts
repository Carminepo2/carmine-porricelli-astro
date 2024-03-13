import { readdirSync, copyFileSync, existsSync, mkdirSync, lstatSync } from 'fs'
import { join } from 'path'

const LOCALE_DIR_NAME = '[locale]'
const PAGES_DIR = 'src/pages'

const isDirectory = (path: string): boolean => {
  return lstatSync(path).isDirectory()
}

const copyAllFilesInDir = (srcDir: string, destDir: string): void => {
  // Ensure destination directory exists
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true })
  }

  const files = readdirSync(srcDir)
  for (const file of files) {
    if (file === LOCALE_DIR_NAME) continue
    const srcFile = join(srcDir, file)
    if (isDirectory(srcFile)) {
      copyAllFilesInDir(srcFile, join(destDir, file))
      continue
    }
    const destFile = join(destDir, file)
    copyFileSync(srcFile, destFile)
  }
}

copyAllFilesInDir(PAGES_DIR, join(PAGES_DIR, LOCALE_DIR_NAME))
