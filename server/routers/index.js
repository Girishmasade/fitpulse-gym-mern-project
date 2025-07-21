import { Router } from "express";
import authRoutes from "./auth.route.js";
import paymentRoute from "./payment.route.js";
import adminRouter from "./admin.route.js";

const routes = Router()

routes.use("/auth", authRoutes)
routes.use("/payment", paymentRoute)
routes.use("/admin", adminRouter)

export default routes;