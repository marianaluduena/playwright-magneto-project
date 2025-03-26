import { test, expect } from '@playwright/test';
//import { test} from '@playwright/test';
import { BasePage } from '../pages/basePage';

test.only('test', async ({ page }) => {

    const base = new BasePage(page);

    await base.loadWeb('https://magento.softwaretestingboard.com/');

    // Select size, color and add to cart

    //const item = page.locator("a[contains(text(),'Breathe-Easy Tank')]");
    //await item.scrollIntoViewIfNeeded();

    await page.evaluate(() => {
        window.scrollBy(0, 1000);
    });

    await base.clickOn("div[id= 'option-label-size-143-item-166']");
    await base.clickOn("div[id= 'option-label-color-93-item-57']");
    await base.clickOn("button[title= 'Add to Cart']");
    await page.pause();
    // Messages after adding the items to the cart
    //await expect(page.locator("@div[contains(text(), 'You added Breathe-Easy Tank to your')]")).toBeVisible();
    await base.clickOn("//a[class= 'action showcart active']");
    //await page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
    await base.clickOn("//button[id= 'top-cart-btn-checkout']");

    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/checkout/#shipping");

    await page.pause();
    /*
        // Fill Shipping form
        await page.locator("input[id= 'customer-email']").fill('tom_smith@fakemail.com');
        await page.locator("input[id='MIPNYCQ']").fill('Thomas');
        await page.locator("input[id='QSA5YEB']").fill('Smith');
        await page.locator("input[id='TCVWA1K']").fill('Disney');
        await page.locator("input[id='H8QOKS6']").fill('Baker street');
        await page.locator("input[id='QNCSC5E']").fill('London');
        await page.locator("select[id='IC7HGRW']").selectOption('2');
        await page.locator("input[id='YR3SOHX']").fill('12312');
        await page.locator("input[id='NE365GN']").fill('123123123');
        await page.locator("input[name= 'ko_unique_3']").check();
        await page.locator("button[text()= 'Next']").click();
    
        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/checkout/#payment");
    
        
        await page.getByRole('button', { name: 'Place Order' }).click();
        await page.getByText('Thank you for your purchase!').click();
        await page.getByText('Your order # is:').click();
        await page.getByText('We\'ll email you an order').click();
        await page.getByText('You can track your order').click();
        await page.locator('#registration').getByText('Email Address').click();
        await page.getByRole('link', { name: 'Continue Shopping' }).click();*/
});