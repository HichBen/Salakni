"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author: El Mehdi Moumni
 */
const main_1 = require("./route/main");
const auth_1 = require("./route/auth");
const client_1 = require("./route/client");
const reviews_1 = require("./route/reviews");
const providers_1 = require("./route/providers");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
require("./config/passport");
const dotenv_1 = __importDefault(require("dotenv"));
const app = express_1.default();
dotenv_1.default.config();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(cookie_parser_1.default('secreeet'));
app.use(express_session_1.default({
    secret: 'secreeet',
    resave: true,
    saveUninitialized: true
}));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
mongoose_1.default.connect('mongodb+srv://salakni:OS8U9HDBXOcIZdBb@cluster0-u4sah.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('server running');
}).catch(err => {
    console.log(err);
});
// Members API Routes
main_1.MainRouter.buildRoutes(app);
auth_1.AuthRouter.buildRoutes(app);
client_1.ClientRouter.buildRoutes(app);
reviews_1.ReviewsRouter.buildRoutes(app);
providers_1.ProvidersRouter.buildRoutes(app);
exports.default = app;
//# sourceMappingURL=app.js.map