# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> Login Test
- Location: tests\LoginTest.spec.ts:7:6

# Error details

```
Error: Account Button Visibility Mismatch. Expected : true Actual : false
```

# Page snapshot

```yaml
- main [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e8] [cursor=pointer]:
        - img [ref=e9]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Shopping at
            - strong [ref=e13]: McMinnville
          - generic [ref=e14]: "- Monday - Saturday 7am - 8pm, Sunday 9am - 6pm"
      - navigation [ref=e15]:
        - link "Blog" [ref=e16] [cursor=pointer]:
          - /url: /blog
        - link "Family Rewards" [ref=e17] [cursor=pointer]:
          - /url: /rewards
        - link "On-Sale" [ref=e18] [cursor=pointer]:
          - /url: /shop-all?search=&type=search&sale=true
        - link "Grooming" [ref=e19] [cursor=pointer]:
          - /url: /pet-grooming
        - link "Events" [ref=e20] [cursor=pointer]:
          - /url: /events
        - link "Locations" [ref=e21] [cursor=pointer]:
          - /url: /locations
    - generic [ref=e22]:
      - link "Home" [ref=e24] [cursor=pointer]:
        - /url: /
        - img "Wilco Logo" [ref=e25]
      - button "Departments" [ref=e26] [cursor=pointer]:
        - img [ref=e27]
        - generic [ref=e29]: Departments
      - navigation "Categories for SEO" [ref=e30]:
        - generic [ref=e31]: No categories available
      - generic [ref=e32]:
        - textbox "Search Your Farm Store" [ref=e33]
        - button [ref=e34] [cursor=pointer]:
          - img [ref=e35]
      - generic [ref=e37]:
        - generic "Login / Register" [ref=e38]:
          - button "Login/Register" [ref=e39] [cursor=pointer]:
            - img [ref=e40]
            - paragraph [ref=e42]:
              - generic [ref=e43]: Login/Register
          - generic [ref=e45]:
            - generic [ref=e46]:
              - heading "Log In" [level=2] [ref=e48]
              - paragraph [ref=e51]: Sign in to Access Rewards
              - generic [ref=e52]:
                - generic [ref=e53]:
                  - generic [ref=e54]: Email Address
                  - textbox "Email Address" [ref=e56]:
                    - /placeholder: Enter an email
                    - text: meghna.singh@youpmail.com
                - generic [ref=e57]:
                  - generic [ref=e58]: Password
                  - generic [ref=e59]:
                    - textbox "Password" [ref=e60]:
                      - /placeholder: Enter a password
                      - text: Testing@123
                    - button [ref=e61] [cursor=pointer]:
                      - img [ref=e62]
                - generic [ref=e64]:
                  - generic [ref=e65]:
                    - checkbox "Remember me" [ref=e67] [cursor=pointer]
                    - generic [ref=e69]: Remember me
                  - button "Reset or Forgot Password?" [ref=e71] [cursor=pointer]
                - button "Login" [active] [ref=e72] [cursor=pointer]:
                  - generic [ref=e73]: Login
            - generic [ref=e74]:
              - heading "Register" [level=2] [ref=e76]
              - paragraph [ref=e78]: Sign in to Access Rewards
              - button "Create an Account" [ref=e79] [cursor=pointer]:
                - generic [ref=e80]: Create an Account
            - button [ref=e81] [cursor=pointer]:
              - img [ref=e82]
        - link "Cart" [ref=e86] [cursor=pointer]:
          - /url: /shopping-cart
          - generic [ref=e87]:
            - img [ref=e89]
            - generic [ref=e91]: Cart
  - generic [ref=e92]:
    - img "footer"
    - generic [ref=e96]:
      - link "hero primary November Featured Finds Subtext, not your mama's main text Shop Now & Save hero secondary" [ref=e97] [cursor=pointer]:
        - /url: /shop-all?search=novff25&type=search&redirect=true&page=1&pageSize=12
        - generic [ref=e100]:
          - img "hero primary" [ref=e101]
          - generic [ref=e104]:
            - generic [ref=e105]:
              - heading "November Featured Finds" [level=1] [ref=e106]
              - generic [ref=e108]: Subtext, not your mama's main text
            - button "Shop Now & Save" [ref=e110]:
              - generic [ref=e111]: Shop Now & Save
          - img "hero secondary" [ref=e112]
      - generic [ref=e117]:
        - article [ref=e118]:
          - img "promo primary" [ref=e120]
          - generic [ref=e122]:
            - generic [ref=e123]:
              - heading "Grooming Special" [level=2] [ref=e124]
              - heading "$5 Off Wilco Works" [level=2] [ref=e125]
            - button "Book Online" [ref=e127] [cursor=pointer]:
              - generic [ref=e128]: Book Online
        - article [ref=e129]:
          - img "promo primary" [ref=e131]
          - generic [ref=e133]:
            - generic [ref=e134]:
              - heading "For FFA Members" [level=2] [ref=e135]
              - heading "FFA Gift Card Art Contest" [level=2] [ref=e136]
            - button "Learn More" [ref=e138] [cursor=pointer]:
              - generic [ref=e139]: Learn More
        - article [ref=e140]:
          - img "promo primary" [ref=e142]
          - generic [ref=e144]:
            - generic [ref=e145]:
              - heading "November Giveaways" [level=2] [ref=e146]
              - heading "Holiday Decor & More" [level=2] [ref=e147]
            - button "Enter to Win" [ref=e149] [cursor=pointer]:
              - generic [ref=e150]: Enter to Win
      - generic [ref=e155]:
        - heading "Featured Finds" [level=2] [ref=e158]
        - generic [ref=e162]:
          - generic [ref=e163]:
            - paragraph [ref=e167]: Sale
            - link "Natural Balance, Fish & Sweet Potato 7 in stock at McMinnville Natural Balance, Fish & Sweet Potato" [ref=e168] [cursor=pointer]:
              - /url: /product/pet/dog-food/dry-adult-dog-food/natural-balance-fish-sweet-potato-236
              - img "Natural Balance, Fish & Sweet Potato" [ref=e170]
              - generic [ref=e173]:
                - img [ref=e174]
                - generic [ref=e176]: 7 in stock at McMinnville
              - generic [ref=e177]: Natural Balance, Fish & Sweet Potato
            - generic [ref=e182]: Add to cart for pricing
            - generic [ref=e183]:
              - button "+ Add to cart" [ref=e184] [cursor=pointer]:
                - generic [ref=e185]: + Add to cart
              - generic [ref=e186]:
                - generic [ref=e187]:
                  - img [ref=e188]
                  - text: Pickup
                - generic [ref=e190]:
                  - img [ref=e191]
                  - text: Shipping
          - generic [ref=e193]:
            - paragraph [ref=e197]: Sale
            - link "Horse Guard, Flaxen Flow, 3 Liter 7 in stock at McMinnville Horse Guard, Flaxen Flow, 3 Liter" [ref=e198] [cursor=pointer]:
              - /url: /product/equine/equine-health-wellbeing/equine-hoof-hair-supplements/horse-guard-flaxen-flow-3-liter-8753
              - img "Horse Guard, Flaxen Flow, 3 Liter" [ref=e200]
              - generic [ref=e203]:
                - img [ref=e204]
                - generic [ref=e206]: 7 in stock at McMinnville
              - generic [ref=e207]: Horse Guard, Flaxen Flow, 3 Liter
            - generic [ref=e212]: Add to cart for pricing
            - generic [ref=e213]:
              - button "+ Add to cart" [ref=e214] [cursor=pointer]:
                - generic [ref=e215]: + Add to cart
              - generic [ref=e217]:
                - img [ref=e218]
                - text: Pickup
          - generic [ref=e220]:
            - link "Ariat, Men's Monaco Blue TEK Polo, 10043501 Not carried in McMinnville Ariat, Men's Monaco Blue TEK Polo, 10043501" [ref=e221] [cursor=pointer]:
              - /url: /product/mens/mens-shirts/mens-short-sleeve-shirts/ariat-mens-monaco-blue-tek-polo-10043501-37259
              - img "Ariat, Men's Monaco Blue TEK Polo, 10043501" [ref=e223]
              - generic [ref=e226]:
                - img [ref=e227]
                - generic [ref=e229]: Not carried in McMinnville
              - generic [ref=e230]: Ariat, Men's Monaco Blue TEK Polo, 10043501
            - generic [ref=e235]: Add to cart for pricing
            - generic [ref=e236]:
              - button "Buy Options" [disabled]:
                - generic: Buy Options
              - generic [ref=e238]:
                - img [ref=e239]
                - text: Pickup
          - generic [ref=e241]:
            - paragraph [ref=e245]: Sale
            - link "Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft 2 in stock at McMinnville Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft" [ref=e246] [cursor=pointer]:
              - /url: /product/pet/containment-houses/houses/win-world-pet-gazebo-octagonal-dog-kennel-w-vented-canopy-3-ft-46459
              - img "Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft" [ref=e248]
              - generic [ref=e251]:
                - img [ref=e252]
                - generic [ref=e254]: 2 in stock at McMinnville
              - generic [ref=e255]: Win World, Pet Gazebo Octagonal Dog Kennel w/ Vented Canopy, 3 ft
            - generic [ref=e260]: Add to cart for pricing
            - generic [ref=e261]:
              - button "+ Add to cart" [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: + Add to cart
              - generic [ref=e264]:
                - generic [ref=e265]:
                  - img [ref=e266]
                  - text: Pickup
                - generic [ref=e268]:
                  - img [ref=e269]
                  - text: Shipping
          - generic [ref=e271]:
            - paragraph [ref=e275]: Sale
            - link "Milwaukee, Screwdriver Kit, 10 pc 13 in stock at McMinnville Milwaukee, Screwdriver Kit, 10 pc" [ref=e276] [cursor=pointer]:
              - /url: /product/miscellaneous/milwaukee-screwdriver-kit-10-pc-52104
              - img "Milwaukee, Screwdriver Kit, 10 pc" [ref=e278]
              - generic [ref=e281]:
                - img [ref=e282]
                - generic [ref=e284]: 13 in stock at McMinnville
              - generic [ref=e285]: Milwaukee, Screwdriver Kit, 10 pc
            - generic [ref=e289]:
              - paragraph [ref=e290]: $39.99
              - paragraph [ref=e291]: $47.99
              - paragraph [ref=e292]: With Wilco Family Rewards
            - generic [ref=e293]:
              - button "+ Add to cart" [ref=e294] [cursor=pointer]:
                - generic [ref=e295]: + Add to cart
              - generic [ref=e297]:
                - img [ref=e298]
                - text: Pickup
      - heading "Featured Categories" [level=2] [ref=e306]
      - generic [ref=e312]:
        - heading "Online Pet & Livestock Pharmacy" [level=2] [ref=e320]
        - link "Shop RX now" [ref=e323] [cursor=pointer]:
          - /url: https://www.farmstorepharmacy.com/#/
          - button "Shop RX now" [ref=e324]:
            - generic [ref=e325]: Shop RX now
  - generic [ref=e326]:
    - generic [ref=e327]:
      - generic [ref=e328]:
        - generic [ref=e329]:
          - generic [ref=e331]: Orders
          - navigation [ref=e333]:
            - link "Shipping Rates" [ref=e334] [cursor=pointer]:
              - /url: /shipping
            - link "Easy Returns" [ref=e335] [cursor=pointer]:
              - /url: /returns
            - link "Manage Your Account" [ref=e336] [cursor=pointer]:
              - /url: /account/details
            - link "Gift Cards" [ref=e337] [cursor=pointer]:
              - /url: /giftcards
            - link "Shop All" [ref=e338] [cursor=pointer]:
              - /url: /shop-all?type=search
        - generic [ref=e339]:
          - generic [ref=e341]: Services
          - navigation [ref=e343]:
            - link "Wilco Family Rewards" [ref=e344] [cursor=pointer]:
              - /url: /rewards
            - link "FAQs" [ref=e345] [cursor=pointer]:
              - /url: /faq
            - link "Store Feedback" [ref=e346] [cursor=pointer]:
              - /url: https://www.wilco.coop/about/contact/?utm_source=farmstore.com
            - link "Specialty Programs" [ref=e347] [cursor=pointer]:
              - /url: /specialty-programs
            - link "Credit Terms & Conditions" [ref=e348] [cursor=pointer]:
              - /url: /terms-conditions
            - link "Livestock Production Specialist Contact" [ref=e349] [cursor=pointer]:
              - /url: /lps-contact
        - generic [ref=e350]:
          - generic [ref=e352]: About
          - navigation [ref=e354]:
            - link "Learn About Wilco" [ref=e355] [cursor=pointer]:
              - /url: https://www.wilco.coop/about/vision-core-values
            - link "Jobs at Wilco" [ref=e356] [cursor=pointer]:
              - /url: https://www.wilco.coop/careers/?utm_source=farmstore.com
            - link "FFA Forever" [ref=e357] [cursor=pointer]:
              - /url: https://www.wilco.coop/community/ffa-forever/?utm_source=farmstore.com
            - link "Events" [ref=e358] [cursor=pointer]:
              - /url: /events
            - link "Blog" [ref=e359] [cursor=pointer]:
              - /url: /blog
            - link "Contact Us" [ref=e360] [cursor=pointer]:
              - /url: https://www.wilco.coop/about/contact/
      - generic [ref=e361]:
        - generic [ref=e363]: Your McMinnville Wilco Store
        - generic [ref=e365]:
          - generic [ref=e366]:
            - generic [ref=e367]:
              - img "Wilco Store graphic" [ref=e369]
              - generic [ref=e370]:
                - img [ref=e371]
                - generic [ref=e373]:
                  - paragraph [ref=e374]: Store Hours
                  - paragraph [ref=e375]: Monday - Saturday 7am - 8pm, Sunday 9am - 6pm
            - button "Not near McMinnville? Change your store" [ref=e378] [cursor=pointer]:
              - generic [ref=e379]: Not near McMinnville? Change your store
          - generic [ref=e381]:
            - generic [ref=e382]:
              - img [ref=e383]
              - generic [ref=e385]:
                - paragraph [ref=e386]: Address
                - paragraph [ref=e387]: 2741 N Hwy 99W
                - paragraph [ref=e388]: McMinnville, OR 97128
                - link "Directions to McMinnville" [ref=e389] [cursor=pointer]:
                  - /url: /locations
            - generic [ref=e390]:
              - img [ref=e391]
              - generic [ref=e393]:
                - paragraph [ref=e394]: Phone
                - paragraph [ref=e395]: Call McMinnville
                - link "(503) 472-6154" [ref=e396] [cursor=pointer]:
                  - /url: tel:+15034726154
    - generic [ref=e398]:
      - img "Wilco Mark" [ref=e399]
      - generic [ref=e401]:
        - generic [ref=e402]: Need Help?
        - generic [ref=e404]:
          - img [ref=e405]
          - paragraph [ref=e408]:
            - text: "For questions or help with online orders call:"
            - link "(888) 78-WILCO" [ref=e409] [cursor=pointer]:
              - /url: tel:+18887894526
        - paragraph [ref=e411]: Limited to stock on hand. Some items may vary from photos. Because of store size limitations or geography, some items featured may not be available in all stores but will be made available by special order during sale periods at advertised prices. All sale prices listed as “dollars off” or “% off” are discounted from our regular posted shelf price, not from discounts given with specialty, bulk or pallet pricing. Reseller and Drop-shippers must contact us for pre-approval to place orders with the intent to re-distribute.
    - generic [ref=e413]:
      - navigation [ref=e414]:
        - link "Facebook" [ref=e415] [cursor=pointer]:
          - /url: https://www.facebook.com/wilcostores/
          - img [ref=e416]
        - link "Instagram" [ref=e418] [cursor=pointer]:
          - /url: https://www.instagram.com/wilcostores/
          - img [ref=e419]
        - link "Twitter" [ref=e421] [cursor=pointer]:
          - /url: https://x.com/wilcostores
          - img [ref=e422]
        - link "LinkedIn" [ref=e424] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/wilco/
          - img [ref=e425]
        - link "Youtube" [ref=e427] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCOlZbnntuT7lmuvSi5teJjw
          - img [ref=e428]
      - generic [ref=e430]:
        - navigation [ref=e431]:
          - link "Do Not Sell My Information" [ref=e432] [cursor=pointer]:
            - /url: /cookie-declaration-page
          - link "Privacy Policy" [ref=e433] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms of Service" [ref=e434] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Accessibility Policy" [ref=e435] [cursor=pointer]:
            - /url: /accessibility-policy
        - paragraph [ref=e436]: © 2026, Wilco Farm Store
```

