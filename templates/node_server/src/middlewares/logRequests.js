"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../configs/logger"));
const logRequests = (req, res, next) => {
    logger_1.default.info(`Recieved method ${req.method} from ${req.url}`);
    next();
};
exports.default = logRequests;
