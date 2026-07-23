// @ts-check
import { test, expect } from '@playwright/test';

test('Home Page Load Successfully', async ({ page }) => {
    await page.goto('https://saeednagi.github.io/one-page-profile/');
    
    await expect(page).toHaveTitle(/Saeed Nagi — Front-End Developer & Software QA Engineer/);
});

test('Hero section is visible', async ({ page }) => {

    await page.goto('https://saeednagi.github.io/one-page-profile/');

    await expect(page.locator('#hero')).toBeVisible();

    // Social icons
    await expect(page.getByRole('link', { name: 'LinkedIn profile' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub profile' })).toBeVisible();
});

test('Navigate to About section', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

  await page.click('text=About');

  await expect(page.locator('#about')).toBeVisible();
 });

test('Navigate to Skills section', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

  await page.click('text=Skills');

  await expect(page.locator('#skills')).toBeVisible();

  // Click Buttons
    await expect(page.getByRole('button', { name: 'Frontend' })).toBeVisible();
});

test('Navigate to Experience section', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

   await page.click('text=Experience');
  await expect(page.locator('#experience')).toBeVisible();
});

test('Navigate to Projects section', async ({ page }) => {

  await page.goto('https://saeednagi.github.io/one-page-profile/');
   await page.click('text=Projects');

  await expect(page.locator('#projects')).toBeVisible();

  await expect(page.getByRole('button', { name: 'All' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Frontend' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'QA' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Full Stack' })).toBeVisible();
  });

test('Navigate to QA Cases section', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

   await page.click('text=QA Cases');

  await expect(page.locator('#qa')).toBeVisible();
  });

test('Navigate to Contact section', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

  await page.locator('#contact').scrollIntoViewIfNeeded();

  await expect(page.locator('#contact')).toBeVisible();
});

  test('Contact form test', async ({ page }) => {
  await page.goto('https://saeednagi.github.io/one-page-profile/');

  await page.locator('#contact').scrollIntoViewIfNeeded();

   // Contact form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await page.locator('input[name="name"]').fill('John Doe');

    await expect(page.locator('input[name="email"]')).toBeVisible();
    await page.locator('input[name="email"]').fill('saeednagi42@gmail.com');

    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await page.locator('input[name="subject"]').fill('Testing Contact Form');

    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await page.locator('textarea[name="message"]').fill('This is an automated Playwright test.');

});
