import { Router } from "express";
import { payment } from "../controllers/payemnt.controller.js";
import { autharizeRoles, protectedRoutes } from "../middlewares/auth.middleware.js";

const paymentRoute = Router()

paymentRoute.post("/make-payment", protectedRoutes, payment)

export default paymentRoute