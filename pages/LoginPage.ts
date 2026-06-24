import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    // Cognito Login
    readonly username: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;

    // Farm Store Login
    readonly loginRegisterButton: Locator;
    readonly emailAddress: Locator;
    readonly accountPassword: Locator;
    readonly loginButton: Locator;

    // Logged In Account
    readonly accountMenu: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initial Sign In
        this.username = page.locator('#signInFormUsername:visible');
        this.password = page.locator('#signInFormPassword:visible');
        this.signInButton = page.locator('input.btn.btn-primary.submitButton-customizable:visible');

        // Home Page Login/Register
        this.loginRegisterButton = page.getByRole('button', { name: 'Login/Register' });

        // Customer Login
        this.emailAddress = page.getByRole('textbox', { name: 'Email Address' });
        this.accountPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.locator("button[aria-label='Login']");

        // Account Menu
        this.accountMenu = page
            .locator('[aria-controls="account_menu"]:visible')
            .filter({ hasText: "Account" })
            .first();
    }

    async navigate(url: string) {
        await this.page.goto(url,
            {
    waitUntil: "networkidle"
  }
        );
    }

    async loginToCognito(username: string, password: string) {

        if (await this.username.isVisible()) {

            await this.username.fill(username);
            await this.password.fill(password);

            await expect(this.signInButton).toBeEnabled();
            await this.signInButton.click();

            await this.page.waitForLoadState('networkidle');
        }
    }

    async clickLoginRegister() {
        await this.loginRegisterButton.waitFor();
        await expect(this.loginRegisterButton).toBeVisible();
        await this.loginRegisterButton.click({ force: true });
    }

    async loginToFarmStore(email: string, password: string) {
        await this.emailAddress.fill(email);
        await this.accountPassword.fill(password);

        await this.loginButton.click();

        await this.page.waitForLoadState('networkidle');
    }

    async verifyUserLoggedIn() {
        await expect(this.accountMenu).toBeVisible();
        await expect(this.accountMenu).toContainText('Account');

        console.log(await this.accountMenu.textContent());
    }
}