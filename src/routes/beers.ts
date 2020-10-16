import { Beer } from '../models/beer.model';
import { Router } from 'express'

const router = Router()

const beers: Beer[] = [{
    id: '232',
    name: 'name',
    price: 21
}]

router.get('/', (req, res, next) => {
    res.status(200).json({ bears: beers})
})

export default router