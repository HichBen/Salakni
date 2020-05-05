"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controller/auth");
var AuthRouter;
(function (AuthRouter) {
    function buildRoutes(app) {
        /**
         * POST
         */
        app.post('/register', auth_1.AuthController.create);
        /**
         * POST
         */
        app.post('/login', auth_1.AuthController.login);
        app.get('/logout', auth_1.AuthController.logout);
        /**
         * GET
         */
        app.get('/getuser', auth_1.AuthController.getUser);
        /**
         * GET
         */
        app.get('/addpic', auth_1.AuthController.addPic);
    }
    AuthRouter.buildRoutes = buildRoutes;
})(AuthRouter = exports.AuthRouter || (exports.AuthRouter = {}));
//# sourceMappingURL=auth.js.map