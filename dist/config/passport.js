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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const client_1 = __importDefault(require("../model/client"));
const provider_1 = __importDefault(require("../model/provider"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    let client = yield client_1.default.findOne({ email: email.toLowerCase() });
    if (!client) {
        let provider = yield provider_1.default.findOne({ email: email.toLowerCase() });
        if (!provider) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }
        const validPassowrd = yield bcrypt_1.default.compare(password, provider.password);
        if (!validPassowrd)
            return done(undefined, false, { message: 'invalid passowrd' });
        return done(undefined, provider);
    }
    const validPassowrd = yield bcrypt_1.default.compare(password, client.password);
    if (!validPassowrd)
        return done(undefined, false, { message: 'invalid passowrd' });
    return done(undefined, client);
})));
passport_1.default.serializeUser((user, done) => {
    done(undefined, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    client_1.default.findById(id, (err, user) => {
        if (user == null) {
            provider_1.default.findById(id, (err, user) => {
                return done(err, user);
            });
        }
        else {
            done(err, user);
        }
    });
});
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};
exports.isGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    return next();
};
//# sourceMappingURL=passport.js.map