import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import routes from "./route/crud.route.js";

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()

const PORT=process.env.PORT
const MONGOURL=process.env.MONGOURL

mongoose.connect(MONGOURL).then(()=>{
    console.log("DB is connected");
    app.listen(PORT,()=>{
        console.log(`server is running ${PORT}`);
        
    })
    
}).catch((err)=>{console.log(err);
})

app.use("/api",routes)