import { Factory } from './../src/models/factory.model';

import { Request, Response } from "express";
import { FactoryModel } from "../models/factory.model";
import { DestroyOptions, UpdateOptions } from "sequelize";

export class FactoriesController {
    public index(req: Request, res: Response) {
        FactoryModel.findAll<FactoryModel>({})
            .then((factories: Array<FactoryModel>) => res.json(factories))
            .catch((err: Error) => res.status(500).json(err))
    }

    public create(req: Request, res: Response) {
        const params: Factory = req.body

        FactoryModel.create<FactoryModel>(params)
            .then((factory: FactoryModel) => res.status(201).json(factory))
            .catch((err: Error) => res.status(500).json(err))
    }

    public show(req: Request, res: Response) {
        const factoryId: number = parseInt(req.params.id)

        FactoryModel.findByPk<FactoryModel>(factoryId)
            .then((factory: FactoryModel | null) => {
                if (factory) {
                    res.json(factory)
                } else {
                    res.status(404).json({ errors: ["factory not found"] })
                }
            })
            .catch((err: Error) => res.status(500).json(err))
    }

    public update(req: Request, res: Response) {
        const factoryId: number = parseInt(req.params.id)
        const params: Factory = req.body
    
        const update: UpdateOptions = {
            where: { id: factoryId },
            limit: 1,
        };
    
        FactoryModel.update(params, update)
            .then(() => res.status(202).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err))
    }

    public delete(req: Request, res: Response) {
        const factoryId: number = parseInt(req.params.id)
        const options: DestroyOptions = {
            where: { id: factoryId },
            limit: 1,
        };
    
        FactoryModel.destroy(options)
            .then(() => res.status(204).json({ data: "success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

}

