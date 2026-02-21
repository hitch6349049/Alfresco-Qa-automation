import { test, expect } from '@playwright/test'
import {Login} from '../KeyWords/Login_keyword'
import 'dotenv/config'




test('Test Logine Alfresco',async ({page})=>{
    const  connexion=new Login(page)


    await page.goto(process.env.URL)
    await connexion.connecter(process.env.USERNAME,process.env.PASSWORD)






    



})