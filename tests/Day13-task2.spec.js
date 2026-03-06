import {test} from "@playwright/test"

test("Mens ranking", async ({page}) => {
await page.goto("https://www.icc-cricket.com/rankings")
let ranking = await page.locator('//span[text()="Virat"]/ancestor::td/following-sibling::td/descendant::span').textContent();
console.log("Odi ranking of virat",ranking);
 await page.screenshot({ path: "ranking.png", fullPage: true })
});