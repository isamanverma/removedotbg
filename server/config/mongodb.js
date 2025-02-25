import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("🛢️ Connected to Database");
    });
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(`❌ Unable to connect to database\nError:${error}`);
  }
};

export default connectDB;
