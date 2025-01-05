import express from "express"
import { getUserMessages, login, logout, register, submitContactForm } from "../controllers/user.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/contact', submitContactForm)

router.get('/logout', logout)
router.get('/messages', isAuthenticated, getUserMessages)

export default router