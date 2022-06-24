import {Request} from 'express'
import { request } from 'http'
import { title } from 'process'

type animal = {
    class: string,
}
let list: animal[] = [
    {class: 'Pastor-alemão'},
    {class: 'Labrador-retriever'},
    {class: 'Zwergspitz'},
]
let i = 0
export const filter = {
    filtro: (q: string): animal[] => {
    return list.filter(item => item.class == q)
    },
    getAll: ():animal[] => {
        return list
    }
    }