import {test as setup, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js'; // import the class

// This is where we will save the login state
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // 1. Perform the login using your existing Page Object
  await loginPage.goto();
  await loginPage.login('rm@qa.fleet.ph', 'LMI@2020');

  // 2. Wait for the final URL to ensure login is complete
  await expect(page).toHaveURL('https://staging.deliveries.ph');

  // 3. Save the state (cookies, local storage) to the file
  await page.context().storageState({ path: authFile });
});