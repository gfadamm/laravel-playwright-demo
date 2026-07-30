import { test, expect } from '@playwright/test';

test('Homepage is accessible', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading')).toHaveText('Let\'s get started');
  await expect(page.getByText('With so many options available to you,')).toBeVisible();
});
