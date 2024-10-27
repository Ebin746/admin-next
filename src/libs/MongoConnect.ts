import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
 
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }
    
    // If not connected, connect to MongoDB
    console.log(process.env.MONGODB_URL)
    return await mongoose.connect("mongodb://localhost:27017/NextAdmin");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
