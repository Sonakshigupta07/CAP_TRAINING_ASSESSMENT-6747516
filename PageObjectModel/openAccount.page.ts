import {Page} from "@playwright/test"

export class AccountPage{
    page : Page
    openAccount : any
    userSelect : any 
    currency : any 
    process : any
    home : any
    customerLogin : any
    yourName : any
    loginBtn : any

    constructor(page : Page){
        this.page = page;
       this.openAccount = page.getByText("Open Account");
       this.userSelect = page.locator('#userSelect')
       this.currency = page.locator('#currency')
       this.process = page.getByText('Process')
       this.home = page.locator('//button[@class="btn home"]')
       this.customerLogin = page.getByText('Customer Login')
       this.yourName = page.locator('#userSelect')
       this.loginBtn = page.getByRole('button', { name: 'Login' });
    }

    async openaccount(name: string, currency: string){
        await this.openAccount.click()
        await this.userSelect.selectOption({label : name})
        await this.currency.selectOption(currency)

         this.page.once('dialog',async d => await d.accept());
         await this.process.click()
    }

    async goToHome(){
        await this.home.click()
    }

    async loginCustomer(name : string){
        await this.customerLogin.click()
        await this.yourName.selectOption({label : name})
        await this.loginBtn.click()
    }
}