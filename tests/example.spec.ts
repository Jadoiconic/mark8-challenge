import { test, expect } from '@playwright/test';

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Should have valid element and metadata', async ({ page }) => {
    await expect(page).toHaveTitle("Mark8 challenge");
  });
});

test.describe('CartItem Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Should increment product quantity', async ({ page }) => {
    const initialQuantity = await page.locator('div:has-text("2")').textContent();
    await page.click('button:has-text("+")'); 
    const incrementedQuantity = await page.locator('div:has-text("3")').textContent();
    expect(Number(incrementedQuantity)).toBe(Number(initialQuantity) + 1);
  });

  test('Should decrement product quantity', async ({ page }) => {
    const initialQuantity = await page.locator('div:has-text("2")').textContent();
    await page.click('button:has-text("-")');
    const decrementedQuantity = await page.locator('div:has-text("1")').textContent();
    expect(Number(decrementedQuantity)).toBe(Number(initialQuantity) - 1);
  });

  test('Should remove product from cart', async ({ page }) => {
    await page.click('button:has-text("Remove")');
    const product = await page.locator('h1:has-text("iPhone")');
    expect(product).not.toBeVisible();
  });
});

