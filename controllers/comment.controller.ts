
import { Request, Response } from "express";
import { CommentModel } from "../models/comment.model";
import { DestroyOptions, UpdateOptions } from "sequelize";
import { Comment } from "../src/models/comment.model";

export class CommentController {
    public index(req: Request, res: Response) {
        CommentModel.findAll<CommentModel>({})
            .then((comments: Array<CommentModel>) => res.json(comments))
            .catch((err: Error) => res.status(500).json(err))
    }

    public create(req: Request, res: Response) {
        const params: Comment = req.body

        CommentModel.create<CommentModel>(params)
            .then((comment: CommentModel) => res.status(201).json(comment))
            .catch((err: Error) => res.status(500).json(err))
    }

    public show(req: Request, res: Response) {
        const beerId: number = parseInt(req.params.id)
        CommentModel.findByPk<CommentModel>(beerId)
            .then((beer: CommentModel | null) => {
                if (beer) {
                    res.json(beer)
                } else {
                    res.status(404).json({ errors: ["beer not found"] })
                }
            })
            .catch((err: Error) => res.status(500).json(err))
    }

    public update(req: Request, res: Response) {
        const beerId: number = parseInt(req.params.id)
        const params: Comment = req.body
    
        const update: UpdateOptions = {
            where: { id: beerId },
            limit: 1,
        };
    
        CommentModel.update(params, update)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err))
    }

    public delete(req: Request, res: Response) {
        const beerId: number = parseInt(req.params.id)
        const options: DestroyOptions = {
            where: { id: beerId },
            limit: 1,
        };
    
        CommentModel.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

}

