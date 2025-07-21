import e, {Router} from 'express'
import { createSubscriptionPlan, dashboardStats, memberList, trainerList } from '../controllers/admin.controller.js'
import { autharizeRoles, protectedRoutes } from '../middlewares/auth.middleware.js'

const adminRouter = Router()

adminRouter.get('/get-trainers', protectedRoutes, autharizeRoles("owner"), trainerList)
adminRouter.get('/get-members', protectedRoutes, memberList)
adminRouter.post('/create-subscription', createSubscriptionPlan)
adminRouter.get('/dashboard-stats', dashboardStats)

export default adminRouter