import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async confirmOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }

  get confirmationHeader() {
    return this.page.locator('[data-test="complete-header"]');
  }
}
