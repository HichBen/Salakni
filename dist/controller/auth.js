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
const auth_1 = require("../service/auth");
const passport_1 = __importDefault(require("passport"));
const client_1 = __importDefault(require("../model/client"));
const faker_1 = __importDefault(require("faker"));
const provider_1 = __importDefault(require("../model/provider"));
var AuthController;
(function (AuthController) {
    function create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientData = yield auth_1.AuthService.create(req.body);
                res.json({ success: true, message: "User registered" });
            }
            catch (err) {
                res.json({ success: false, message: "Error, Try again later" });
            }
        });
    }
    AuthController.create = create;
    function login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            passport_1.default.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.json({ success: false, message: info.message });
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return res.json({ success: false, message: err });
                    }
                    return res.json({ success: true, message: "Login Success" });
                });
            })(req, res, next);
        });
    }
    AuthController.login = login;
    function getUser(req, res, next) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.user) {
                    let client = yield client_1.default.findOne({ _id: (_a = req.session) === null || _a === void 0 ? void 0 : _a.passport.user });
                    if (!client) {
                        let provider = yield provider_1.default.findOne({ _id: (_b = req.session) === null || _b === void 0 ? void 0 : _b.passport.user });
                        if (!provider)
                            return res.json({ success: false });
                        return res.json({ success: true, data: provider });
                    }
                    else {
                        return res.json({ success: true, data: client });
                    }
                }
                else {
                    res.json({ success: false });
                }
            }
            catch (err) {
                res.json({ success: false, message: "Error, Try again later" });
            }
        });
    }
    AuthController.getUser = getUser;
    function addPic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let file = yield faker_1.default.image.avatar();
                console.log(file);
                res.json({ success: true, data: file });
            }
            catch (err) {
                res.json({ success: false, message: "Error, Try again later" });
            }
        });
    }
    AuthController.addPic = addPic;
    function logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.logOut();
            res.redirect('/');
        });
    }
    AuthController.logout = logout;
})(AuthController = exports.AuthController || (exports.AuthController = {}));
//# sourceMappingURL=auth.js.map