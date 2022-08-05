import { Router, Request, Response } from "express";
import { cats, dogs, fishes, painel, results } from "../Controllers/painelController";

let route = Router()

route.get('/', painel)

route.get('/cachorros', dogs)
route.get('/gatos', cats)
route.get('/peixes', fishes)

route.post('/results', results)

export default route