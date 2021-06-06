import express from "express"
import { getUsers, registerUsers, updateAyuda } from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsers)
router.post("/", registerUsers)
router.put("/", updateAyuda)

export default router
