import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    console.log("Couldn't connect to MongoDB", error.message)
    process.exit(1)   //exiting at failure, (code 1: failure --- 0: Success)
  }
};

export default connectDB;
