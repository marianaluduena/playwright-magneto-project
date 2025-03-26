import { BasePage } from "./basePage";
import { RegisterLocators } from "./locators/registerLocators";
import { Page, Locator } from "@playwright/test";


export class RegisterPage extends BasePage {

  private readonly name: Locator;
  private readonly lastName: Locator;
  private readonly emailAddress: Locator;
  private readonly password: Locator;
  private readonly confirmPassword: Locator;
  private readonly createAccountBtn: Locator;
  private readonly successMessage: Locator;

  // Here I'm recibing the url
  constructor(page: Page) {

    // Here I'm calling the BasePage's constructor
    super(page);

    this.name = page.locator(RegisterLocators.name);
    this.lastName = page.locator(RegisterLocators.lastName);
    this.emailAddress = page.locator(RegisterLocators.emailAddress);
    this.password = page.locator(RegisterLocators.password);
    this.confirmPassword = page.locator(RegisterLocators.confirmPassword);
    this.createAccountBtn = page.locator(RegisterLocators.createAccountBtn);
    this.successMessage = page.locator(RegisterLocators.successMessage);
  }

  // Method to fill the register form

  async fillPersonalInfo() {

    await this.fillField(RegisterLocators.name, "Bruno");
    await this.fillField(RegisterLocators.lastName, "Maxwell");
    await this.fillField(RegisterLocators.emailAddress, "b-maxwell@fakemail.com");
    await this.fillField(RegisterLocators.password, "brunoMars!");
    await this.fillField(RegisterLocators.confirmPassword, "brunoMars!");
    await this.clickOn(RegisterLocators.createAccountBtn);
  }

  // Method to show the success message
  async showSuccessMessage() {

    await this.expectToBeVisible(RegisterLocators.successMessage);

  }

}


// ..........................

/*import { Page, Locator } from '@playwright/test'; CHATGPT

export class RegistrationPage {
  readonly page: Page;
  readonly name: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator("//input[@id = 'firstname']");
    this.lastName = page.locator("//input[@id = 'lastname']");
    this.email = page.locator("//input[@id = 'email_address']");
    this.password = page.locator("//input[@id = 'password']");
    this.confirmPassword = page.locator("//input[@id = 'password-confirmation']");
    this.submitButton = page.locator("//button[@title= 'Create an Account']");
    this.successMessage = page.locator("//div[contains(text(), 'Thank you for registering with Main Website Store.')]");
  }

  async fillForm(name: string, lastName: string, email: string, password: string, confirmPassword: string) {
    await this.name.fill(name);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.password.fill(confirmPassword);
  }

  async submit() {
    await this.submitButton.click();
  }
}*/