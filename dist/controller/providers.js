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
const providers_1 = require("../service/providers");
var ProvidersController;
(function (ProvidersController) {
    function getProviders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const providers = yield providers_1.ProvidersService.getProviders();
                res.status(200).json(providers);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ProvidersController.getProviders = getProviders;
    function getProvider(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const providers = yield providers_1.ProvidersService.getProvider(req.params.provider_id);
                res.status(200).json(providers);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ProvidersController.getProvider = getProvider;
    function updateProvider(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const providers = yield providers_1.ProvidersService.updateProvider(req.params.provider_id, req.body);
                res.status(200).json(providers);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ProvidersController.updateProvider = updateProvider;
})(ProvidersController = exports.ProvidersController || (exports.ProvidersController = {}));
//# sourceMappingURL=providers.js.map