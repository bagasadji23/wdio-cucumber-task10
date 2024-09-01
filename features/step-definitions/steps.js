import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given('user is on login page', async () => {
    await LoginPage.open()
  // Write code here that turns the phrase above into concrete actions
});

Given(/^user input "([^"]*)" as username$/, async (username) => {
    await LoginPage.inputUsername(username)
  // Write code here that turns the phrase above into concrete actions
})

Given(/^user input "([^"]*)" as password$/, async (password) => {
    await LoginPage.inputPassword(password)
  // Write code here that turns the phrase above into concrete actions
})

When('user click on login button', async () => {
    await LoginPage.clickLoginButton()
  // Write code here that turns the phrase above into concrete actions
})

Then('user should be redirected to homepage', async () => {
    await HomePage.validateOnHomePage()
  // Write code here that turns the phrase above into concrete actions
})

Then(/^user should get error message "([^"]*)"$/, async (errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage)
  // Write code here that turns the phrase above into concrete actions
})






