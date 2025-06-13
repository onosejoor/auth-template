import User from "@/models/user.model";
import { createSession } from "@/session/session";
import { IFormData } from "@/types/mongodb";
import { Request, Response } from "express";
import { generateFromEmail } from "unique-username-generator";

export async function oauthController(req: Request, res: Response) {
  const { email } = req.body as IFormData;

  const checkUserExists = await User.findOne({ email });
  if (checkUserExists) {
    const payload = {
      username: checkUserExists.username,
      id: checkUserExists.id,
    };
    await createSession({ res, payload });

    res.status(200).json({ success: true, message: "user signed-in" });
    return;
  }

  const username = generateFromEmail(email, 5);
  const newUser = new User({
    email,
    username,
  });

  const payload = {
    username,
    id: newUser.id,
  };


  await Promise.all([newUser.save(), createSession({ res, payload })]);

  res.status(201).json({ success: true, message: "User created successfully" });
  return
}
