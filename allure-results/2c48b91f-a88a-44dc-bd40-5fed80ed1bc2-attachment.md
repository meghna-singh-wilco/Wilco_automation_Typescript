# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CreateAccount.spec.ts >> Create Account Test
- Location: tests\CreateAccount.spec.ts:8:6

# Error details

```
TypeError: _CreateNewAccountPage.CreateNewAccountPage is not a constructor
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test';
  2   | import { LoginPage } from '../pages/LoginPage';
  3   | import { ExcelReader } from '../utils/ExcelReader';
  4   | import { CommonActions } from '../utils/CommonActions';
  5   | import { CreateNewAccountPage } from '../pages/CreateNewAccountPage';
  6   | 
  7   | 
  8   | test.only('Create Account Test', async ({ page },testInfo) => {
  9   | 
  10  |     const loginPage=new LoginPage(page);
> 11  |     const createNewAccountPage= new CreateNewAccountPage(page);
      |                                 ^ TypeError: _CreateNewAccountPage.CreateNewAccountPage is not a constructor
  12  |     
  13  |       // Read Cognito credentials
  14  |         const authUsers = await ExcelReader.getSheetData('Authorization_credentials');
  15  |         const cognito = authUsers[0];
  16  | 
  17  |     // Read Farm Store credentials
  18  |         const NewUsers = await ExcelReader.getSheetData('CreateAccount');
  19  |         const user = NewUsers[0];
  20  | 
  21  |     // url
  22  |      const urls=await ExcelReader.getSheetData('URL');
  23  |      const url = urls[0];  
  24  | 
  25  |      // Launch Application
  26  |     await test.step('Launch Application', async () => {
  27  | 
  28  |         await loginPage.navigate(url.URL);
  29  | 
  30  |         console.log("Title : ", await page.title());
  31  | 
  32  |         await expect(page).toHaveTitle('Signin');
  33  | 
  34  |     });
  35  | 
  36  |     // Login to Cognito
  37  |     await test.step('Login to Cognito', async () => {
  38  | 
  39  |         await loginPage.loginToCognito(
  40  |             cognito.Email,
  41  |             cognito.Password
  42  |         );
  43  | 
  44  |     });
  45  | 
  46  |     // Click Login Register
  47  |     await test.step('Click Login Register', async () => {
  48  | 
  49  |         await CommonActions.click(
  50  |             loginPage.loginRegisterButton,
  51  |             page,
  52  |             testInfo,
  53  |             "Login Register Button"
  54  |         );
  55  |     });
  56  | 
  57  |     //Click Create account button
  58  |     await test.step('Click Create Account Button', async () => {
  59  | 
  60  |         await CommonActions.click(
  61  |             createNewAccountPage.createAccountButton,
  62  |             page,
  63  |             testInfo,
  64  |             "Create Account Button"
  65  |         );
  66  | 
  67  |     });
  68  | 
  69  |     //Enter First name
  70  |     await test.step('Enter First Name', async () => {
  71  |         await CommonActions.fill(
  72  |             createNewAccountPage.firstName,
  73  |             user.FirstName,
  74  |             page,
  75  |             testInfo,
  76  |             "First Name"
  77  |         );
  78  | 
  79  |     });
  80  | 
  81  |     //Enter Last name
  82  |     await test.step('Enter Last Name', async () => {
  83  |         await CommonActions.fill(
  84  |             createNewAccountPage.lastName,
  85  |             user.LastName,
  86  |             page,
  87  |             testInfo,
  88  |             "Last Name"
  89  |         );
  90  |     });
  91  | 
  92  | 
  93  |     //Enter Email address
  94  |     await test.step('Enter Email Address', async () => {
  95  |         await CommonActions.fill(
  96  |             createNewAccountPage.emailAddress,
  97  |             user.EmailAddress,
  98  |             page,
  99  |             testInfo,
  100 |             "Email Address"
  101 |         );
  102 |     });
  103 | 
  104 |     //Enter Password
  105 |     await test.step('Enter Password', async () => {
  106 |         await CommonActions.fill(
  107 |             createNewAccountPage.password,
  108 |             user.Password,
  109 |             page,
  110 |             testInfo,
  111 |             "Password"
```