# Test source

```ts
  1   | import { Locator, Page, TestInfo } from '@playwright/test';
  2   | import { ReportUtil } from './ReportUtil';
  3   | 
  4   | export class CommonActions {
  5   | 
  6   |     private static async fail(
  7   |         page: Page,
  8   |         testInfo: TestInfo,
  9   |         message: string,
  10  |         continueOnFailure: boolean
  11  |     ) {
  12  | 
  13  |         await ReportUtil.captureStep(page, testInfo, `FAIL - ${message}`);
  14  | 
  15  |         if (!continueOnFailure) {
> 16  |             throw new Error(message);
      |                   ^ Error: Account Button Visibility Mismatch. Expected : true Actual : false
  17  |         }
  18  |     }
  19  | 
  20  |     static async click(
  21  |         locator: Locator,
  22  |         page: Page,
  23  |         testInfo: TestInfo,
  24  |         elementName: string,
  25  |         continueOnFailure: boolean = false
  26  |     ) {
  27  | 
  28  |         try {
  29  | 
  30  |             const visible = await locator.isVisible();
  31  | 
  32  |             if (!visible) {
  33  |                 return await this.fail(
  34  |                     page,
  35  |                     testInfo,
  36  |                     `${elementName} is NOT Visible`,
  37  |                     continueOnFailure
  38  |                 );
  39  |             }
  40  | 
  41  |             const enabled = await locator.isEnabled();
  42  | 
  43  |             if (!enabled) {
  44  |                 return await this.fail(
  45  |                     page,
  46  |                     testInfo,
  47  |                     `${elementName} is Disabled`,
  48  |                     continueOnFailure
  49  |                 );
  50  |             }
  51  | 
  52  |             await locator.click();
  53  | 
  54  |             await ReportUtil.captureStep(
  55  |                 page,
  56  |                 testInfo,
  57  |                 `PASS - Clicked ${elementName}`
  58  |             );
  59  | 
  60  |         } catch (error: any) {
  61  | 
  62  |             await this.fail(
  63  |                 page,
  64  |                 testInfo,
  65  |                 `${elementName} Click Failed : ${error.message}`,
  66  |                 continueOnFailure
  67  |             );
  68  |         }
  69  |     }
  70  | 
  71  |     static async fill(
  72  |         locator: Locator,
  73  |         value: string,
  74  |         page: Page,
  75  |         testInfo: TestInfo,
  76  |         elementName: string,
  77  |         continueOnFailure: boolean = false
  78  |     ) {
  79  | 
  80  |         try {
  81  | 
  82  |             if (!(await locator.isVisible())) {
  83  | 
  84  |                 return await this.fail(
  85  |                     page,
  86  |                     testInfo,
  87  |                     `${elementName} is NOT Visible`,
  88  |                     continueOnFailure
  89  |                 );
  90  |             }
  91  | 
  92  |             if (!(await locator.isEditable())) {
  93  | 
  94  |                 return await this.fail(
  95  |                     page,
  96  |                     testInfo,
  97  |                     `${elementName} is NOT Editable`,
  98  |                     continueOnFailure
  99  |                 );
  100 |             }
  101 | 
  102 |             await locator.fill(value);
  103 | 
  104 |             await ReportUtil.captureStep(
  105 |                 page,
  106 |                 testInfo,
  107 |                 `PASS - ${elementName} Entered`
  108 |             );
  109 | 
  110 |         } catch (error: any) {
  111 | 
  112 |             await this.fail(
  113 |                 page,
  114 |                 testInfo,
  115 |                 `${elementName} Fill Failed : ${error.message}`,
  116 |                 continueOnFailure
```