import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL);
    if (connected.connect) {
      console.log("connected to mongodb successfully");
    } else {
      console.log("connection error");
      process.exit(1);
    }
  } catch (error) {
    console.log("connection error", error.message);
  }
};

export default connection;
