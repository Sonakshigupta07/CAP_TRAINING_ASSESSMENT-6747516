import {Page, expect} from "@playwright/test"

export class ManagerPage{
    page : Page
    ManagerBtn : any
    addCustomerTab : any
    firstName : any
    lastName : any
    postCode : any
    customerBtn : any

   constructor(page : Page){
    this.page = page;
    this.ManagerBtn = page.getByText("Bank Manager Login");
    this.addCustomerTab = page.getByText("Add Customer");
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.postCode = page.getByPlaceholder("Post Code");
    this.customerBtn = page.locator('form').getByRole('button', { name: 'Add Customer' });

   }

   async loginAsManager(){
    await this.ManagerBtn.click()
    await expect(this.addCustomerTab).toBeVisible();
   }

   async addCustomerDetails(first : string, last : string, code:string){
      await this.addCustomerTab.click()
      await this.firstName.fill(first)
      await this.lastName.fill(last)
      await this.postCode.fill(code)

      this.page.once('dialog',async d =>{
         expect(d.message()).toContain('Customer added successfully')
          await d.accept();
      });
      await this.customerBtn.click();
   }
}