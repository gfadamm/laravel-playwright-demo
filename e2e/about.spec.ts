import { test, expect } from '@playwright/test';

test('About is accessible', async ({ page }) => {
  await page.goto('/about');

  await expect(page.getByRole('heading')).toHaveText('About');
  await expect(page.getByText('Lorem ipsum dolor sit amet about')).toBeVisible();
});
