import {ClientService} from "../service/client";

export module ClientController {

    export async function findAll(req, res, next) {
        try {
            const clients = await ClientService.findAll();
            res.status(200).json(clients);
        } catch (err) {
            next(err);
        }
    }

    export async function findOne(req, res, next) {
        try {
            const client = await ClientService.findOne(req.params.client_id);
            res.status(200).json(client);
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
            const updatedClient = await ClientService.update(req.params.client_id, req.body);
            res.status(200).json(updatedClient);
        } catch (err) {
            next(err);
        }
    }

    export async function remove(req, res, next) {
        try {
            const removed = await ClientService.remove(req.params.client_id);
            res.status(200).json(removed);
        } catch (err) {
            next(err);
        }
    }

}
 