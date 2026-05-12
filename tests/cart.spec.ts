import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { users } from './data/users';

test.describe('Panier', () => {

  test('@smoke ajout d\'un produit incremente le compteur du panier', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await expect(inventory.title).toHaveText('Products');

    await inventory.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventory.cartBadge).toHaveText('1');
  });

  test('@regression retirer un produit remet le compteur a zero', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);
    await inventory.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventory.cartBadge).toHaveText('1');

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(inventory.cartBadge).not.toBeVisible();
  });

});
