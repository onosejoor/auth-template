"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJwt = decodeJwt;
function decodeJwt(token) {
    const [header, payload] = token.split(".");
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));
    return { header: decodedHeader, payload: decodedPayload };
}
