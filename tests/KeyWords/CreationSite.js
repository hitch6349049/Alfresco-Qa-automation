import { expect } from "@playwright/test"

export class CreatSite{
    constructor(page){
        this.page=page
        this.link_site=page.locator('#HEADER_SITES_MENU_text')
        this.link_creat_site=page.locator('#HEADER_SITES_MENU_CREATE_SITE_text')
        this.input_nom=page.locator('input[name="title"]')
        this.input_Url=page.locator('input[name="shortName"]')
        this.input_description=page.locator('textarea[name="description"]')
        this.chek_visibility=page.locator('input[name="visibility"]')
        this.btn_cree=page.locator(`//span[@id='CREATE_SITE_DIALOG_OK_label']/..`)
        this.page.locator('input[name="visibility"]')
       
    }


    async chekvisibility(valeur){
        
    }


   async cree(nom,valeur,desctop){
    await this.link_site.click()
    await this.link_creat_site.click()
    await this.input_nom.fill(nom)
    await this.input_Url.fill(nom.toLowerCase())
    await this.input_description.fill(desctop)
    await this.btn_cree.click()
    await expect(this.page.locator(`a[title='${nom}']`)).toBeVisible()

   }







}