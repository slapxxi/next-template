import { test as it } from '@playwright/test';

it('renders auth flow', async ({ page }) => {
  await page.goto('/');
  await page.fill('[name="email"]', 'sl.pavlutin@gmail.com');
  await page.fill('[name="password"]', 'password');
  await page.click('[type="submit"]');
  await page.waitForTimeout(2000);
});
