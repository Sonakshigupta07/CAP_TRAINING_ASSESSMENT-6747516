import { test, expect } from '@playwright/test';

test('Mouse hover on Store Locator and locate Bangalore', async ({ page }) => {

  await page.goto("https://www.lenskart.com/");
  await page.locator('//a[text()="STORES"]').hover();
  await page.locator('//img[@src="https://static5.lenskart.com/media/uploads/bengalore-210126.png"]').click();   

});

