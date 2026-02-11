export class ajouUser{
    constructor(page){
        this.page=page
        this.btn_utilisateur=page.locator('img.alf-user-icon')
        this.input_utilisateur=page.locator('#template_x002e_people-finder_x002e_add-users_x0023_default-search-text')
        this.btn_recherche=page.locator('#template_x002e_people-finder_x002e_add-users_x0023_default-search-button-button')
        this.btn_selectionner=page.locator('#yui-gen21')
        this.btn_select=page.locator('#template_x002e_invitationlist_x002e_add-users_x0023_default-selectallroles-button-button')
        this.btn_ajout=page.locator('#template_x002e_invitationlist_x002e_add-users_x0023_default-invite-button-button')

    }
    async Select_roles(role){
        await this.page.locator(`//li[contains(@class,'yuimenuitem')]/a[text()='${role}']`).click()
    }




    async ajouter(Nsite,Nuser,roleur,){
        await this.page.goto(`http://192.168.2.48/share/page/site/${Nsite}/dashboard`)
        await this.btn_utilisateur.click()
        await this.input_utilisateur.fill(Nuser)
        await this.btn_recherche.click()
        await this.btn_selectionner.click()
        await this.btn_select.click()
        await this.Select_roles(roleur)
        await this.btn_ajout.click()

    }
    
    
    
    
    
    









}