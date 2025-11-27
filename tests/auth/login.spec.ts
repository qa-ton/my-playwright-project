import {test, expect} from '@playwright/test';

test.describe('Login Features', () => {

    test('Successful Login with Valid Credentials', async ({page}) => {
        await page.goto('https://staging.deliveries.ph');

        // Assertions still stay in the test file (Best Practice)
        await expect(page).toHaveURL('https://staging.deliveries.ph');
    });

});
