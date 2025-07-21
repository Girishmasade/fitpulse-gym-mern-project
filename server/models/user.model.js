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
      unique: true,
    },
    role: {
      type: String,
      enum: ["owner", "trainer", "member"],
    },
    status: {
      type: String,
      enm: ["active", "inactive", "Pending Renewal"],
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verifyOtpExpiry: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpireAt: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
    },
    subscriptionPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
    renewalDue: {
      type: Boolean,
      default: false,
    },
    renewed: {
      type: Boolean,
      default: false,
    },
    renewalUpdatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
