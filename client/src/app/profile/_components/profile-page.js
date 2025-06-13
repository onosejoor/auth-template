"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfilePage;
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const avatar_1 = require("@/components/ui/avatar");
const lucide_react_1 = require("lucide-react");
function ProfilePage({ user }) {
    const handleSignOut = () => {
        console.log("Signing out...");
    };
    return (<div className="min-h-screen bg-auth-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-auth-text-primary">Profile</h1>
          <button_1.Button onClick={handleSignOut} variant="outline" className="border-auth-input-border text-auth-text-primary hover:bg-red-50 hover:text-red-600 hover:border-red-200">
            <lucide_react_1.LogOut className="w-4 h-4 mr-2"/>
            Sign Out
          </button_1.Button>
        </div>

        {/* Profile Card */}
        <card_1.Card className="bg-auth-card border-auth-card-border shadow-lg">
          <card_1.CardHeader className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <avatar_1.Avatar className="w-24 h-24">
                <avatar_1.AvatarFallback className="text-2xl bg-auth-button-primary text-white">
                  {user.username.charAt(0).toUpperCase()}
                </avatar_1.AvatarFallback>
              </avatar_1.Avatar>
              <div className="space-y-2">
                <card_1.CardTitle className="text-2xl text-auth-text-primary">
                  @{user.username}
                </card_1.CardTitle>
              </div>
            </div>
          </card_1.CardHeader>
          <card_1.CardContent className="space-y-6">
            {/* User Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <lucide_react_1.Mail className="w-5 h-5 text-auth-icon"/>
                <div>
                  <p className="text-sm text-auth-text-muted">Email</p>
                  <p className="text-auth-text-primary font-medium">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <lucide_react_1.Calendar className="w-5 h-5 text-auth-icon"/>
                <div>
                  <p className="text-sm text-auth-text-muted">Member since</p>
                  <p className="text-auth-text-primary font-medium">
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <lucide_react_1.User className="w-5 h-5 text-auth-icon"/>
                <div>
                  <p className="text-sm text-auth-text-muted">Username</p>
                  <p className="text-auth-text-primary font-medium">
                    @{user.username}
                  </p>
                </div>
              </div>
            </div>
          </card_1.CardContent>
        </card_1.Card>
      </div>
    </div>);
}
