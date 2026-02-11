export class User{
    constructor(page){
        this.page=page
        this.link_admin = page.locator('a[href="/share/page/console/admin-console/application"]');
        this.link_user=page.locator('//span/a[@href="users"]')
        this.linkNew_user=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-newuser-button-button')
        this.input_prenom=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-firstname')
        this.input_Nom=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-lastname')
        this.input_email=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-email')
        this.input_nouvelle_utilisateur=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-username')
        this.input_mode_pass_user=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-password')
        this.input_confirm_mode_passUser=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-create-verifypassword')
        this.btn_cree=page.locator('#page_x002e_ctool_x002e_admin-console_x0023_default-createuser-ok-button-button')
    }


    async CreeUser(Prénom,nom,email,nom_utilisateur,modPass,verifModepass){
        
        await this.link_admin.click()
        await this.link_user.click()
        await this.linkNew_user.click()
        await this.input_prenom.fill(Prénom)
        await this.input_Nom.fill(nom)
        await this.input_email.fill(email)
        await this.input_nouvelle_utilisateur.fill(nom_utilisateur)
        await this.input_mode_pass_user.fill(modPass)
        await this.input_confirm_mode_passUser.fill(verifModepass)
        await this.btn_cree.click()

    }

}