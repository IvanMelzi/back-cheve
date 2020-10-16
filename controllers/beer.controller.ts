import { Beer } from './../src/models/beer.model';

import { Request, Response } from "express";
import { BeerModel } from "../models/beer.model";
import { DestroyOptions, UpdateOptions } from "sequelize";

export class BeerController {
    public index(req: Request, res: Response) {
        BeerModel.findAll<BeerModel>({})
            .then((beers: Array<BeerModel>) => res.json(beers))
            .catch((err: Error) => res.status(500).json(err))
    }

    public create(req: Request, res: Response) {
        const params: Beer = req.body

        BeerModel.create<BeerModel>(params)
            .then((beer: BeerModel) => res.status(201).json(beer))
            .catch((err: Error) => res.status(500).json(err))
    }

    public show(req: Request, res: Response) {
        const beerId: number = parseInt(req.params.id)
        BeerModel.findByPk<BeerModel>(beerId)
            .then((beer: BeerModel | null) => {
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
        const params: Beer = req.body
    
        const update: UpdateOptions = {
            where: { id: beerId },
            limit: 1,
        };
    
        BeerModel.update(params, update)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err))
    }

    public delete(req: Request, res: Response) {
        const beerId: number = parseInt(req.params.id)
        const options: DestroyOptions = {
            where: { id: beerId },
            limit: 1,
        };
    
        BeerModel.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

}

