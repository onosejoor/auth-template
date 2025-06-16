import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["ACCESS_SECRET", "JWT_SECRET"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
  process.exit(1);
}

export const jwtConfig = {
  accessSecret: process.env.ACCESS_SECRET!,
  jwtSecret: process.env.JWT_SECRET!,
};
