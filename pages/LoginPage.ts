import {type Locator, type Page} from '@playwright/test';

export class LoginPage {
    // Define variables for page and locators
    readonly page: Page;
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    // Initialize the page and locators in the constructor
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#dph-login-email');
        this.passwordInput = page.locator('#dph-login-pass');
        this.loginButton = page.locator('#dph-login-submit-btn');
        this.errorMessage = page.locator('.error-message');
    }

    // Define method to perform actions
    async goto() {
        await this.page.goto('https://staging.deliveries.ph/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}