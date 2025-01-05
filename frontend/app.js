import express from "express"
import {config} from "dotenv"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors"
import paymentRouter from "./routes/payment.js"

config({
    path: "./data/config.env"
})

export const app = express()

//using middleware
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE',  
    credentials: true               
  }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


//using routes
app.use('/api/v2/users',userRouter)
app.use('/api/v2/payment',paymentRouter)

app.get('/',(req,res) => {
    console.log("working nice");
})

app.use("/api/v2/payment/getKey", (req,res) => 
    res.status(200).json({key: process.env.RAZORPAY_API_KEY}))

app.use(errorMiddleware)