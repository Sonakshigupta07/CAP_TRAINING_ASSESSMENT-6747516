import {expect, test} from "@playwright/test"

test("Allow notification",async({browser})=>{
    let context = await browser.newContext({permissions:["notifications"]})
    let page = await context.newPage()

    await page.goto("https://www.justdial.com/")

     await page.waitForLoadState("domcontentloaded");
     let result=await page.evaluate(async()=>{
    return await Notification.requestPermission();
    });

    console.log(result);
    await page.locator("#main-auto").fill("Restaurants")
    await page.keyboard.press("Enter")
    
    await expect(page.locator('#main-auto')).toHaveValue("Restaurants");

})