import Payment from "../models/payment.model.js";
import History from "../models/history.model.js";
import User from "../models/user.model.js";
import moment from "moment";

export const payment = async (req, res) => {
  try {
    const { amount, paymentMode, paymentDate } = req.body;
    const { month, year, username } = req.query;

    const { userId } = req.user;
    console.log(userId);
    

    if (!amount || !paymentMode || !paymentDate || !month || !year || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields (amount, paymentMode, paymentDate, month, year, username) are required",
      });
    }

    const user = await User.findOne({ _id: userId, username });
    if (!user) {
      return res.status(403).json({ success: false, message: "Invalid user or unauthorized" });
    }

    const formattedDate = moment(paymentDate, "DD/MM/YYYY").toDate();

    const newPayment = new Payment({
      userId: user._id,
      amount,
      method: paymentMode,
      paymentDate: formattedDate,
    });

    await newPayment.save();

    let history = await History.findOne({ userId: user._id, month, year });
    if (!history) {
      history = new History({
        userId: user._id,
        month,
        year,
      });
      await history.save();
    }

    return res.status(201).json({
      success: true,
      message: "Payment recorded successfully",
      payment: newPayment,
      history,
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
