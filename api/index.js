import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config()

const app = express();

mongoose
    .connect(process.env.MONGODB_URL)
    .then( () => {
        console.log("Mongo db connected")
    })
    .catch( (error) => {
        console.log("Connection error")
       throw new error
    })

app.use(express.json())

app.listen( process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})

app.use('/api/v1/user', userRouter)
app.use('/api/v1/user',authRouter)