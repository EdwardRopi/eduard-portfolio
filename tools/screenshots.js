/* Съёмка работы для портфолио: три кадра одной командой.
 *
 *   node tools/screenshots.js <id> <index.html или адрес сайта>
 *
 * Кладёт в assets/shots/ файлы <id>-hero.jpg, <id>-full.jpg и <id>-phone.jpg.
 * Нужен Playwright: npm i playwright  (или npm i playwright-core, если
 * браузер уже скачан раньше).
 */
const path = require('path');
const fs = require('fs');

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('playwright-core'));
}

const [id, target] = process.argv.slice(2);
if (!id || !target) {
  console.log('Как пользоваться: node tools/screenshots.js <id> <index.html или адрес>');
  process.exit(1);
}

const OUT = path.join(__dirname, '..', 'assets', 'shots');
const url = /^https?:/.test(target)
  ? target
  : 'file:///' + path.resolve(target).replace(/\\/g, '/');

const MODES = {
  hero: { width: 1440, height: 900, scale: 1.5, full: false, quality: 84 },
  full: { width: 1440, height: 900, scale: 1, full: true, quality: 72 },
  phone: { width: 390, height: 844, scale: 2, full: false, quality: 82 },
};

// Проходим страницу до низа и возвращаемся наверх. Это нужно всем трём
// кадрам: пока блоки с анимацией появления не «проявились», первый экран
// попадает в снимок недособранным.
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6);
    const height = () => document.documentElement.scrollHeight;
    for (let y = 0; y < height(); y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, height());
    await new Promise((r) => setTimeout(r, 400));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 600));
  });
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const [mode, cfg] of Object.entries(MODES)) {
    const ctx = await browser.newContext({
      viewport: { width: cfg.width, height: cfg.height },
      deviceScaleFactor: cfg.scale,
      isMobile: mode === 'phone',
      hasTouch: mode === 'phone',
      locale: 'ru-RU',
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(1800);
    await scrollThrough(page);

    const file = path.join(OUT, `${id}-${mode}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: cfg.quality, fullPage: cfg.full });
    console.log(`${path.basename(file)} — ${Math.round(fs.statSync(file).size / 1024)} КБ`);
    await ctx.close();
  }

  await browser.close();
  console.log('Готово. Уменьшите hero до ширины 1200, а full до 1000 — страница станет легче.');
})();
