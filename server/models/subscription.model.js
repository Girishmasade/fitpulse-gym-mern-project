import mongoose, {Schema} from "mongoose";

export const subscriptionSchema = new Schema({
    plans: {
        enum: ["Basic", "Premium", "Elite"],
    },
    monthlyPrice: {
      type: Number,
      required: true,
    },
    yearlyPrice: {
      type: Number,
      required: true,
    },
     features: [String],
    activeMembers: {
      type: Number,
      default: 0,
    }
}, {timestamps: true})

const Subscription = mongoose.model("Subscription", subscriptionSchema)
export default Subscription