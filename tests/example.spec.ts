// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://staging.deliveries.ph/');
  });

  test('should navigate to the About page', async ({ page }) => {
    await page.getByRole('button', { name: 'Log in' }).click();
  });

  test('should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Deliveries ph/);
  });

});
