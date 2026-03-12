import { test, expect } from "@playwright/test";

test("Verify product details in a new tab", async ({ page, context }) => {

    await page.goto("https://www.amazon.in/");
    await page.locator("#twotabsearchtextbox").fill("Samsung Mobile");
    await page.locator("#nav-search-submit-button").click();

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),   
        page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').first().click()
    ]);

    await newPage.waitForLoadState();
    const productTitle = await newPage.locator('//span[@id="productTitle"]').textContent();
    console.log("Product Title:", productTitle);

    
    await expect(newPage.locator('//span[@id="productTitle"]')).toBeVisible();
    await newPage.close();
    await page.bringToFront();
});