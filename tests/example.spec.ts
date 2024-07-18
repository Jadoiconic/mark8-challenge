import { test, expect } from '@playwright/test';


test.describe("Should have valid element and metadata", async()=>{
  
  test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle("Mark8 challenge");
  });
})

