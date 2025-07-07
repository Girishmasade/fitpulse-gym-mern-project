import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    role: {
        type: String,
        enum: ["owner", "trainer", "member"]
    },
    password: {
        type: String,
    }
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema)
export default User