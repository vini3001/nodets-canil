import { Request, Response } from "express";

const dog = (req: Request, res: Response) => {
    res.render('cachorro')
}