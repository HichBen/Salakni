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
const ProviderSchema = new Schema({
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
    type: {
        type: String,
        default: 'provider'
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
    photo: {
        type: String
    },
    skills: [{
            type: String,
            default: undefined
        }]
});
const Provider = mongoose.model('Provider', ProviderSchema);
exports.default = Provider;
//# sourceMappingURL=provider.js.map