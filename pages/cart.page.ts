import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  get items() {
    return this.page.locator('.cart_item');
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async removeItem(itemSlug: string) {
    await this.page.locator(`[data-test="remove-${itemSlug}"]`).click();
  }
}
