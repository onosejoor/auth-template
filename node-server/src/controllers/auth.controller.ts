import { Request, Response } from "express";
import User from "../models/user.model";
import { IFormData } from "@/types/mongodb";

export async function signupController(req: Request, res: Response) {
  const { email, username, password } = req.body as IFormData;

  if (!email || !username || !password) {
    res
      .status(400)
      .json({ success: false, message: "All fields must be filled" });
    return;
  }

  const [findUser, checkUsername] = await Promise.all([
    User.exists({ email }),
    User.exists({ username }),
  ]);

  if (findUser) {
    res.status(409).json({
      success: false,
      message: `email: ${email} is already registered`,
    });
    return;
  }
  if (checkUsername) {
    res.status(409).json({
      success: false,
      message: `username already exists`,
    });
    return;
  }

  const newUser = new User({
    email,
    username,
    password,
  });

  await newUser.save();

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser,
  });
}
