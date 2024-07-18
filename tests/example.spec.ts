import { test, expect } from '@playwright/test';

test.describe("Home Page", async()=>{

  test.beforeEach(async({page})=>{
    await page.goto('http://localhost:3000');
  })
  
  test('Should have valid element and metadata', async ({ page }) => {
    await expect(page).toHaveTitle("Mark8 challenge");
  });
})

