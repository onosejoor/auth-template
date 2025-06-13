"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profile;
const react_1 = require("react");
const profile_page_1 = __importDefault(require("./_components/profile-page"));
const getUser_1 = require("@/actions/getUser");
function Profile() {
    const user = (0, react_1.use)((0, getUser_1.getUser)());
    if (!user.success) {
        return new Error("Error fetching user");
    }
    return <profile_page_1.default user={user.user}/>;
}
