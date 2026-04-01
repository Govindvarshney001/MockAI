import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI ;
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected: ${uri}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message || error);
    throw error;
  }
};

export default connectDB;
