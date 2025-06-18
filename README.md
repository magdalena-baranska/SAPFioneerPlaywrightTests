# Tests for SAP Fioneer webpage

Repository: https://github.com/magdalena-baranska/SAPFioneerPlaywrightTests

Follow instructions in app README

##Project Features
- Automated tests for SAP Fioneer webpage
- Page Object Model (POM) structure
- Validations for button color, redirection, and form error messages

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >22)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`

## Use

Run all tests:

```
npx playwright test
```
Run all tests with UI:

```
npx playwright test --ui
```