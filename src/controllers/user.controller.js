import { asyncHandler } from "../utils/asynchandler.js";
import mongoose from "mongoose";


const registeruser = asyncHandler (async(req,res) =>{
    res.status(200).json({
        message: "ok"
    })
})
export {registeruser}