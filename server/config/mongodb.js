import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on("connected", () => {
      console.log("🛢️ Connected to Database");
    });
  } catch (error) {
    console.log(`❌ Unable to connect to database\nError:${error}`);
  }
};

export default connectDB;
