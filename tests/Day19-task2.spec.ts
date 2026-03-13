import {test,expect} from "@playwright/test"
import path from "path"

test("Upload demoqa profile photo",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator('#downloadButton').click()
    await page.locator('#uploadFile').setInputFiles("C:/Users/SONAKSHI/Desktop/Cap-Training-Assessment/downloads/newFile.txt")
    await expect(page.locator('#uploadedFilePath'))
        .toContainText("newFile.txt")
})