import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ExcelReader } from '../utils/ExcelReader';
import {ReportUtil} from '../utils/ReportUtil';

test('Login Test', async ({ page },testInfo) => {

    const loginPage = new LoginPage(page);

    
      // Read data from Excel
    const validUsers = await ExcelReader.getSheetData('Valid_Credentials');
    const authUsers = await ExcelReader.getSheetData('Authorization_credentials');
    const urls=await ExcelReader.getSheetData('URL');
    // First row of data
    const user = validUsers[0];
    const authUser = authUsers[0];
    const url = urls[0];

     await test.step('Launch Application', async () => {
         await loginPage.navigate(url.URL);
         //await ReportUtil.captureStep(page, testInfo, 'Launch Application');
         console.log(await page.title());
         await expect(page).toHaveTitle('Signin');
         await ReportUtil.captureStep(page, testInfo, 'Launch Application');
     });
   
     await test.step('Login to Cognito', async () => {
          await loginPage.loginToCognito(
               authUser.Email,
                authUser.Password
             //'tanishq.sharma@skillnetinc.com',
              //'Tanishq@2015!'
          );
          //console.log(await page.title());
          await ReportUtil.captureStep(page, testInfo, 'Login to Cognito');
          await expect(page).
          toHaveTitle('Shop Home, Backyard, Pet, Farm & Rural Lifestyle - Wilco Farm Stores');
        });
     
        
     await test.step('Click on Login to FarmStore', async () => {

        await loginPage.clickLoginRegister();
        await ReportUtil.captureStep(page, testInfo, 'Click on Login to FarmStore');
     });   
    

     await test.step('Logged In', async () => {

       await loginPage.loginToFarmStore(
            user.Email,
            user.Password
        );
        await ReportUtil.captureStep(page, testInfo, 'Logged In');
     }); 
    

    await loginPage.verifyUserLoggedIn();
});