// Gera public/plano-de-crise.pdf a partir de tools/plano-de-crise.html.
// Uso: node apps/web/tools/plano-de-crise.mjs (requer o pacote playwright).
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.join(dir, 'plano-de-crise.html')).href);
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: path.join(dir, '../public/plano-de-crise.pdf'),
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
