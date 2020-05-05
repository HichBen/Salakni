"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../service/client");
var ClientController;
(function (ClientController) {
    function findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield client_1.ClientService.findAll();
                res.status(200).json(clients);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ClientController.findAll = findAll;
    function findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield client_1.ClientService.findOne(req.params.client_id);
                res.status(200).json(client);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ClientController.findOne = findOne;
    function updateOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield client_1.ClientService.updateOne(req.params.client_id, req.body);
                console.log(client);
                res.status(200).json(client);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ClientController.updateOne = updateOne;
    function remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const removed = yield client_1.ClientService.remove(req.params.client_id);
                res.status(200).json(removed);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ClientController.remove = remove;
})(ClientController = exports.ClientController || (exports.ClientController = {}));
//# sourceMappingURL=client.js.map