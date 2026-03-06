import {test} from "@playwright/test"

test("tokyo olympics", async ({page}) => {
await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
await page.locator('//a[text()="All Athletes"]').click();
let gold = await page.locator('//h3[text()="Emma MCKEON"]/../../../../following-sibling::div/descendant::div[@title="Gold"]/descendant::span[@class="OcsText-styles__StyledText-sc-bf256156-0 cjPVFu text--sm-body"]').textContent();
console.log("Gold medals",gold);
await page.waitForTimeout(5000)
await page.screenshot({ path: "olympics.png", fullPage: true })
});
