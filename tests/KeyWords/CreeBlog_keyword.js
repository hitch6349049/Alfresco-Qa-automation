export class personnaliser{
    constructor(page){
        this.page=page
        this.btn_personalisser=page.locator('.alf-configure-icon')
        this.link_personalisser=page.locator(`//td[@id='HEADER_CUSTOMIZE_SITE_text']/a`)
        this.source=page.locator('#template_x002e_customise-pages_x002e_customise-site_x0023_default-page-blog-postlist')
        this.target=page.locator('#template_x002e_customise-pages_x002e_customise-site_x0023_default-currentPages-ul')
        this.btn_ok = page.locator('#template_x002e_customise-pages_x002e_customise-site_x0023_default-save-button-button');

    }



    async CreeBlog(Nsite){
        await this.page.goto(`http://192.168.2.48/share/page/site/${Nsite}/dashboard`)
        await this.btn_personalisser.click()
        await this.link_personalisser.click()
        await this.source.dragTo(this.target)
        await this.btn_ok.click()


    }









}