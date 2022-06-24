import { Router, Request, Response } from "express";
import {filter} from "../models/Filtro"

let route = Router()

route.get('/', (req:Request, res:Response) =>{

    res.render('pages/home')
})

route.get('/cachorros', (req:Request, res:Response) =>{
    res.render('pages/cachorro')
})

route.post('/results', (req:Request, res:Response) =>{
    let show = false
    if (req.body.q){
        let nome:string = req.body.q as string
        let list = filter.getAll();
        
    if (filter.filtro(req.body.q)){
        show = true
    }
    }
    res.render('pages/results')
})

route.get('/gatos', (req:Request, res:Response) =>{
    res.render('pages/gatos')
})

route.get('/peixes', (req:Request, res:Response) =>{
    res.render('pages/peixes')
})

export default route