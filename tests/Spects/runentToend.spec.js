import { test, expect } from '@playwright/test'
import {login} from '../KeyWords/Login_keyword'
import {User} from '../KeyWords/Cree_utilisateur'
import {ajouUser} from '../KeyWords/AddUser'
import {CreatSite} from '../KeyWords/CreationSite'


test('creation de nouvelle utisateur',async ({page})=>{
    const connection=new login(page)
    const creeUtilisateur=new User(page)
    const userSite=new ajouUser(page)
    const Monsite=new CreatSite(page)


    await page.goto('http://192.168.2.48/share/page/')
    await connection.connecter('admin','12HT6i8o$$')

    //await creeUtilisateur.CreeUser('hanytaalbi','hany','yami@gmail.com','hanyt','123456789','123456789')
    await Monsite.cree('lafer','Public','ceci est rien')
    //await userSite.ajouter('hayat','hichem','Manager')
})
