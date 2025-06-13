"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../configs/logger"));
const errorHandler = (err, req, res, next) => {
    logger_1.default.info(err.stack);
    res
        .status(err.status || 500)
        .json({ success: false, message: err.message || "Internal server error" });
    next();
};
exports.default = errorHandler;
