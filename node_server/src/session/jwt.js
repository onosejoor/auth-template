"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptJWT = encryptJWT;
const jose_1 = require("jose");
const util_1 = require("util");
function encryptJWT(payload) {
    const secretKey = process.env.JWT_SECRET;
    const encodedKey = new util_1.TextEncoder().encode(secretKey);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    return new jose_1.SignJWT(payload)
        .setExpirationTime(expiresAt)
        .setProtectedHeader({
        alg: "HS256",
    })
        .setIssuedAt(Date.now())
        .sign(encodedKey);
}
