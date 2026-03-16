import {test,expect} from "@playwright/test"
import example from "..//PageObjectModel/example.page.ts"
import data from "../testdata/data4.json"
import Flipcart from "..//PageObjectModel/example.page.ts"

test("Flipcart scenario",async({page})=>{
  const flip = new Flipcart(page);

    await page.goto("https://www.flipkart.com/");
    await flip.crossBtn.click();
    await flip.goToStore();
    

    await expect(flip.cart).toBeVisible();

    await flip.selectProduct(data.product1);

    await flip.selectProduct(data.product2);

    await flip.openCart();
    await flip.updateQuantity(0,data.quantity1.toString());
    await flip.updateQuantity(1,data.quantity2.toString());
    await expect(flip.quantity.first()).toHaveValue(data.quantity1.toString());
    await expect(flip.orderPlacce).toBeVisible();

    await flip.orderPlacce.click();
    await page.screenshot({path:"screeshot/Day21-task.png"});


})
