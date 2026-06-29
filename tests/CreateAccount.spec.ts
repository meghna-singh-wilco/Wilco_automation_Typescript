import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ExcelReader } from '../utils/ExcelReader';
import { CommonActions } from '../utils/CommonActions';
import { CreateNewAccountPage } from '../pages/CreateNewAccountPage';


test.only('Create Account Test', async ({ page },testInfo) => {

    const loginPage=new LoginPage(page);
    const createNewAccountPage= new CreateNewAccountPage(page);
    
      // Read Cognito credentials
        const authUsers = await ExcelReader.getSheetData('Authorization_credentials');
        const cognito = authUsers[0];

    // Read Farm Store credentials
        const NewUsers = await ExcelReader.getSheetData('CreateAccount');
        const user = NewUsers[0];

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

    //Click Create account button
    await test.step('Click Create Account Button', async () => {

        await CommonActions.click(
            createNewAccountPage.createAccountButton,
            page,
            testInfo,
            "Create Account Button"
        );

    });

    //Enter First name
    await test.step('Enter First Name', async () => {
        await CommonActions.fill(
            createNewAccountPage.firstName,
            user.FirstName,
            page,
            testInfo,
            "First Name"
        );

    });

    //Enter Last name
    await test.step('Enter Last Name', async () => {
        await CommonActions.fill(
            createNewAccountPage.lastName,
            user.LastName,
            page,
            testInfo,
            "Last Name"
        );
    });


    //Enter Email address
    await test.step('Enter Email Address', async () => {
        await CommonActions.fill(
            createNewAccountPage.emailAddress,
            user.EmailAddress,
            page,
            testInfo,
            "Email Address"
        );
    });

    //Enter Password
    await test.step('Enter Password', async () => {
        await CommonActions.fill(
            createNewAccountPage.password,
            user.Password,
            page,
            testInfo,
            "Password"
        );
    });

    //click on cloud fare
    await test.step('Click on Cloud Fare', async () => {
        await CommonActions.click(
            createNewAccountPage.cloudFare,
            page,
            testInfo,
            "Cloud Fare"
        );
    });
    // click on create profile button   

    await test.step('Click on Create Your Profile Button', async () => {
        await CommonActions.click(
            createNewAccountPage.createYourProfileBtn,
            page,
            testInfo,
            "Create Your Profile Button"
        );
    });







});