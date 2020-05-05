import {ClientService} from "../service/client";

export module ClientController {

    export async function findAll(req, res, next) {
        try {
            const countryData = await ClientService.findAll();
            res.status(200).json(countryData);
        } catch (err) {
            next(err);
        }
    }

    export async function findOne(req, res, next) {
        try {
            const countryData = await ClientService.findOne(req.params.client_id);
            res.status(200).json(countryData);
        } catch (err) {
            next(err);
        }
    }

    export async function create(req, res, next) {
        try {
            const countryData = await ClientService.create(req.body);
            res.status(201).json(countryData);
        } catch (err) {
            next(err);
        }
    }

    export async function update(req, res, next) {
        try {
            const countryData = await ClientService.update(req.params.client_id, req.body);
            res.status(200).json(countryData);
        } catch (err) {
            next(err);
        }
    }

    export async function remove(req, res, next) {
        try {
            const countryData = await ClientService.remove(req.params.client_id);
            res.status(200).json(countryData);
        } catch (err) {
            next(err);
        }
    }

}
 