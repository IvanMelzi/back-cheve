import { CommentController } from '../../controllers/comment.controller';
import { Router } from 'express'

const router = Router()


const commentController: CommentController = new CommentController()

router.route("/comment").get(commentController.index)
router.route("/comment").get(commentController.index).post(commentController.create)
router.route("/comment/:id").get(commentController.show)
router.route("/comment/:id").get(commentController.show).put(commentController.update)
router.route("/comment/:id").get(commentController.show).put(commentController.update).delete(commentController.delete)

//curl -X POST --data "name=clara&price=21&factoryId=1" http://localhost:3000/beers
//curl -X PUT --data "price=25" http://localhost:3000/beers/1
//curl -X DELETE  http://localhost:3000/factories/1

export default router
