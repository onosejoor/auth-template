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
exports.config = void 0;
exports.middleware = middleware;
const server_1 = require("next/server");
const session_1 = require("./lib/session/session");
const protectedRoute = ["/profile"];
function middleware(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { isAuth } = yield (0, session_1.getSession)();
        if (!isAuth && protectedRoute.includes(req.nextUrl.pathname)) {
            return server_1.NextResponse.redirect(new URL("/signin", req.nextUrl));
        }
    });
}
exports.config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
