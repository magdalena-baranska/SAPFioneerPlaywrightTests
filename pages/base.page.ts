import { Locator, Page, expect } from '@playwright/test';

export class BasePage {
  url = '/';
  page: Page;
  private header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.locator('h1');
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
  async isPageLoaded(): Promise<boolean> {
    return await this.header.isVisible();
  }
}
