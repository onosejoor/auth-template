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
exports.oauthController = oauthController;
const user_model_1 = __importDefault(require("@/models/user.model"));
const session_1 = require("@/session/session");
const unique_username_generator_1 = require("unique-username-generator");
function oauthController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const checkUserExists = yield user_model_1.default.findOne({ email });
        if (checkUserExists) {
            const payload = {
                username: checkUserExists.username,
                id: checkUserExists.id,
            };
            yield (0, session_1.createSession)({ res, payload });
            res.status(200).json({ success: true, message: "user signed-in" });
            return;
        }
        const username = (0, unique_username_generator_1.generateFromEmail)(email, 5);
        const newUser = new user_model_1.default({
            email,
            username,
        });
        const payload = {
            username,
            id: newUser.id,
        };
        yield Promise.all([newUser.save(), (0, session_1.createSession)({ res, payload })]);
        res.status(201).json({ success: true, message: "User created successfully" });
        return;
    });
}
