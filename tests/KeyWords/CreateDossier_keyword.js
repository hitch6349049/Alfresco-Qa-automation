import { expect } from "@playwright/test"

export class Folder {
    constructor(page) {
        this.page = page
        this.linkMesFichiers = page.locator('a[href="/share/page/context/mine/myfiles"]')
        this.btnCreate = page.locator('#template_x002e_documentlist_v2_x002e_myfiles_x0023_default-createContent-button-button')
        this.inputName = page.locator('input[name="prop_cm_name"]')
        this.inputTitre = page.locator('input[name="prop_cm_title"]')
        this.inputDescription = page.locator('textarea[name="prop_cm_description"]')
        this.btnSave = page.locator('#template_x002e_documentlist_v2_x002e_myfiles_x0023_default-createFolder-form-submit-button')
        this.btnFolder = page.locator('.folder-file')
    }

    async createFolder(nom, titre, description) {
        await this.linkMesFichiers.click()
        await this.btnCreate.click()
        await this.btnFolder.click()
        await this.inputName.fill(nom)
        await this.inputTitre.fill(titre)
        await this.inputDescription.fill(description)
        await this.btnSave.click()
        await expect(this.page.locator('body')).toContainText(nom)
    }
}