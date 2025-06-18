import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactUsPage extends BasePage {

  private readonly contactUsPageUrl = 'https://www.sapfioneer.com/contact/';
  private readonly contactUsPageTitle = 'SAP Fioneer | Contact | Get in touch!';
  private readonly invalidEmailMessage = 'Email must be formatted correctly.';

  constructor(page: Page) {
    super(page);
  }

  getContactUsPageUrl(): string {
    return this.contactUsPageUrl;
  }

  getContactUsPageTitle(): string {
    return this.contactUsPageTitle;
  }

  getInvalidEmailMessage(): string {
    return this.invalidEmailMessage;
  }

  private async getContactFormFrame() {
    const iframeLocator = this.page.frameLocator("iframe[title='Form 0']");
    // Wait for the iframe element itself to be visible
    await expect(this.page.locator("iframe[title='Form 0']")).toBeVisible();
    return iframeLocator;
  }

  async fillInContactForm(
    firstName: string,
    lastName: string,
    workEmail: string,
    phoneNumber: string,
    message: string
  ): Promise<void> {
    const frame = await this.getContactFormFrame();

    await frame.getByRole('textbox', { name: /First Name/i }).fill(firstName);
    await frame.getByRole('textbox', { name: /Last Name/i }).fill(lastName);
    await frame.getByRole('textbox', { name: /Work Email/i }).fill(workEmail);
    await frame.getByRole('textbox', { name: /Phone Number/i }).fill(phoneNumber);
    await frame.locator('.input textarea').fill(message);
  }

  async getIncorrectEmailValidationMessage(): Promise<string> {
    const frame = await this.getContactFormFrame();
    const errorLocator = frame.locator(
      "input[name='email'] >> xpath=ancestor::div[contains(@class, 'hs_email')]//label[contains(@class, 'hs-error-msg')]"
    );

    await expect(errorLocator).toBeVisible();
    return await errorLocator.textContent() ?? '';
  }
}
