import {test,expect} from "@playwright/test"

test("",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await expect(page).toHaveURL("https://www.flipkart.com/");
     await page.waitForTimeout(3000); 
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill("shoes")
    await page.keyboard.press("Enter");
     await page.waitForTimeout(3000);
    const womenProducts = page.locator('//span[contains(text(),"Women")]')

  await expect(womenProducts.first()).toBeVisible();
  await expect(womenProducts).toHaveCount(await womenProducts.count());

   await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.5 })

})