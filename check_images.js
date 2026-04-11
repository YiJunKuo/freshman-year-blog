import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.request().resourceType() === 'image') {
      console.log(`Image: ${response.url()} - Status: ${response.status()}`);
    }
  });

  await page.goto('http://localhost:3000/freshman-year-blog/');
  await page.waitForLoadState('networkidle');
  
  await browser.close();
})();
