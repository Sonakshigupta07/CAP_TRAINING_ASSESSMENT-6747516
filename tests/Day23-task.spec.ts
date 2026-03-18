import {test,expect} from "@playwright/test"
import uploadData from "../testdata/uploadData.json"
import path from 'path'

test("Upload file",async({page})=>{
    await page.goto(uploadData.url)

    const filePath = path.resolve(uploadData.filepath);
    const expectedFileName = uploadData.expectedFileName;

    await page.setInputFiles('#file-upload', filePath);
    await page.click('#file-submit');

    await expect(page.locator('h3')).toHaveText('File Uploaded!');


    const uploadedFileName = await page.locator('#uploaded-files').textContent();
    expect(uploadedFileName?.trim()).toBe(expectedFileName);
     await page.screenshot({path:"screeshot/Day23-task.png"});

})


