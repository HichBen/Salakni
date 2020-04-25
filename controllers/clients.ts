/**
 * @author: El Mehdi Moumni
 */

const clientsService = require("../services/clients");


module.exports = {

    getOneClient: async function(req, res, next) {
        try {
            const fakerData = await clientsService.fetchOneClient(req.params.client_id);
            res.status(200).json(fakerData);
        } catch (err) {
            next(err);
        }
    },

    getAllClients: async function (req, res, next) {
        try {
            const fakerData = await clientsService.fetchAllClients();
            res.status(200).json(fakerData);
        } catch (err) {
            next(err);
        }
    },

    postClient: async function (req, res, next) {
        try {
            const fakerData = await clientsService.createClient(req.body);
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);

        }
    },

    putClient: async function (req, res, next) {
        try {
            const updatedPerson = await clientsService.updateClient(req.params.client_id, req.body);
            res.status(200).json(updatedPerson);
        } catch (err) {
            next(err);

        }
    },

    deleteClient: async function (req, res, next) {
        try {
            const deletedId = await clientsService.deleteClient(req.params.client_id);
            res.status(200).json(deletedId);
        } catch (err) {
            next(err);

        }
    }
}
