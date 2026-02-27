
export class CreationSite{
    constructor(page){
        this.page=page
        this.link_site=page.locator('#HEADER_SITES_MENU_text')
        this.link_Cree_site=page.locator('#HEADER_SITES_MENU_CREATE_SITE_text')
        this.input_nom=page.locator('input[name="title"]')
        this.input_description=page.locator('textarea[name="description"]')
        this.btn_creer=page.locator('#CREATE_SITE_DIALOG_OK_label')
    }

    async selectVisibility(value){
        await this.page.locator(`input[name="visibility"][value="${value}"]`).click();


    }



    async MySite(nom,description,visibility){
        await this.link_site.click()
        await this.link_Cree_site.click()
        await this.input_nom.fill(nom)
        await this.input_description.fill(description)
        await this.selectVisibility(visibility)
        await this.btn_creer.click()
        
        
    }



}


