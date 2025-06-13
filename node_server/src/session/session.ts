import { Response } from "express";
import { encryptJWT, Payload } from "./jwt";

type Params = {
  res: Response;
  payload: Payload;
};

export async function createSession({ res, payload }: Params) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const jwtToken = await encryptJWT(payload);

  res.cookie("auth_template_session_token", jwtToken, {
    sameSite: "lax",
    httpOnly: true,
    expires: expiresAt,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}
