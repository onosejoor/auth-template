import User from "@/models/user.model";
import { Request, Response } from "express";
import { Types } from "mongoose";

export async function getUserController(req: Request, res: Response) {
  const userId = req.params.id;

  const findUser = await User.findById(new Types.ObjectId(userId))
    .select(["username", "email", "_id"])
    .lean();
  if (!findUser) {
    res.status(404).json({ success: false, messgae: "User not found" });
    return;
  }

  res.status(200).json({ success: true, user: findUser });
}
