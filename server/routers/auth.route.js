import { Router } from "express";
import { loginUser, registerUser, sendOtp } from "../controllers/auth.controller.js";
import { protectedRoutes } from "../middlewares/auth.middleware.js";

const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.post("/send-otp", sendOtp)

export default authRoutes