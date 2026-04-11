import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (!response.ok()) {
      console.log(`Failed: ${response.url()} - Status: ${response.status()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`Page Error: ${error.message}`);
  });

  await page.goto('https://yijunkuo.github.io/freshman-year-blog/#/posts/ocean-trash');
  await page.waitForLoadState('networkidle');
  
  await browser.close();
})();
