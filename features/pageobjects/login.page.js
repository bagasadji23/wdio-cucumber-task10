import Page from "./page.js";
import { $ } from '@wdio/globals';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get usernameTextbox() {
        return $("#user-name");
    }
    get passwordTextbox() {
        return $("#password");
    }
    get loginButton() {
        return $('//input[@type="submit"]');
    }

    get errorMessage() {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    async inputUsername(username) {
        await this.usernameTextbox.setValue(username);
    }

    async inputPassword(password) {
        await this.passwordTextbox.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    async validateWrongPasswordDisplayed(errorMessage) {
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining(errorMessage)
        )
    }
   
    open() {
        return super.open("")
    }
}
export default new LoginPage();