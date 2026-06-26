import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ExcelReader } from '../utils/ExcelReader';
import { CommonActions } from '../utils/CommonActions';
import {ReportUtil} from '../utils/ReportUtil';

test.only('Login Test', async ({ page }, testInfo) => {

    const loginPage = new LoginPage(page);

    // Read Cognito credentials
    const authUsers = await ExcelReader.getSheetData('Authorization_credentials');
    const cognito = authUsers[0];

    // Read Farm Store credentials
    const users = await ExcelReader.getSheetData('Valid_Credentials');
    const user = users[0];

    // url
     const urls=await ExcelReader.getSheetData('URL');
     const url = urls[0];

    // Launch Application
    await test.step('Launch Application', async () => {

        await loginPage.navigate(url.URL);

        console.log("Title : ", await page.title());

        await expect(page).toHaveTitle('Signin');

    });

    // Login to Cognito
    await test.step('Login to Cognito', async () => {

        await loginPage.loginToCognito(
            cognito.Email,
            cognito.Password
        );

    });

    // Click Login Register
    await test.step('Click Login Register', async () => {

        await CommonActions.click(
            loginPage.loginRegisterButton,
            page,
            testInfo,
            "Login Register Button"
        );

    });

    // Enter Email
    await test.step('Enter Email', async () => {

        await CommonActions.fill(
            loginPage.emailAddress,
            user.Email,
            page,
            testInfo,
            "Email TextBox"
        );

    });

    // Enter Password
    await test.step('Enter Password', async () => {

        await CommonActions.fill(
            loginPage.accountPassword,
            user.Password,
            page,
            testInfo,
            "Password TextBox"
        );

    });
     
    // Click Login Button
    await test.step('Click Login Button', async () => {

        await CommonActions.click(
            loginPage.loginButton,
            page,
            testInfo,
            "Login Button"
        );

    });

    // Verify Account Button
    await test.step('Verify User Logged In', async () => {

        await CommonActions.verifyVisible(
            loginPage.accountMenu,
            page,
            testInfo,
            "Account Button"
        );

        await CommonActions.verifyText(
            loginPage.accountMenu,
            "Account",
            page,
            testInfo,
            "Account Button"
        );

    });

});