// src/types/global.d.ts
import { Types } from "mongoose"; // ✅ makes this file a module

interface IUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
}

interface IFormData {
  username: string;
  email: string;
  password: string;
}

export { IFormData, IUser };
