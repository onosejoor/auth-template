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
exports.signupController = signupController;
const user_model_1 = __importDefault(require("@/models/user.model"));
const session_1 = require("@/session/session");
function signupController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, username, password } = req.body;
        const [findUser] = yield Promise.all([
            user_model_1.default.exists({ email }).or([{ username }]),
        ]);
        if (findUser) {
            res.status(409).json({
                success: false,
                message: `email or username already exists `,
            });
            return;
        }
        const newUser = new user_model_1.default({
            email,
            username,
            password,
        });
        const payload = {
            username,
            id: newUser.id,
        };
        yield Promise.all([newUser.save(), (0, session_1.createSession)({ res, payload })]);
        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    });
}
