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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
const session_1 = require("@/lib/session/session");
const utils_1 = require("@/lib/utils");
const axios_1 = __importDefault(require("axios"));
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { id } = yield (0, session_1.getSession)();
        try {
            const { data } = yield axios_1.default.get(`${utils_1.SERVER_URl}/auth/user/${id}`);
            return Object.assign({}, data);
        }
        catch (error) {
            console.error("Error signing up: ", error);
            if (axios_1.default.isAxiosError(error)) {
                return {
                    success: false,
                    message: (_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message,
                    user: null,
                };
            }
            else {
                return { success: false, message: "Internal error", user: null };
            }
        }
    });
}
