"use strict";
"use client";
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
exports.default = SignUpForm;
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const separator_1 = require("@/components/ui/separator");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
const utils_1 = require("@/lib/utils");
const sonner_1 = require("sonner");
const axios_1 = __importDefault(require("axios"));
const signup_1 = require("@/actions/signup");
const navigation_1 = require("next/navigation");
function SignUpForm() {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [formData, setFormData] = (0, react_1.useState)({
        email: "",
        username: "",
        password: "",
        agreeToTerms: false,
    });
    const router = (0, navigation_1.useRouter)();
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [name]: type === "checkbox" ? checked : value })));
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        console.log("Sign up data:", formData);
        if (!(0, utils_1.validateFields)(formData)) {
            sonner_1.toast.error("All fields must be filled");
            return;
        }
        try {
            const { success, message } = yield (0, signup_1.signup)(formData);
            const toastType = success ? "success" : "error";
            sonner_1.toast[toastType](message);
            if (success) {
                router.push("/profile");
            }
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                sonner_1.toast.error(`Error signing up: ${(_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message}`);
            }
            else {
                const message = error instanceof Error ? error.message : "Internal error";
                sonner_1.toast.error(`Error signing up: ${message}`);
            }
            console.error("Error signing up: ", error);
        }
    });
    return (<div className="min-h-screen bg-auth-background flex items-center justify-center p-4">
      <card_1.Card className="w-full max-w-md bg-auth-card border-auth-card-border shadow-lg">
        <card_1.CardHeader className="space-y-1 text-center">
          <card_1.CardTitle className="text-2xl font-bold text-auth-text-primary">
            Create Account
          </card_1.CardTitle>
          <card_1.CardDescription className="text-auth-text-secondary">
            Enter your details to create your account
          </card_1.CardDescription>
        </card_1.CardHeader>
        <card_1.CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label_1.Label htmlFor="email" className="text-auth-text-primary font-medium">
                Email Address
              </label_1.Label>
              <div className="relative">
                <lucide_react_1.Mail className="absolute left-3 top-3 h-4 w-4 text-auth-icon"/>
                <input_1.Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} className="pl-10 border-auth-input-border focus:border-auth-input-focus focus:ring-auth-input-focus" required/>
              </div>
            </div>

            <div className="space-y-2">
              <label_1.Label htmlFor="username" className="text-auth-text-primary font-medium">
                Username
              </label_1.Label>
              <div className="relative">
                <lucide_react_1.User className="absolute left-3 top-3 h-4 w-4 text-auth-icon"/>
                <input_1.Input id="username" name="username" type="text" placeholder="johndoe" value={formData.username} onChange={handleInputChange} className="pl-10 border-auth-input-border focus:border-auth-input-focus focus:ring-auth-input-focus" required/>
              </div>
            </div>

            <div className="space-y-2">
              <label_1.Label htmlFor="password" className="text-auth-text-primary font-medium">
                Password
              </label_1.Label>
              <div className="relative">
                <lucide_react_1.Lock className="absolute left-3 top-3 h-4 w-4 text-auth-icon"/>
                <input_1.Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create a password" value={formData.password} onChange={handleInputChange} className="pl-10 pr-10 border-auth-input-border focus:border-auth-input-focus focus:ring-auth-input-focus" required/>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-auth-icon hover:text-auth-icon-hover">
                  {showPassword ? (<lucide_react_1.EyeOff className="h-4 w-4"/>) : (<lucide_react_1.Eye className="h-4 w-4"/>)}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input id="terms" name="agreeToTerms" type="checkbox" checked={formData.agreeToTerms} onChange={handleInputChange} className="rounded border-auth-input-border text-auth-button-primary focus:ring-auth-input-focus" required/>
              <label_1.Label htmlFor="terms" className="text-sm text-auth-text-muted">
                I agree to the{" "}
                <button type="button" className="text-auth-link hover:text-auth-link-hover underline">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button type="button" className="text-auth-link hover:text-auth-link-hover underline">
                  Privacy Policy
                </button>
              </label_1.Label>
            </div>

            <button_1.Button type="submit" className="w-full bg-auth-button-primary text-white hover:bg-auth-button-primary-hover">
              Create Account
            </button_1.Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <separator_1.Separator className="w-full"/>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-auth-card px-2 text-auth-text-muted">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button_1.Button variant="outline" className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover">
              Google
            </button_1.Button>
            <button_1.Button variant="outline" className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover">
              GitHub
            </button_1.Button>
          </div>

          <div className="text-center">
            <span className="text-auth-text-secondary">
              Already have an account?
            </span>
            <link_1.default href="/signin" className="ml-2 text-auth-link hover:text-auth-link-hover font-medium">
              Sign in
            </link_1.default>
          </div>
        </card_1.CardContent>
      </card_1.Card>
    </div>);
}
