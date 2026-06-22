import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locator = page.locator('body');
  }

  async verifyLoginSuccess() {
    await expect(this.locator).toContainText('Welcome');
  }
}