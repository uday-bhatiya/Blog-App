import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.listen( process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})