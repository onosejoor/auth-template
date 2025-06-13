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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
const jwt_1 = require("./jwt");
function createSession(_a) {
    return __awaiter(this, arguments, void 0, function* ({ res, payload }) {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const jwtToken = yield (0, jwt_1.encryptJWT)(payload);
        res.cookie("auth_template_session_token", jwtToken, {
            sameSite: "lax",
            httpOnly: true,
            expires: expiresAt,
            path: "/",
            secure: process.env.NODE_ENV === "production",
        });
    });
}
