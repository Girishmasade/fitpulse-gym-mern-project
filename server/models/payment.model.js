import mongoose, { Mongoose, Schema } from "mongoose";
import User from "./user.model.js";

export const paymentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  paymentMode: {
    type: String,
    enum: ["upi", "card", "cash", "paypal"],
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  historyRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "History"
  }
}, {timestamps: true});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
