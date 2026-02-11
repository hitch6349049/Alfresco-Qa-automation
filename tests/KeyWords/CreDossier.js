import { expect } from "@playwright/test"

export class Folder{
    constructor(page){
        this.page=page
        this.Link_mes_fichiers=page.locator('a[href="/share/page/context/mine/myfiles"]')
        this.btn_cree=page.locator('#template_x002e_documentlist_v2_x002e_myfiles_x0023_default-createContent-button-button')
        this.inputName=page.locator('input[name="prop_cm_name"]')
        this.inputTitre=page.locator('input[name="prop_cm_title"]')
        this.inputDescription=page.locator('textarea[name="prop_cm_description"]')
        this.btn_save=page.locator('#template_x002e_documentlist_v2_x002e_myfiles_x0023_default-createFolder-form-submit-button')
        this.btn_folder=page.locator('.folder-file')
    }

    async CresFolder(nom,title,description){
        await this.Link_mes_fichiers.click()
        await this.btn_cree.click()
        await this.btn_folder.click()
        await this.inputName.fill(nom)
        await this.inputTitre.fill(title)
        await this.inputDescription.fill(description)
        await this.btn_save.click()
        await expect(this.page.locator('body')).toContainText(nom)

        
    }














}