"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
const link_1 = __importDefault(require("next/link"));
const button_1 = require("@/components/ui/button");
function HomePage() {
    return (<div className="min-h-screen bg-auth-background flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-auth-text-primary">Welcome</h1>
        <p className="text-auth-text-secondary text-lg">Choose an option to get started</p>
        <div className="flex gap-4 justify-center">
          <link_1.default href="/signin">
            <button_1.Button className="bg-auth-button-primary text-white hover:bg-auth-button-primary-hover">
              Sign In
            </button_1.Button>
          </link_1.default>
          <link_1.default href="/signup">
            <button_1.Button variant="outline" className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover">
              Sign Up
            </button_1.Button>
          </link_1.default>
          <link_1.default href="/profile">
            <button_1.Button variant="outline" className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover">
              Profile
            </button_1.Button>
          </link_1.default>
        </div>
      </div>
    </div>);
}
