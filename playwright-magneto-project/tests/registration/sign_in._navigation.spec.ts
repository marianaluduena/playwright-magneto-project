import { test} from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { RegisterPage } from '../pages/registrationPage';

// TC-001: Create an account (Happy Path) - E2E Testing

// Test Suite Signup


test.describe("Create an account", async () => {

    test("Fill the Signup form", async ({ page }) => {

        const registerData = new RegisterPage(page);
        const base = new BasePage(page);

        // Step 1: Go to the main URL

        await base.loadWeb("https://magento.softwaretestingboard.com/");

        // Step 2: Click the Create an Account link
        await base.clickOn("text = Create an Account");

        // Step 3: Check the user is redirected to the form url
        await base.loadWeb("https://magento.softwaretestingboard.com/customer/account/create/");

        // Step 4: Fill the form
        await registerData.fillPersonalInfo();

        // Step 5: Check the user is redirected to their own account
        await base.loadWeb("https://magento.softwaretestingboard.com/customer/account/");
        
        // Step 6: Confirm message the user has created successfully their account
        await registerData.showSuccessMessage();


        /*
        // Step 1: Go to the main URL
    await page.goto("https://magento.softwaretestingboard.com/");
    
    // Step 2: Click the Create an Account link
    await page.click("text = Create an Account");
    
    // Step 3: Check the user is redirected to the form url
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/create/");
    
    // Step 4: Fill the form
    
    await page.locator("//input[@id = 'firstname']").fill("John");
    await page.locator("//input[@id = 'lastname']").fill("Wilson");
    await page.locator("//input[@id = 'email_address']").fill("j-wilson@fake.com");
    await page.locator("//input[@id = 'password']").fill("johnWilson!");
    await page.locator("//input[@id = 'password-confirmation']").fill("johnWilson!");
    await page.locator("//button[@title= 'Create an Account']").click();
    await page.pause();
    
    // Step 5: Check the user is redirected to their own account
    
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/");
    await page.pause();
    
    // Step 6: Confirm message the user has created successfully their account
    
    await expect(page.locator("//div[contains(text(), 'Thank you for registering with Main Website Store.')]")).toBeVisible();
    await page.pause();*/


    });

    // End Test Suite
});
