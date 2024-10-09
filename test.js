const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://example.com');
    const title = await page.title();
    console.log(`El título de la página es: ${title}`);
    
    await page.screenshot({ path: 'screenshot.png' });
    await page.waitForTimeout(10000);
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
