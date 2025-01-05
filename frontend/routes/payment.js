import express from "express"
import { checkout, paymentVerification } from "../controllers/payment.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router()


router.route('/checkout').post(checkout)
router.route('/paymentverification').post(isAuthenticated,paymentVerification)

export default router