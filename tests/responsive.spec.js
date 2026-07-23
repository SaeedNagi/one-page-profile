import { test, expect } from '@playwright/test';

const viewports = [
  {
    name: 'Tablet',
    width: 768,
    height: 1024,
  },
  {
    name: 'Mobile',
    width: 375,
    height: 812,
  },
];

for (const viewport of viewports) {
  test(`${viewport.name} Responsive Test`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    await page.goto('https://saeednagi.github.io/one-page-profile/', {
      waitUntil: 'networkidle',
    });

    // Verify page title
    await expect(page).toHaveTitle(/Saeed/i);

    // Scroll to Contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Take screenshot
    await page.screenshot({
      path: `screenshots/${viewport.name.toLowerCase()}-responsive.png`,
      fullPage: true,
    });
  });
}