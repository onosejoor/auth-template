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
exports.signinController = signinController;
const user_model_1 = __importDefault(require("@/models/user.model"));
const session_1 = require("@/session/session");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function signinController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const findUser = yield user_model_1.default.findOne({ email });
        if (!findUser) {
            res.status(404).json({
                success: false,
                message: `email does not exist`,
            });
            return;
        }
        const passwordMatched = yield bcryptjs_1.default.compare(password, findUser.password);
        if (!passwordMatched) {
            res.status(400).json({
                success: true,
                message: "Incorrect password",
            });
            return;
        }
        const { id, username } = findUser;
        const payload = {
            username,
            id,
        };
        yield (0, session_1.createSession)({ res, payload });
        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    });
}
