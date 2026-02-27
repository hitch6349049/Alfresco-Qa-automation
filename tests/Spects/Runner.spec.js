import { test, expect } from '@playwright/test'
import {Login} from '../KeyWords/Login_keyword'
import 'dotenv/config'
import {CreationSite} from '../KeyWords/CreationSite_keyword'
import {personnaliser} from '../KeyWords/CreeBlog_keyword'






test.describe('suite test Alfresco',()=>{
    test.beforeEach(async ({page})=>{
        const  connexion=new Login(page)
        await page.goto(process.env.URL)
        await connexion.connecter(process.env.USERNAME,process.env.PASSWORD)

    })

    test('Create Corporate Collaboration Site' ,async ({page})=>{
        const creeMonSite=new CreationSite(page)

        await creeMonSite.MySite('project-collaboration-portal',
      'Corporate collaboration workspace for internal teams',
      'MODERATED')


    })

    test('Enable Blog Feature via Drag and Drop',async ({page})=>{
    const blog=new personnaliser(page)

    await blog.CreeBlog('hanytam')




})

} )












    



