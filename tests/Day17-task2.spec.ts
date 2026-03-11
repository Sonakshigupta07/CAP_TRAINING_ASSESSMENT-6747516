import {test,expect} from "@playwright/test"

test("",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
   
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    const dropdown = page.locator("//select[@class='product_sort_container']")
    await dropdown.selectOption("lohi")

    const prices = await page.locator(".inventory_item_price").allTextContents()

    let actualPrice = prices.map(p=>parseFloat(p.replace("$","")))
    console.log("Actual Prices : ",actualPrice);


    // Create sorted copy
    let expectedPrices = [...actualPrice].sort((a,b)=>a-b)

    console.log("Expected Sorted Prices:", expectedPrices)

    // Verify sorting
    expect(actualPrice).toEqual(expectedPrices)

    await page.locator(".inventory_item button").first().click()
   await expect(page.locator(".inventory_item button").first()).toHaveText("Remove")
   await expect(page.locator(".shopping_cart_link")).toHaveText("1")
    
    await page.screenshot({path:"screeshot/Day17-task2.png"});
})