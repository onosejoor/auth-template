import mongoose from "mongoose";
import  logger from "../../logger";

export default async function connectDB() {
  const MONGODB_URL = process.env.MONGODB_URL;

  if (!MONGODB_URL) {
    throw new Error("mongodb url missing. add it in the .env file");
  }

  try {
    const conn = await mongoose.connect(MONGODB_URL, {
      bufferCommands: true,
    });
    logger.info(`connected to mongodb from host: ${conn.connection.host} `);
  } catch (error) {
    throw error;
  }
}
