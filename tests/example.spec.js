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

  for (let i = 0; i < productCount; i++) {
    const productName = await productNames.nth(i).textContent();
    console.log(`Product ${i + 1}: ${productName}`);
  }


});

test("test3",async ({ page }) => {

});