import { ClientService } from "../service/client";
import { Request, Response, NextFunction } from 'express'

export module ClientController {

    export async function findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const clients = await ClientService.findAll();
            res.status(200).json(clients);
        } catch (err) {
            next(err);
        }
    }

    export async function findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const client = await ClientService.findOne(req.params.client_id);
            res.status(200).json(client);
        } catch (err) {
            next(err);
        }
    }

    export async function updateOne(req: Request, res: Response, next: NextFunction) {
        try {
            const client = await ClientService.updateOne(req.params.client_id, req.body);
            console.log(client)
            res.status(200).json(client);
        } catch (err) {
            next(err);
        }
    }

    export async function remove(req: Request, res: Response, next: NextFunction) {
        try {
            const removed = await ClientService.remove(req.params.client_id);
            res.status(200).json(removed);
        } catch (err) {
            next(err);
        }
    }

}
