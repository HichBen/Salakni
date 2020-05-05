"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = require("../controller/providers");
var ProvidersRouter;
(function (ProvidersRouter) {
    function buildRoutes(app) {
        /**
         * GET
         */
        app.get('/api/providers', providers_1.ProvidersController.getProviders);
        app.get('/api/providers/:provider_id', providers_1.ProvidersController.getProvider);
        app.post('/api/providers/:provider_id/update', providers_1.ProvidersController.updateProvider);
    }
    ProvidersRouter.buildRoutes = buildRoutes;
})(ProvidersRouter = exports.ProvidersRouter || (exports.ProvidersRouter = {}));
//# sourceMappingURL=providers.js.map