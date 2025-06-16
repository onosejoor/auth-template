import { jwtConfig } from "@/configs/envs";
import { jwtVerify, SignJWT } from "jose";
import { TextEncoder } from "util";

export type Payload = {
  username: string;
  id: string;
};

const config = {
  accessTokenSecret: jwtConfig.accessSecret,
  refreshTokenSecret: jwtConfig.jwtSecret,
  accessTokenExpiry: "15m",
  refreshTokenExpiry: "7d",
};

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface User {
  userId: string;
  email: string;
}

export async function generateTokens(user: Payload): Promise<TokenPair> {
  const accessToken = await encryptJWT(
    user,
    config.accessTokenSecret,
    config.accessTokenExpiry
  );

  const refreshToken = await encryptJWT(
    user,
    config.refreshTokenSecret,
    config.refreshTokenExpiry
  );

  return {
    accessToken,
    refreshToken,
    expiresIn: 15 * 60,
  };
}

export function encryptJWT(
  payload: Payload,
  secret: string,
  expiresIn: string
) {
  const encodedKey = new TextEncoder().encode(secret);

  return new SignJWT(payload)
    .setExpirationTime(expiresIn)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt(Date.now())
    .sign(encodedKey);
}

export async function verifyJWT(jwt: string, secret: string) {
  const encodedKey = new TextEncoder().encode(secret);
  const { payload } = await jwtVerify(jwt, encodedKey, {
    algorithms: ["HS256"],
  });
  return payload as Payload;
}

export async function verifyAccessToken(token: string) {
  try {
    const decoded = await verifyJWT(token, config.accessTokenSecret);
    return decoded;
  } catch (error) {
    return null;
  }
}

// Check if refresh token is valid
export async function verifyRefreshToken(token: string) {
  try {
    const decoded = await verifyJWT(token, config.refreshTokenSecret);
    return decoded;
  } catch (error) {
    return null;
  }
}

// Create new access token using refresh token
export async function refreshAccessToken(refreshToken: string) {
  const user = await verifyRefreshToken(refreshToken);
  if (!user) {
    return null;
  }

  return (await generateTokens({
    username: user.username,
    id: user.id,
  })) as TokenPair;
}
