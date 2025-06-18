import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ESGKPIEnginePage } from '../pages/esgKpiEngine.page';
import { ContactUsPage } from '../pages/contact.page';
import { TopMenuSection } from '../pages/topMenu.section';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Get in Touch button color is yellow', async ({ page }) => {
    const color = await homePage.getGetInTouchButtonColor();
    expect(color).toBe(homePage.getExpectedGetInTouchButtonColor());
  });

  test('Navigate to ESG KPI Engine', async ({ page }) => {
    const menu = new TopMenuSection(page);
    const esgKpiEnginePage = new ESGKPIEnginePage(page);

    await menu.selectOptionFromFinanceAndEsgMenu('ESG KPI Engine');

    await expect(page).toHaveURL(esgKpiEnginePage.getEsgKpiEnginePageUrl());
    await expect(page).toHaveTitle(esgKpiEnginePage.getEsgKpiEnginePageTitle());
  });

  test('Invalid email validation in Contact Us form', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);

    await homePage.clickGetInTouchButton();

    await expect(page).toHaveURL(contactUsPage.getContactUsPageUrl());
    await expect(page).toHaveTitle(contactUsPage.  getContactUsPageTitle());

    await contactUsPage.fillInContactForm(
      'John',
      'Doe',
      'invalid-email',
      '123456789',
      'This is a test message.'
    );

    const validationMessage = await contactUsPage.getIncorrectEmailValidationMessage();
    expect(validationMessage).toBe(contactUsPage. getInvalidEmailMessage());
  });
});
