"use strict";
/**
 * @author: El Mehdi Moumni
 */
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
const provider_1 = __importDefault(require("../model/provider"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var AuthService;
(function (AuthService) {
    function create(clientData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, password, email, phone, description, address, provider, skills, imgUrl } = clientData;
                if (!name || !password || !email || !phone || !address) {
                    return { success: false, message: 'Fill all the fields' };
                }
                if (!imgUrl || imgUrl == undefined) {
                    return { success: false, message: 'Please add a picture' };
                }
                if (provider == 'true' && !skills) {
                    return { success: false, message: 'add your skills' };
                }
                let userFound = yield client_1.default.findOne({ email: email });
                if (userFound)
                    return { success: false, message: 'Email already used' };
                const salt = yield bcrypt_1.default.genSalt(10);
                password = yield bcrypt_1.default.hash(password, salt);
                if (provider == 'true') {
                    skills = skills.split(',');
                    let provider = new provider_1.default({
                        name,
                        email,
                        password,
                        description,
                        phone,
                        address,
                        skills,
                        photo: imgUrl
                    });
                    return yield provider.save();
                }
                else {
                    let client = new client_1.default({
                        name,
                        email,
                        password,
                        phone,
                        address,
                        photo: imgUrl
                    });
                    return yield client.save();
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    AuthService.create = create;
})(AuthService = exports.AuthService || (exports.AuthService = {}));
//# sourceMappingURL=auth.js.map