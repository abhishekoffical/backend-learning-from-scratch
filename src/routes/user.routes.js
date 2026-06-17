import { Router } from "express";
const router = Router()
import { registeruser } from "../controllers/user.controller.js";
router.route("/register").post(registeruser)

export default router