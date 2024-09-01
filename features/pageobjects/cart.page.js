import Page from "./page";
import { $, expect } from "@wdio/globals";

class CartPage extends Page {
    get continueShoppingButton() {
        return $('//button[@id="continue-shopping"]')
    }

    get checkoutButton() {
        return $('//button[@id="checkout"]')
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async validateOnCartPage() {
        await expect(this.checkoutButton).toBeExisting();
        await expect(this.continueShoppingButton).toBeExisting();
    }

    open() {
        return super.open("cart.html")
    }

}
export default new CartPage();