import { test, expect } from '@playwright/test'
import {Folder} from  '../KeyWords/CreDossier'
import {login} from '../KeyWords/Login_keyword'
import data_folder from '../DataPool/data_folder.json'




test.describe('creation de dossiers avec data json',async ()=>{
    data_folder.folders.forEach((D)=>{
        test(`creation dossier pour ${D.nom}`,async({page})=>{
             const connection=new login(page)
             const CreeDossier=new Folder(page)

             await page.goto('http://192.168.2.48/share/page/')
             await connection.connecter('admin','12HT6i8o$$')
             await CreeDossier.CresFolder(D.nom,D.titre,D.description)




        })


    })









})