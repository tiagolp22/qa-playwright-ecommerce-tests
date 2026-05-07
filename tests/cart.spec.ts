import { test, expect } from '@playwright/test';
import { users } from './data/users';
import { loginAndCartSelectors } from './selectors/login-and-cart.selectors';

test('@smoke valid user can log in and add one product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator(loginAndCartSelectors.usernameInput).fill(users.standard.username);
  await page.locator(loginAndCartSelectors.passwordInput).fill(users.standard.password);
  await page.locator(loginAndCartSelectors.loginButton).click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator(loginAndCartSelectors.pageTitle)).toHaveText('Products');

  await page.locator(loginAndCartSelectors.addBackpackButton).click();
  await expect(page.locator(loginAndCartSelectors.cartBadge)).toHaveText('1');
});