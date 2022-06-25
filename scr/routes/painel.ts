import { Router, Request, Response } from "express";
import * as filtro from "../models/pet"
import {createMenu} from "../helpers/createMenuObjects"

let route = Router()

route.get('/', (req:Request, res:Response) =>{
    let list = filtro.Pet.getAll()
    res.render('pages/home',{
            menu: createMenu('all'),
            banner: {
                title: "Todos os animais",
                background: 'allanimals.jpg'
            },
            list
    })
})

route.get('/cachorros', (req:Request, res:Response) =>{
    let list = filtro.Pet.getFromType('dog')
    res.render('pages/home', {
        menu: createMenu('dog'),
        banner: {
            title: "Todos os cachorros",
            background: 'banner_dog.jpg'
        },
        list
    })
    
})

route.post('/results', (req:Request, res:Response) =>{
    let list = filtro.Pet.getFromName(req.body.q)
    let verificacao = req.body.q
    if (!verificacao){
        res.redirect('/');
        return;
    }
    res.render('pages/home', {
        menu: createMenu(''),
        list,
        verificacao
    })
})
route.get('/gatos', (req:Request, res:Response) =>{
    let list = filtro.Pet.getFromType('cat')
    res.render('pages/home', {
        menu: createMenu('cat'),
        banner: {
            title: "Todos os gatos",
            background: 'banner_cat.jpg'
        },
        list
    })
})

route.get('/peixes', (req:Request, res:Response) =>{
    let list = filtro.Pet.getFromType('fish')
    res.render('pages/home', {
        menu: createMenu('fish'),
        banner: {
            title: "Todos os peixes",
            background: 'banner_fish.jpg'
        },
        list
    })
})

export default route