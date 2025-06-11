import mongoose, { model, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(this.password, 12);

  this.password = hashedPassword;
  next();
});

const User: Model<IUser> =
  mongoose.models?.User || model<IUser>("User", UserSchema);

export default User;
