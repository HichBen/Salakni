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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../model/client"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const provider_1 = __importDefault(require("../model/provider"));
var ClientService;
(function (ClientService) {
    function findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = client_1.default.find({}).lean().exec();
                return clients;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ClientService.findAll = findAll;
    function findOne(client_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = client_1.default.find({ _id: client_id }).lean().exec();
                return client;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ClientService.findOne = findOne;
    function updateOne(client_id, clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, password, email, confirm } = clientData;
                const client = yield client_1.default.findOne({ _id: client_id });
                if (!client)
                    return { success: false, message: 'No client with this id' };
                if (!name || !email)
                    return { success: false, message: 'Please add email and name' };
                let providerFound = yield provider_1.default.findOne({ email: email, _id: { $ne: client_id } });
                let clientFound = yield client_1.default.findOne({ email: email, _id: { $ne: client_id } });
                if (clientFound || providerFound)
                    return { success: false, message: 'Email already used' };
                if (password && confirm) {
                    if (password !== confirm)
                        return { success: false, message: 'Passwords not the same' };
                    const salt = yield bcrypt_1.default.genSalt(10);
                    password = yield bcrypt_1.default.hash(password, salt);
                    yield client_1.default.updateOne({ _id: client_id }, {
                        password,
                        email,
                        name
                    });
                }
                else {
                    yield client_1.default.updateOne({ _id: client_id }, {
                        email,
                        name
                    });
                }
                return { success: true, message: 'Client updated' };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ClientService.updateOne = updateOne;
    function remove(client_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const remove = yield client_1.default.findOneAndRemove({ _id: client_id });
                return remove;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ClientService.remove = remove;
})(ClientService = exports.ClientService || (exports.ClientService = {}));
//# sourceMappingURL=client.js.map