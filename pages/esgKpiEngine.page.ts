import { Page, expect } from '@playwright/test';

export class ESGKPIEnginePage {
  private readonly page: Page;
  private readonly url = 'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/';
  private readonly title = 'Stay audit-ready with the ESG KPI Engine | SAP Fioneer';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  getEsgKpiEnginePageTitle(): string {
    return this.title;
  }

  getEsgKpiEnginePageUrl(): string {
    return this.url;
  }

  async assertPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(this.title);
  }

  async assertPageUrl(): Promise<void> {
    await expect(this.page).toHaveURL(this.url);
  }
}
