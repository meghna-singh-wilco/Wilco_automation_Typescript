//const {test, expect} =require('@playwright/test');
import { test, expect } from '@playwright/test';
// test('First Test',async function({browser,page})
// {
// //running chrome
// const context=await browser.newContext();
// const page=(await context).newPage();
// (await page).goto("https://staging.farmstore-modern.us/");

// });


test('Login Test',async ({page})=>
{
//running chrome
// const context=await browser.newContext();
// const page=(await context).newPage();
await page.goto("https://staging.farmstore-modern.us/"); 
    //get title
   await console.log(await page.title());
    await expect(page).toHaveTitle("Signin")
    const isVisible = await page.locator('#signInFormUsername:visible').isVisible();

    if (await isVisible) {
        await page.locator('#signInFormUsername:visible').fill('tanishq.sharma@skillnetinc.com');
        await page.locator('#signInFormPassword:visible').fill('Tanishq@2015!');
        await expect(page.locator('input.btn.btn-primary.submitButton-customizable:visible')).toBeEnabled();
       
        await page.locator('input.btn.btn-primary.submitButton-customizable:visible').click();
        //Waiting for browser to be at next screen after login
        await page.waitForLoadState('networkidle');
        
    }

    // Wait for login home page to load
    await page.getByRole('button', { name: 'Login/Register' }).waitFor();
   
  const loginRegister=page.getByRole('button', { name: 'Login/Register' });
    await expect(loginRegister).toBeVisible();
    await expect(loginRegister).toBeEnabled();
    await loginRegister.highlight();
    //await loginRegister.hover();
   await loginRegister.click({ force: true });
   //const loginRegisterVisible = await page.locator('span').filter({ hasText: 'Login/Register' }).first().isVisible();
    //await page.getByLabel('Login/Register').highlight();
    //await console.log(loginRegisterVisible," Login Home page");
    //if( await  loginRegisterVisible){
    //await page.getByText('Login/Register', { exact: true }).click();
        //loginRegister.click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('trupti.bhosale@yopmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Testing@123');
    await page.locator("button[aria-label='Login']").click();
    await page.waitForLoadState('networkidle');
    //const loggedInRegister=page.getByRole('button', {name:'Trupti\'s Account'});
    const loggedInRegister = await page
  .locator('[aria-controls="account_menu"]:visible')
  .filter({ hasText: "Account" })
  .first();
    loggedInRegister.highlight();
    await expect(loggedInRegister).toBeVisible();

    console.log(await loggedInRegister.textContent());//Working
    const loginName=loggedInRegister.textContent();
    //await console.log(loginName);
    //await expect(loginName?.includes('Account'));
    await expect(loggedInRegister).toContainText('Account');
    //await page.locator
    //}

});