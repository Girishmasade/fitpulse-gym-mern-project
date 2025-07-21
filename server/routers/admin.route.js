import e, {Router} from 'express'
import { memberList, trainerList } from '../controllers/admin.controller.js'
import { autharizeRoles, protectedRoutes } from '../middlewares/auth.middleware.js'

const adminRouter = Router()

adminRouter.get('/get-trainers', protectedRoutes, autharizeRoles("owner"), trainerList)
adminRouter.get('/get-members', protectedRoutes, memberList)

export default adminRouter