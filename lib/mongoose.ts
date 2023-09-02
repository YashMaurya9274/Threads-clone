import mongoose from "mongoose";
// yatzcool, x17qY2IIjJytEAcQ

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Prevent unknown field queries

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) console.log("Already connected to MONGODB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};