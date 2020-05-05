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
const provider_1 = __importDefault(require("../model/provider"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = __importDefault(require("../model/client"));
var ProvidersService;
(function (ProvidersService) {
    function getProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            let providers = yield provider_1.default.find({});
            return { success: true, data: providers };
        });
    }
    ProvidersService.getProviders = getProviders;
    function getProvider(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let provider = yield provider_1.default.findOne({ _id: id });
            return { success: true, data: provider };
        });
    }
    ProvidersService.getProvider = getProvider;
    function updateProvider(id, providerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, password, email, confirm } = providerData;
                const provider = yield provider_1.default.findOne({ _id: id });
                if (!provider)
                    return { success: false, message: 'No provider with this id' };
                if (!name || !email)
                    return { success: false, message: 'Please add email and name' };
                let providerFound = yield provider_1.default.findOne({ email: email, _id: { $ne: id } });
                let clientFound = yield client_1.default.findOne({ email: email, _id: { $ne: id } });
                if (clientFound || providerFound)
                    return { success: false, message: 'Email already used' };
                if (password && confirm) {
                    if (password !== confirm)
                        return { success: false, message: 'Passwords not the same' };
                    const salt = yield bcrypt_1.default.genSalt(10);
                    password = yield bcrypt_1.default.hash(password, salt);
                    yield provider_1.default.updateOne({ _id: id }, {
                        password,
                        email,
                        name
                    });
                }
                else {
                    yield provider_1.default.updateOne({ _id: id }, {
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
    ProvidersService.updateProvider = updateProvider;
})(ProvidersService = exports.ProvidersService || (exports.ProvidersService = {}));
//# sourceMappingURL=providers.js.map