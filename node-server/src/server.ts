import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import helmet from "helmet";
import errorHandler from "./middlewares/errorHandler";
import logRequests from "./middlewares/logRequests";
import { signupController } from "./controllers/auth.controller";

dotenv.config();

const app = express();

app.use(helmet());
app.use(logRequests)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
  //   res.cookie("session", "hello", {
  //     sameSite: true,
  //     httpOnly: true,
  //     expires: new Date(Date.now() * 60 * 5),
  //     maxAge: 3000,
  //     path: "/",
  //     secure: process.env.NODE_ENV === "production",
  //   });
  res.status(200).json({ success: true, message: "connected" });
});

app.post("/auth/signup", signupController)

app.use(errorHandler)

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
