import { Response } from "express";
import { generateTokens, Payload } from "./jwt";

type Params = {
  res: Response;
  payload: Payload;
};

export async function createSession({ res, payload }: Params) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const jwtToken = await generateTokens(payload);

  res.cookie("auth_access_token", jwtToken.accessToken, {
    sameSite: "lax",
    httpOnly: true,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  res.cookie("auth_session_token", jwtToken.refreshToken, {
    sameSite: "lax",
    httpOnly: true,
    expires: expiresAt,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}
