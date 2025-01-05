import { app } from "./app.js";
import { connectDB } from "./data/database.js"
import Razorpay from "razorpay"

connectDB()

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
})

app.listen(4000, () => {
    console.log(`server is working on port ${process.env.PORT}`);
})