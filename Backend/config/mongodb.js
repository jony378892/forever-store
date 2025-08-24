import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error", error);
  }
};

export default connectDB;
