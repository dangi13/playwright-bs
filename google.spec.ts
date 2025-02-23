import { test, expect } from '@playwright/test';

test('Google page has a title', async ({ page }) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).not.toBeNull();
  console.log(`Page title: ${title}`);
});