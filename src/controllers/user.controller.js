import { asyncHandler } from "../utils/asynchandler.js";

const registeruser = asyncHandler (async(requestAnimationFrame,res) =>{
    res.status(200).jason({
        message: "ok"
    })
})