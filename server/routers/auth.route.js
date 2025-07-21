import { Router } from "express";
import { loginUser, registerUser, resendOtp, sendOtp, verifyOtp } from "../controllers/auth.controller.js";
import { protectedRoutes } from "../middlewares/auth.middleware.js";

const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.post("/send-otp", sendOtp)
authRoutes.get("/verify-otp", verifyOtp)
authRoutes.post("/resend-otp", resendOtp)

export default authRoutes