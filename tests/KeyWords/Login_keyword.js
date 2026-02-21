import { expect } from "@playwright/test"

export class Login {
    constructor(page) {
        this.page = page
        this.inputUser = page.locator('input[name="username"]')
        this.inputPassword = page.locator('input[name="password"]')
        this.btnConnexion = page.locator('.yui-button')
        this.titreAdmin = page.locator('#HEADER_USER_MENU_POPUP_text')
    }

    async connecter(username, password) {
        await this.inputUser.fill(username)
        await this.inputPassword.fill(password)
        await this.btnConnexion.click()
        await expect(this.titreAdmin).toContainText("Administrator")
    }
}





