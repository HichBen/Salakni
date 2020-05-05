"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const passport_1 = require("../config/passport");
var MainRouter;
(function (MainRouter) {
    function buildRoutes(app) {
        /**
         * GET
         */
        app.get('/', (req, res, next) => {
            // console.log(req.user)
            res.sendFile(path_1.default.join(__dirname + '../../../views/index.html'));
        });
        app.get('/login', passport_1.isGuest, (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname + '../../../views/login.html'));
        });
        app.get('/register', passport_1.isGuest, (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname + '../../../views/signup.html'));
        });
        app.get('/providers', passport_1.isAuthenticated, (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname + '../../../views/providers.html'));
        });
        app.get('/provider', (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname + '../../../views/providerPage.html'));
        });
        app.get('/user', passport_1.isAuthenticated, (req, res, next) => {
            res.sendFile(path_1.default.join(__dirname + '../../../views/user.html'));
        });
    }
    MainRouter.buildRoutes = buildRoutes;
})(MainRouter = exports.MainRouter || (exports.MainRouter = {}));
//# sourceMappingURL=main.js.map