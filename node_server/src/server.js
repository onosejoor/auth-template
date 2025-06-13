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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const helmet_1 = __importDefault(require("helmet"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const logRequests_1 = __importDefault(require("./middlewares/logRequests"));
const signup_controller_1 = require("./controllers/signup.controller");
const validateShema_1 = __importDefault(require("./middlewares/validateShema"));
const shema_config_1 = require("./configs/shema.config");
const signin_controller_1 = require("./controllers/signin.controller");
const oauth_controller_1 = require("./controllers/oauth.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(logRequests_1.default);
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
app.get("/", function (_, res) {
    res.json("Connected");
});
app.post("/auth/signup", (0, validateShema_1.default)(shema_config_1.registerSchema), signup_controller_1.signupController);
app.post("/auth/signin", (0, validateShema_1.default)(shema_config_1.loginShema), signin_controller_1.signinController);
app.post("/auth/oauth", oauth_controller_1.oauthController);
app.use(errorHandler_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    console.log(`Server running on port ${PORT}`);
}));
