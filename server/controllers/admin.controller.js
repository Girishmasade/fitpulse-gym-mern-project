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
        const userRole = await User.find({role: "member"})
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
}