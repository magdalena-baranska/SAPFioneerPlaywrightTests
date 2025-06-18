import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class TopMenuSection extends BasePage {

  constructor(page: Page) {
    (super(page));
  }
  private financeAndEsgMenuButton = this.page.locator('#menu-item-29979').getByRole('link', { name: 'Finance & ESG' });


  async selectOptionFromFinanceAndEsgMenu(optionText: string): Promise<void> {
    await this.financeAndEsgMenuButton.click();
    const submenuOption = this.page.getByRole('link', { name: optionText });
    await submenuOption.click();
  }
}
