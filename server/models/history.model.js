import mongoose, { Schema } from "mongoose";

const historySchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    month: {
      type: String,
      enum: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      required: true,
    },
    year: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);
export default History;
