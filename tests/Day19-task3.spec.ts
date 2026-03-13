import {test,expect} from "@playwright/test"
import path from "path"

test("Upload profile photo",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('//input[@id="file-upload"]').setInputFiles("C:/Users/SONAKSHI/Desktop/Cap-Training-Assessment/uploadphoto/pic1.jpg")
    await page.locator('//input[@id="file-submit"]').click()
    await expect(page.locator('#uploaded-files')).toHaveText("pic1.jpg")
})