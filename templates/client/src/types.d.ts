declare global {
  type SignUpFormData = {
    email: string;
    username: string;
    password: string;
    agreeToTerms: boolean;
  };

  type SigninFormData = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  type APIRes = {
    success: boolean;
    message: string;
  };

  type UserData = {
    success: boolean;
    email: string;
    created_at: Date;
    username: string;
  };

  type UserRes = {
    success: boolean;
    user: UserData;
  };
}

export {};
