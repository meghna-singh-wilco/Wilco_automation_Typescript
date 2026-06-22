import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.only('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    console.log(await page.title());

    await expect(page).toHaveTitle('Signin');

    await loginPage.loginToCognito(
        'tanishq.sharma@skillnetinc.com',
        'Tanishq@2015!'
    );

    await loginPage.clickLoginRegister();

    await loginPage.loginToFarmStore(
        'trupti.bhosale@yopmail.com',
        'Testing@123'
    );

    await loginPage.verifyUserLoggedIn();
});