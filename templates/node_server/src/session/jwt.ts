import { SignJWT } from "jose";
import { TextEncoder } from "util";

export type Payload = {
  username: string;
  id: string;
};

export function encryptJWT(payload: Payload) {
  const secretKey = process.env.JWT_SECRET;
  const encodedKey = new TextEncoder().encode(secretKey);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  return new SignJWT(payload)
    .setExpirationTime(expiresAt)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt(Date.now())
    .sign(encodedKey);
}
