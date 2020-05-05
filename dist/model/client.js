"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
;
const ClientSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    ptoto: {
        type: String
    },
    type: {
        type: String,
        default: 'client'
    }
});
const Client = mongoose.model('Client', ClientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map