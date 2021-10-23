import { test as it } from '@playwright/test';

it('renders', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('[name="email"]');
});
