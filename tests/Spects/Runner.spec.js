import { test, expect } from '@playwright/test'
import {login} from '../KeyWords/Login_keyword'
import {CreatSite} from '../KeyWords/CreationSite'
import data_file from '../DataPool/data_file.json'


test.describe('creation site avec data',()=>{
    data_file.site.forEach((sitweb)=>{
        test(`creation su site ${sitweb.nom}`,async({page})=>{
            const connection=new login(page)
            const Monsite=new CreatSite(page)


           await page.goto('http://192.168.2.48/share/page/')
           await connection.connecter('admin','12HT6i8o$$')
           await Monsite.cree(sitweb.nom,sitweb.description,sitweb.visibility)








        })












    })







        
























    


















})