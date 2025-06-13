
import { Types } from "mongoose"; 

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
