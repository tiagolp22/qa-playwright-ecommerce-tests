import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  get title() {
    return this.page.locator('[data-test="title"]');
  }

  get cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async addToCart(itemId: string) {
    await this.page.locator(`[data-test="${itemId}"]`).click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
