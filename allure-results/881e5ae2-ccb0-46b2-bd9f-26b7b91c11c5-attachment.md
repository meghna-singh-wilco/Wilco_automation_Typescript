# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestFinal.spec.ts >> Login Test
- Location: tests\LoginTestFinal.spec.ts:6:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[aria-controls="account_menu"]:visible').filter({ hasText: 'Account' }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('[aria-controls="account_menu"]:visible').filter({ hasText: 'Account' }).first()

```

```yaml
- main:
  - text: Shopping at
  - strong: McMinnville
  - text: "- Monday - Saturday 7am - 8pm, Sunday 9am - 6pm"
  - navigation:
    - link "Blog":
      - /url: /blog
    - link "Family Rewards":
      - /url: /rewards
    - link "On-Sale":
      - /url: /shop-all?search=&type=search&sale=true
    - link "Grooming":
      - /url: /pet-grooming
    - link "Events":
      - /url: /events
    - link "Locations":
      - /url: /locations
  - link "Home":
    - /url: /
    - img "Wilco Logo"
  - button "Departments"
  - navigation "Categories for SEO": No categories available
  - textbox "Search Your Farm Store"
  - button
  - button "Login/Register":
    - paragraph: Login/Register
  - heading "Log In" [level=2]
  - paragraph: Sign in to Access Rewards
  - paragraph: Incorrect email address or password, please try again.
  - text: Email Address
  - textbox "Email Address":
    - /placeholder: Enter an email
    - text: meghna.singh@youpmail.com
  - text: Password
  - textbox "Password":
    - /placeholder: Enter a password
    - text: Testing@123
  - button
  - checkbox "Remember me"
  - text: Remember me
  - button "Reset or Forgot Password?"
  - button "Login"
  - heading "Register" [level=2]
  - paragraph: Sign in to Access Rewards
  - button "Create an Account"
  - button
  - link "Cart":
    - /url: /shopping-cart
  - img "footer"
  - link "hero primary November Featured Finds Subtext, not your mama's main text Shop Now & Save hero secondary":
    - /url: /shop-all?search=novff25&type=search&redirect=true&page=1&pageSize=12
    - img "hero primary"
    - heading "November Featured Finds" [level=1]
    - text: Subtext, not your mama's main text
    - button "Shop Now & Save"
    - img "hero secondary"
  - article:
    - img "promo primary"
    - heading "Grooming Special" [level=2]
    - heading "$5 Off Wilco Works" [level=2]
    - button "Book Online"
  - article:
    - img "promo primary"
    - heading "For FFA Members" [level=2]
    - heading "FFA Gift Card Art Contest" [level=2]
    - button "Learn More"
  - article:
    - img "promo primary"
    - heading "November Giveaways" [level=2]
    - heading "Holiday Decor & More" [level=2]
    - button "Enter to Win"
  - heading "Featured Finds" [level=2]
  - paragraph: Sale
  - link "Natural Balance, Fish & Sweet Potato 7 in stock at McMinnville Natural Balance, Fish & Sweet Potato":
    - /url: /product/pet/dog-food/dry-adult-dog-food/natural-balance-fish-sweet-potato-236
    - img "Natural Balance, Fish & Sweet Potato"
    - text: 7 in stock at McMinnville Natural Balance, Fish & Sweet Potato
  - text: Add to cart for pricing
  - button "+ Add to cart"
  - text: Pickup Shipping
  - paragraph: Sale
  - link "Horse Guard, Flaxen Flow, 3 Liter 7 in stock at McMinnville Horse Guard, Flaxen Flow, 3 Liter":
    - /url: /product/equine/equine-health-wellbeing/equine-hoof-hair-supplements/horse-guard-flaxen-flow-3-liter-8753
    - img "Horse Guard, Flaxen Flow, 3 Liter"
    - text: 7 in stock at McMinnville Horse Guard, Flaxen Flow, 3 Liter
  - text: Add to cart for pricing
  - button "+ Add to cart"
  - text: Pickup
  - link "Ariat, Men's Monaco Blue TEK Polo, 10043501 Not carried in McMinnville Ariat, Men's Monaco Blue TEK Polo, 10043501":
    - /url: /product/mens/mens-shirts/mens-short-sleeve-shirts/ariat-mens-monaco-blue-tek-polo-10043501-37259
    - img "Ariat, Men's Monaco Blue TEK Polo, 10043501"
    - text: Not carried in McMinnville Ariat, Men's Monaco Blue TEK Polo, 10043501
  - text: Add to cart for pricing
  - button "Buy Options" [disabled]
  - text: Pickup
  - paragraph: Sale
  - link "Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft 2 in stock at McMinnville Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft":
    - /url: /product/pet/containment-houses/houses/win-world-pet-gazebo-octagonal-dog-kennel-w-vented-canopy-3-ft-46459
    - img "Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft"
    - text: 2 in stock at McMinnville Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft
  - text: Add to cart for pricing
  - button "+ Add to cart"
  - text: Pickup Shipping
  - paragraph: Sale
  - link "Milwaukee, Screwdriver Kit, 10 pc 13 in stock at McMinnville Milwaukee, Screwdriver Kit, 10 pc":
    - /url: /product/miscellaneous/milwaukee-screwdriver-kit-10-pc-52104
    - img "Milwaukee, Screwdriver Kit, 10 pc"
    - text: 13 in stock at McMinnville Milwaukee, Screwdriver Kit, 10 pc
  - paragraph: $39.99
  - paragraph: $47.99
  - paragraph: With Wilco Family Rewards
  - button "+ Add to cart"
  - text: Pickup
  - heading "Featured Categories" [level=2]
  - heading "Online Pet & Livestock Pharmacy" [level=2]
  - link "Shop RX now":
    - /url: https://www.farmstorepharmacy.com/#/
    - button "Shop RX now"
  - text: Orders
  - navigation:
    - link "Shipping Rates":
      - /url: /shipping
    - link "Easy Returns":
      - /url: /returns
    - link "Manage Your Account":
      - /url: /account/details
    - link "Gift Cards":
      - /url: /giftcards
    - link "Shop All":
      - /url: /shop-all?type=search
  - text: Services
  - navigation:
    - link "Wilco Family Rewards":
      - /url: /rewards
    - link "FAQs":
      - /url: /faq
    - link "Store Feedback":
      - /url: https://www.wilco.coop/about/contact/?utm_source=farmstore.com
    - link "Specialty Programs":
      - /url: /specialty-programs
    - link "Credit Terms & Conditions":
      - /url: /terms-conditions
    - link "Livestock Production Specialist Contact":
      - /url: /lps-contact
  - text: About
  - navigation:
    - link "Learn About Wilco":
      - /url: https://www.wilco.coop/about/vision-core-values
    - link "Jobs at Wilco":
      - /url: https://www.wilco.coop/careers/?utm_source=farmstore.com
    - link "FFA Forever":
      - /url: https://www.wilco.coop/community/ffa-forever/?utm_source=farmstore.com
    - link "Events":
      - /url: /events
    - link "Blog":
      - /url: /blog
    - link "Contact Us":
      - /url: https://www.wilco.coop/about/contact/
  - text: Your McMinnville Wilco Store
  - img "Wilco Store graphic"
  - paragraph: Store Hours
  - paragraph: Monday - Saturday 7am - 8pm, Sunday 9am - 6pm
  - button "Not near McMinnville? Change your store"
  - paragraph: Address
  - paragraph: 2741 N Hwy 99W
  - paragraph: McMinnville, OR 97128
  - link "Directions to McMinnville":
    - /url: /locations
  - paragraph: Phone
  - paragraph: Call McMinnville
  - link "(503) 472-6154":
    - /url: tel:+15034726154
  - img "Wilco Mark"
  - text: Need Help?
  - paragraph:
    - text: "For questions or help with online orders call:"
    - link "(888) 78-WILCO":
      - /url: tel:+18887894526
  - paragraph: Limited to stock on hand. Some items may vary from photos. Because of store size limitations or geography, some items featured may not be available in all stores but will be made available by special order during sale periods at advertised prices. All sale prices listed as “dollars off” or “% off” are discounted from our regular posted shelf price, not from discounts given with specialty, bulk or pallet pricing. Reseller and Drop-shippers must contact us for pre-approval to place orders with the intent to re-distribute.
  - navigation:
    - link "Facebook":
      - /url: https://www.facebook.com/wilcostores/
    - link "Instagram":
      - /url: https://www.instagram.com/wilcostores/
    - link "Twitter":
      - /url: https://x.com/wilcostores
    - link "LinkedIn":
      - /url: https://www.linkedin.com/company/wilco/
    - link "Youtube":
      - /url: https://www.youtube.com/channel/UCOlZbnntuT7lmuvSi5teJjw
  - navigation:
    - link "Do Not Sell My Information":
      - /url: /cookie-declaration-page
    - link "Privacy Policy":
      - /url: /privacy-policy
    - link "Terms of Service":
      - /url: /terms-conditions
    - link "Accessibility Policy":
      - /url: /accessibility-policy
  - paragraph: © 2026, Wilco Farm Store
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     readonly page: Page;
  6  | 
  7  |     // Cognito Login
  8  |     readonly username: Locator;
  9  |     readonly password: Locator;
  10 |     readonly signInButton: Locator;
  11 | 
  12 |     // Farm Store Login
  13 |     readonly loginRegisterButton: Locator;
  14 |     readonly emailAddress: Locator;
  15 |     readonly accountPassword: Locator;
  16 |     readonly loginButton: Locator;
  17 | 
  18 |     // Logged In Account
  19 |     readonly accountMenu: Locator;
  20 | 
  21 |     constructor(page: Page) {
  22 |         this.page = page;
  23 | 
  24 |         // Initial Sign In
  25 |         this.username = page.locator('#signInFormUsername:visible');
  26 |         this.password = page.locator('#signInFormPassword:visible');
  27 |         this.signInButton = page.locator('input.btn.btn-primary.submitButton-customizable:visible');
  28 | 
  29 |         // Home Page Login/Register
  30 |         this.loginRegisterButton = page.getByRole('button', { name: 'Login/Register' });
  31 | 
  32 |         // Customer Login
  33 |         this.emailAddress = page.getByRole('textbox', { name: 'Email Address' });
  34 |         this.accountPassword = page.getByRole('textbox', { name: 'Password' });
  35 |         this.loginButton = page.locator("button[aria-label='Login']");
  36 | 
  37 |         // Account Menu
  38 |         this.accountMenu = page
  39 |             .locator('[aria-controls="account_menu"]:visible')
  40 |             .filter({ hasText: "Account" })
  41 |             .first();
  42 |     }
  43 | 
  44 |     async navigate(url: string) {
  45 |         await this.page.goto(url,
  46 |             {
  47 |     waitUntil: "networkidle"
  48 |   }
  49 |         );
  50 |     }
  51 | 
  52 |     async loginToCognito(username: string, password: string) {
  53 | 
  54 |         if (await this.username.isVisible()) {
  55 | 
  56 |             await this.username.fill(username);
  57 |             await this.password.fill(password);
  58 | 
  59 |             await expect(this.signInButton).toBeEnabled();
  60 |             await this.signInButton.click();
  61 | 
  62 |             await this.page.waitForLoadState('networkidle');
  63 |         }
  64 |     }
  65 | 
  66 |     async clickLoginRegister() {
  67 |         await this.loginRegisterButton.waitFor();
  68 |         await expect(this.loginRegisterButton).toBeVisible();
  69 |         await this.loginRegisterButton.click({ force: true });
  70 |     }
  71 | 
  72 |     async loginToFarmStore(email: string, password: string) {
  73 |         await this.emailAddress.fill(email);
  74 |         await this.accountPassword.fill(password);
  75 | 
  76 |         await this.loginButton.click();
  77 | 
  78 |         await this.page.waitForLoadState('networkidle');
  79 |     }
  80 | 
  81 |     async verifyUserLoggedIn() {
> 82 |         await expect(this.accountMenu).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  83 |         await expect(this.accountMenu).toContainText('Account');
  84 | 
  85 |         console.log(await this.accountMenu.textContent());
  86 |     }
  87 | }
```