import type { Request, Response, NextFunction } from "express";
import { refreshAccessToken, verifyAccessToken } from "@/session/jwt";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    username: string;
  };
}

export default async function requireAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const access_token = req.cookies.auth_access_token;
  const refresh_token = req.cookies.auth_session_token;

  if (access_token) {
    const user = await verifyAccessToken(access_token);
    if (user) {
      req.user = user;
      next();
      return;
    }
  }

  if (!refresh_token) {
    res
      .status(401)
      .json({ success: false, message: "No valid refresh or access token" });
    return;
  }

  const tokens = await refreshAccessToken(refresh_token);
  
  if (!tokens?.accessToken) {
    res.status(403).json({success: false, message: "Invalid or expired token" });
    return;
  }

  const user = await verifyAccessToken(tokens.accessToken);
  req.user = user!;
  next();
}
