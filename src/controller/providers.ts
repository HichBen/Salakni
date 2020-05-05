import {ProvidersService} from "../service/providers";
import { Request, Response, NextFunction} from 'express'

export module ProvidersController{
    export async function getProviders(req:Request, res:Response, next:NextFunction) {
        try {
            const providers = await ProvidersService.getProviders();
            res.status(200).json(providers);
        } catch (err) {
            next(err);
        }
    }

    export async function getProvider(req:Request, res:Response, next:NextFunction) {
        try {
            const providers = await ProvidersService.getProvider(req.params.provider_id);
            res.status(200).json(providers);
        } catch (err) {
            next(err);
        }
    }

    export async function updateProvider(req:Request, res:Response, next:NextFunction) {
        try {
            const providers = await ProvidersService.updateProvider(req.params.provider_id, req.body);
            res.status(200).json(providers);
        } catch (err) {
            next(err);
        }
    }
}
