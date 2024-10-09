const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://example.com');
  const title = await page.title();
  console.log(`El título de la página es: ${title}`);
  
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
