import mongoose from "mongoose"; 

// connecting db using .connect and passing MONGODB_URI from .env
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.log("Connection Failed with error "+error);
  }
}