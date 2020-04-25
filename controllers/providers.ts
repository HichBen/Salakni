const providersService = require("../services/providers");


module.exports = {
    getProvider: async function(req, res, next) {
        try {
            const fakerData = await providersService.fetchProvider(req.params.provider_id);
            res.status(200).json(fakerData);
        } catch (err) {
            next(err);
        }
    },

    postProvider: async function (req, res, next) {
        try {
            const fakerData = await providersService.createProvider(req.body);
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);

        }
    },

    putProvider: async function (req, res, next) {
        try {
            const updatedPerson = await providersService.updateProvider(req.params.provider_id, req.body);
            res.status(200).json(updatedPerson);
        } catch (err) {
            next(err);

        }
    },

    deleteProvider: async function (req, res, next) {
        try {
            const deletedId = await providersService.deleteProvider(req.params.provider_id);
            res.status(200).json(deletedId);
        } catch (err) {
            next(err);

        }
    }
}
