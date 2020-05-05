import {ProvidersService} from "../service/providers";


export module ProvidersController{
    export async function getProvider(req, res, next) {
        try {
            const fakerData = await ProvidersService.fetchProvider(req.params.provider_id);
            res.status(200).json(fakerData);
        } catch (err) {
            next(err);
        }
    }

    export async function postProvider(req, res, next) {
        try {
            const fakerData = await ProvidersService.createProvider(req.body);
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);

        }
    }

    export async function putProvider(req, res, next) {
        try {
            const updatedPerson = await ProvidersService.updateProvider(req.params.provider_id, req.body);
            res.status(200).json(updatedPerson);
        } catch (err) {
            next(err);

        }
    }

    export async function deleteProvider(req, res, next) {
        try {
            const deletedId = await ProvidersService.deleteProvider(req.params.provider_id);
            res.status(200).json(deletedId);
        } catch (err) {
            next(err);

        }
    }
}
