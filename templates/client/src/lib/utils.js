"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_URl = void 0;
exports.cn = cn;
exports.validateFields = validateFields;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
function validateFields(fields) {
    const keys = Object.keys(fields);
    const isEmptyFields = keys.some((key) => typeof fields[key] === "string" && !fields[key].trim());
    return { isEmptyFields };
}
exports.SERVER_URl = process.env.SERVER_URL;
