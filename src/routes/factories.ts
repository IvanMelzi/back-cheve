import { FactoriesController } from './../../controllers/factories.controller';
import { Factory } from '../models/factory.model';
import { Router } from 'express'

const router = Router()

const factories: Factory[] = [{
    name: 'name',
    location: 'Guanajuato'
}]

const factoryController: FactoriesController = new FactoriesController()


router.get('/factory', (req, res, next) => {
    res.status(200).json({ bears: factories})
})

router.route("/factories").get(factoryController.index)
router.route("/factories").get(factoryController.index).post(factoryController.create)
router.route("/factories/:id").get(factoryController.show)
router.route("/factories/:id").get(factoryController.show).put(factoryController.update)
router.route("/factories/:id").get(factoryController.show).put(factoryController.update).delete(factoryController.delete)

//curl -X POST --data "name=Allende&location=Guanajuato" http://localhost:3000/factories
//curl -X PUT --data "name=Cervecería Allende" http://localhost:3000/factories/1
//curl -X DELETE  http://localhost:3000/factories/1

export default router
