"use strict";
"use server";
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
exports.getSession = getSession;
const headers_1 = require("next/headers");
const decodeJwt_1 = require("./decodeJwt");
function getSession() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const cookie = yield (0, headers_1.cookies)();
        const session = (_a = cookie.get("auth_template_session_token")) === null || _a === void 0 ? void 0 : _a.value;
        if (!session) {
            return { isAuth: false, message: "Unauthenticated" };
        }
        const decodedData = (0, decodeJwt_1.decodeJwt)(session);
        return { isAuth: true, message: "Authenticated", id: decodedData.payload.id };
    });
}
