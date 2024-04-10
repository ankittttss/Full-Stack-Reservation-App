import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js"
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Backend")
    } catch (error) {
        throw (error)
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("mongoDb Connected");
})

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",auth)
app.use("/api/users",users)
app.use("/api/hotels",hotels)
app.use("/api/rooms",rooms)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

// The app.use() function is used to mount the specified middleware function(s) 
// at the path that is being specified. 
// It is mostly used to set up middleware for your application.

app.listen(8000, () => {
    connect()
    console.log("Connected")
})