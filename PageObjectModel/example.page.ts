import { Page } from "@playwright/test"

class Flipcart{
    crossBtn:any;
       page : Page   
       homeBtn:any;
       gudiPadwa:any;
       gudiCloth:any;
       cloth:any;
       addToCart:any;
       cart:any;
       quantity:any
       orderPlacce:any

    constructor(page : page){

        this.page= page;
        this.crossBtn = page.locator('//span[@class="b3wTlE"]');
        this.homeBtn =  page.locator('//div[text()="Home"]')
        this.gudiPadwa = page.locator('//img[contains(@src,"88e557198b04f01c.png")]')
        this.gudiCloth = page.locator('//img[contains(@src,"f63af45677b331e7.jpg")]')
        this.cloth = page.locator('//img[@class="UCc1lI"]')
        this.addToCart = page.locator('//div[text()="Add to cart"]')
        this.cart = page.locator('//span[text()="Cart"]')
        this.quantity = page.locator('//input[@class="j93Ywx"]')
        this.orderPlacce=page.locator('//button[@class="dSM5Ub JMrpad KcXDCU"]')
    }


    async goToStore(){
        await this.homeBtn.click()
        await this.gudiPadwa.click();
        await this.gudiCloth.click();
    }

    async selectProduct(index:number){
         const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.cloth.nth(index).click()
        ]);

        await newPage.waitForLoadState();

        await newPage.locator('//div[text()="Add to cart"]').click();

        await newPage.close();
    }

    async openCart(){

        await this.cart.click();

    }

   async updateQuantity(index:number,value:string){
     this.quantity.nth(index).fill(value);
}

}

export default Flipcart

