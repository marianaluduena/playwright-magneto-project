// Register form locators

export const RegisterLocators = {

    name: "input[id = 'firstname']",
    lastName: "input[id = 'lastname']",
    emailAddress: "input[id = 'email_address']",
    password: "input[id = 'password']",
    confirmPassword: "input[id = 'password-confirmation']",
    createAccountBtn: "button[title= 'Create an Account']",
    successMessage: "//div[text()= 'Thank you for registering with Main Website Store.']"
}

/* 
NOTE:

It's very important to pay attention not to include the @ here or the locators will not be found

*/