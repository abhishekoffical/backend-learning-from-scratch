
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

connectDB();




/*
import express from "express";
const app = express()
(async() => {
    try { await mangoose.connect('${process.env.MANGODB_URI}/${DB_NAME}')
       app.on("error",() =>{
        console.log("error:",error);
        throw error

       }) 
       app.listen(process.env.PORT,() =>{
        console.log('App is listening on port ${process.env.PORT}')
       })
    
        
    }   
         catch (error){
            console.error("ERROR:",error);
            throw error
            
        
            }
} )()*/