import { Page } from '@playwright/test';
import { ColorHelper } from '../helpers/color.helper';
import { BasePage } from './base.page';

export class HomePage extends BasePage {

  private expectedGetInTouchButtonColor = '#FFD43C'; // Expected in uppercase HEX

  constructor(page: Page) {
    super(page);
  }

  private getInTouchButton = this.page.locator("#masthead").getByRole('link', { name: 'Get in touch' });

  async clickGetInTouchButton(): Promise<void> {
    await this.getInTouchButton.click();
  }
  
  getExpectedGetInTouchButtonColor(): string {
    return this.expectedGetInTouchButtonColor;
  }

  async getGetInTouchButtonColor(): Promise<string> {
    const rgbColor = await this.getInTouchButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    return ColorHelper.convertRgbToHex(rgbColor).toUpperCase();
  }
}
