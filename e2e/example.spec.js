// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Todo Tests', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('/');
  });

  test('should add a todo', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Task' }).click();
    await page.getByLabel('Title').fill('New Task');
    // keep as incomplete
    await page.getByRole('button', { name: 'Add Task' }).click();


    // await page.click('text=Add Task');
    // await page.fill('input[placeholder="Enter todo"]', 'Todo 1');
    // await page.click('text=Add');
    // await expect(page).toHaveText('Todo 1');
  });

  // test('should delete a todo', async ({ page }) => {
  //   await page.click('text=Add Todo');
  //   await page.fill('input[placeholder="Enter todo"]', 'Todo 1');
  //   await page.click('text=Add');
  //   await page.click('text=Delete');
  //   await expect(page).not.toHaveText('Todo 1');
  // });
});



// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
