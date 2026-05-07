import { test, expect } from '@playwright/test';
import { users } from './data/users';
import { loginAndCartSelectors } from './selectors/login-and-cart.selectors';

test('@smoke invalid user sees an authentication error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator(loginAndCartSelectors.usernameInput).fill(users.invalid.username);
  await page.locator(loginAndCartSelectors.passwordInput).fill(users.invalid.password);
  await page.locator(loginAndCartSelectors.loginButton).click();

  await expect(page.locator(loginAndCartSelectors.errorMessage)).toContainText(
    'Username and password do not match',
  );
});