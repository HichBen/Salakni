"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../controller/client");
var ClientRouter;
(function (ClientRouter) {
    function buildRoutes(app) {
        /**
         * GET
         */
        app.get('/clients', client_1.ClientController.findAll);
        app.get('/clients/:client_id', client_1.ClientController.findOne);
        app.post('/clients/:client_id/update', client_1.ClientController.updateOne);
        /**
         * DELETE
         */
        app.delete('clients/:client_id', client_1.ClientController.remove);
    }
    ClientRouter.buildRoutes = buildRoutes;
})(ClientRouter = exports.ClientRouter || (exports.ClientRouter = {}));
//# sourceMappingURL=client.js.map