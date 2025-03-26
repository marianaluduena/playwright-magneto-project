// Here will be the main application's functions to test abstracted

import { Page, expect } from '@playwright/test';

// This class will extend the methods to the other pages

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    // Methods to extend to the other pages will be the web's main functionalities

    /**
     * Base URL under test
     * @param url 
     */
    async loadWeb(url: string) {

        await this.page.goto(url);
    };

    /**
     * Method to click on selectors
     * @param selector 
     */
    async clickOn(selector: string) {

        await this.page.click(selector);

    };

    /**
     * Method to fill the register form
     * @param selector the selector
     * @param value the data to input
     */

    async fillField(selector: string, value: string) {

        await this.page.locator(selector).fill(value);

    };

    /**
     * Method to cath the success message when the user has created successfully their account
     * @param selector 
     */
    async expectToBeVisible(selector: string) {

        await expect(this.page.locator(selector)).toBeVisible();

    };

}