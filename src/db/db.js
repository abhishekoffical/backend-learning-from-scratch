import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {const connectioninstance= await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
        console.log(`\n mangoDB connected !! DB HOST:${connectioninstance.connection.host}`);
        
    } catch (error) {console.log("MANGODB connectionerror",error);
        process.exit(1)
        
    }
}
export default connectDB
