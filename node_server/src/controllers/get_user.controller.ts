import { AuthRequest } from "@/middlewares/requireAuth";
import User from "@/models/user.model";
import {  Response } from "express";
import { Types } from "mongoose";

export async function getUserController(req: AuthRequest, res: Response) {
  const user = req.user;

  const findUser = await User.findById(new Types.ObjectId(user?.id))
    .select(["username", "email", "_id"])
    .lean();
  if (!findUser) {
    res.status(404).json({ success: false, messgae: "User not found" });
    return;
  }

  res.status(200).json({ success: true, user: findUser });
}
