import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { protectedRoutes } from "../middlewares/auth.middleware.js";

const authRoutes = Router()

authRoutes.post("/register", protectedRoutes, registerUser)
authRoutes.post("/login", loginUser)

export default authRoutes