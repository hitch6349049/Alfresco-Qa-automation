import { expect } from "@playwright/test"

export class login{
    constructor(page){
        this.page=page
        this.input_user=page.locator('input[name="username"]')
        this.input_password=page.locator('input[name="password"]')
        this.btn_connexion=page.locator('.yui-button')
        this.titre_admin=page.locator('#HEADER_USER_MENU_POPUP_text')

    }

    async connecter(user,password){

        await this.input_user.fill(user)
        await this.input_password.fill(password)
        await this.btn_connexion.click()
        await expect(this.titre_admin).toContainText("Administrator")
    }







}