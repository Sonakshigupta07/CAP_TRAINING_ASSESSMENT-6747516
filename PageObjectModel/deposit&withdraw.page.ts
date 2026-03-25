import {Page,expect} from "@playwright/test"

export class AmountPage{
    page : Page
    depositTab : any
    depositAmmount : any
    depositBtn : any
    withdrawTab : any
    withdrawBtn : any
    message : any
    balance : any
    logoutBtn : any

    constructor(page : Page){
        this.page = page
        this.depositTab = page.getByText('Deposit')
        this.depositAmmount = page.getByPlaceholder('amount')
        this.depositBtn = page.locator('form').getByRole('button', { name: 'Deposit' });
        this.withdrawTab = page.getByRole("button", { name: "Withdrawl" });
        this.withdrawBtn = page.locator('form').getByRole("button", { name: "Withdraw" });
        // this.message = page.locator('.error');
        this.message = page.locator('.error:not(.ng-hide)');
        this.logoutBtn = page.locator('//button[@class="btn logout"]')
        this.balance = page.locator('(//strong[@class="ng-binding"])[2]')

    }

    async deposit(amount : string){
        await this.depositTab.click()
        await this.depositAmmount.fill(amount)
        await this.depositBtn.click()

        await expect(this.message).toHaveText('Deposit Successful');
    }

    async withDraw(amount : string){
        await this.withdrawTab.click();
        await this.page.waitForTimeout(1000)
        await this.depositAmmount.fill(amount)
        await this.withdrawBtn.click();

        await expect(this.message).toHaveText('Transaction successful');
    }

    async getBalance(){
        let balanceText = await this.balance.textContent()
        return balanceText;
    }

    async LogOut(){
        await this.logoutBtn.click()
    }
}