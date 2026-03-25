import {test,expect} from "@playwright/test"
import { ManagerPage } from "../PageObjectModel/managerLogin.page"
import { AccountPage } from "../PageObjectModel/openAccount.page"
import { AmountPage } from "../PageObjectModel/deposit&withdraw.page"
import data from "../testdata/bankingData.json"

test("Banking Scenario",async({page})=>{
    let manager = new ManagerPage(page)
    let account = new AccountPage(page)
    let amount = new AmountPage(page)

    let fullname = `${data.firstName} ${data.lastName}`

    await page.goto(data.url)
    await expect(page).toHaveURL(data.url);
    await manager.loginAsManager()
    await manager.addCustomerDetails(data.firstName, data.lastName, data.postcode)
    
    await account.openaccount(fullname, data.currency)
    await account.goToHome()
    await account.loginCustomer(fullname)

    await amount.deposit(data.depositAmount)
    await amount.withDraw(data.withdrawAmount)

    let Balance =  await amount.getBalance();
    expect(Balance).toBe(data.expectedAmount)
    
    await page.screenshot({path:"screeshot/Day26-task.png"});
    await amount.LogOut()
})

