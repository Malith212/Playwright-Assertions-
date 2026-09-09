import { test, expect } from '@playwright/test';

test('Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test.only('test2', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.waitForTimeout(3000);

  const logo = page.locator("//a[@id='nav-logo-sprites']");
  await expect(logo).toBeVisible();

  const searchBox = page.locator("//input[@id='twotabsearchtextbox']");
  await expect(searchBox).toBeVisible();

  const searchName = "Bat";
  await searchBox.fill(searchName);

  await page.keyboard.press('Enter');

  //wait for 3 seconds
  await page.waitForTimeout(3000);

  const tableRows = page.locator("//div[@role='listitem']");
  const rowCount = await tableRows.count();
  console.log(`Number of rows: ${rowCount}`);

  const productNames = page.locator("//div[@role='listitem']//h2");

  const productCount = await productNames.count();
  console.log(`Number of products: ${productCount}`);

  const productName= "Baseball Bat Adult,Classic Wooden Youth Baseball Bat for Baseball Training,Home Self Defense Baseball Bats for Teenagers";

  for (let i = 0; i < productCount; i++) {
    const productName = await productNames.nth(i).textContent();
    console.log(`Product ${i + 1}: ${productName}`);

    if (productName.includes("Baseball Bat Adult,Classic Wooden Youth Baseball Bat for Baseball Training,Home Self Defense Baseball Bats for Teenagers")) {
      console.log(`Found the product: ${productName}`);
      //clcick on the product
      await productNames.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(4000);


});

test("test3",async ({ page }) => {
// test
});