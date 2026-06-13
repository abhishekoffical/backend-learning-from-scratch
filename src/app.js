 import express from "express";
 import cors from "cors";
 import cookiesparser from "cookies-parser";



 const app = express()
 app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
 }
 ))

 app.use(express.jason({limit:"16kb"}))
 app.use(express.urlencoded({extended:true ,limit: "16kb"}))
 app.use(express.static("public"))
 app.use(cookiesparser())
 export {app}