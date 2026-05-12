import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { users } from './data/users';

test.describe('Checkout', () => {

  test('@regression parcours complet : connexion, panier et confirmation de commande', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standard.username, users.standard.password);

    await inventory.addToCart('add-to-cart-sauce-labs-backpack');
    await inventory.goToCart();
    await expect(cart.items).toHaveCount(1);

    await cart.checkout();
    await checkout.fillInfo('Jean', 'Tremblay', 'H2X 1Y6');
    await checkout.confirmOrder();

    await expect(checkout.confirmationHeader).toHaveText('Thank you for your order!');
  });

});
