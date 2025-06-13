import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import helmet from "helmet";
import errorHandler from "./middlewares/errorHandler";
import logRequests from "./middlewares/logRequests";
import { signupController } from "./controllers/signup.controller";
import validateSchema from "./middlewares/validateShema";
import { loginShema, registerSchema } from "./configs/shema.config";
import { signinController } from "./controllers/signin.controller";
import { oauthController } from "./controllers/oauth.controller";

dotenv.config();

const app = express();

app.use(helmet());
app.use(logRequests);
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.get("/", function (_, res) {
  res.json("Connected");
});

app.post("/auth/signup", validateSchema(registerSchema), signupController);
app.post("/auth/signin", validateSchema(loginShema), signinController);
app.post("/auth/oauth", oauthController);

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
