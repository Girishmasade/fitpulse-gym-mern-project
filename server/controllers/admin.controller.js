import Payment from "../models/payment.model.js";
import Subscription from "../models/subscription.model.js";
import User from "../models/user.model.js";

export const trainerList = async (req, res) => {
  try {
    const trainerRole = await User.find({ role: "trainer" });
    console.log(trainerRole);

    if (!trainerRole || trainerRole.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No trainers found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Trainer list fetched successfully",
      trainers: trainerRole,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const memberList = async (req, res) => {
  try {
    const userRole = await User.find({ role: "member" });
    console.log(userRole);

    if (!userRole || userRole.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No trainers found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Trainer list fetched successfully",
      users: userRole,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createSubscriptionPlan = async (req, res) => {
  try {
    const { plans, monthlyPrice, yearlyPrice, features, activeMembers } = req.body;

    if (!plans || !monthlyPrice || !yearlyPrice || !features) {
      return res.status(400).json({success: false, message: "all fields required"})
    }

    const createNewPlan = await Subscription.create({
      plans,
      monthlyPrice,
      yearlyPrice,
      features,
      activeMembers: activeMembers || 0
    })

    console.log(createNewPlan);
    

     return res.status(201).json({
      success: true,
      message: "Subscription plan created successfully",
      plan: createNewPlan
    });

  } catch (error) {
       console.error("Error creating subscription plan:", error)
 return res.status(500).json({ success: false, message: error.message });
  }
};

// export const dashboardStats = async (req, res) => {
//   try {

//     const date = new Date()

//     const currentMonth = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
//     const prevMonthStarts = new Date(date.getFullYear(), date.getMonth(), -1, 1).toLocaleDateString()
//     const prevMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0).toLocaleDateString()

//     console.log(currentMonth, prevMonthStarts, prevMonthEnd);

//     // active member
//     const activeMember = await User.countDocuments({role: "member", status: "active"})
//     console.log(activeMember);

//     // monthly revenue
//     const [currentMonthRevenue] = await Payment.aggregate([
//       {$match: {paymentDate: {$gte: currentMonth}}},
//       { $group: { _id: null, total: { $sum: "$amount" } } }
//     ])

//     const currentRevenue = currentMonthRevenue?.total || 0

//     console.log(currentRevenue);

//     // renewal Rate

//     const currentDue = await User.countDocuments({role: "member", renewalDue: "true"})
//     const currentRenewed = await User.countDocuments({role: "member", renewalDue: "true", renewed: "true"})
//     const currentRenewedDate = currentDue ? (currentDue / currentRenewed) * 100 : 0

//     console.log(currentRenewedDate);
    
//     // pending renewed

//     const pendingRenewd = await User.countDocuments({role: "member", renewalDue: "true", renewed: "false"})

//     console.log(pendingRenewd);
    
    
//     return res.status(200).json({success: true, activeMember})
//   } catch (error) {
//      return res.status(500).json({ success: false, message: error.message });
//   }
// }

export const dashboardStats = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const member = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}