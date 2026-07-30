import { test, expect } from "@playwright/test";



test('Contact page is accessible', async ({ page }) => {
  await page.goto('/contact');

  await expect(page.getByRole('heading')).toHaveText('Contact Me');
  await expect(page.getByText('lorem ipsum dolor sit amet contact')).toBeVisible();
});