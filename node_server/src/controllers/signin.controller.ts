import { Request, Response } from "express";
import User from "@/models/user.model";
import { IFormData } from "@/types/mongodb";
import { createSession } from "@/session/session";
import { Payload } from "@/session/jwt";
import bcrypt from "bcryptjs";

export async function signinController(req: Request, res: Response) {
  const { email, password } = req.body as IFormData;

  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(404).json({
      success: false,
      message: `email does not exist`,
    });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, findUser.password);
  if (!passwordMatched) {
    res.status(400).json({
      success: true,
      message: "Incorrect password",
    });
    return;
  }

  const { id, username } = findUser;

  const payload: Payload = {
    username,
    id,
  };
  await createSession({ res, payload });

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
}
