import { BeerController } from './../../controllers/beer.controller';
import { Beer } from '../models/beer.model';
import { Router } from 'express'

const router = Router()

const beers: Beer[] = [{
    name: 'name',
    price: 21,
    factoryId: 1
}]

const beerController: BeerController = new BeerController()

router.get('/', (req, res, next) => {
    res.status(200).json({ bears: beers})
})

router.route("/beers").get(beerController.index)
router.route("/beers").get(beerController.index).post(beerController.create)
router.route("/beers/:id").get(beerController.show)
router.route("/beers/:id").get(beerController.show).put(beerController.update)
router.route("/beers/:id").get(beerController.show).put(beerController.update).delete(beerController.delete)

//curl -X POST --data "name=clara&price=21&factoryId=1" http://localhost:3000/beers
//curl -X PUT --data "price=25" http://localhost:3000/beers/1
//curl -X DELETE  http://localhost:3000/factories/1

export default router
