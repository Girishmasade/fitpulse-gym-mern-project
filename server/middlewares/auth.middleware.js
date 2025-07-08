import jwt from "jsonwebtoken";

export const protectedRoutes = (req, res, next) => {
  try {
    const token = req.headers.autharization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
     console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  
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
