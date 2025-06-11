import { Request, Response } from "express";
import User from "@/models/user.model";
import { IFormData } from "@/types/mongodb";
import { createSession } from "@/session/session";
import { Payload } from "@/session/jwt";

export async function signupController(req: Request, res: Response) {
  const { email, username, password } = req.body as IFormData;

  const [findUser] = await Promise.all([
    User.exists({ email }).or([{ username }]),
  ]);

  if (findUser) {
    res.status(409).json({
      success: false,
      message: `email or username already exists `,
    });
    return;
  }

  const newUser = new User({
    email,
    username,
    password,
  });

  const payload: Payload = {
    username,
    id: newUser.id,
  };
  await Promise.all([newUser.save(), createSession({ res, payload })]);

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
}
