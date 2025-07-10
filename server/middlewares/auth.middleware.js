import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoutes = async (req, res, next) => {
try {
  const authHeader = req.heaers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    console.log("Authorization header is missing or invalid");
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const token = authHeader.split(" ")[1]

  if (!token) {
    console.log("Token is missing");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id).select("-password")

  next()

} catch (error) {
  
}
};

export const autharizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: `Access denied for role: ${req.user.role}` });
    }
    next();
  };
};
