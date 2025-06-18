# Tests for SAP Fioneer webpage

Repository: https://github.com/magdalena-baranska/SAPFioneerPlaywrightTests

Follow instructions in app README

## Project Features
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

## Commands
- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://www.sapfioneer.com/`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`

### Updating Playwright

- check if Playwright should be updated  
  `npm outdated @playwright/test`
- update Playwright  
  `npm i @playwright/test`
- update browsers  
  `npx playwright install`
- verify Playwright version  
  `npx @playwright/test --version`

```