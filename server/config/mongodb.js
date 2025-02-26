import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    
    // Set up event listeners before connecting
    mongoose.connection.on("connected", () => {
      console.log("🛢️ Connected to Database");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI);
    
    // Test the connection by trying to get the collections
    const collections = await mongoose.connection.db.collections();
    console.log("Available collections:", collections.map(c => c.collectionName));

  } catch (error) {
    console.error(`❌ Unable to connect to database\nError:${error}`);
    throw error; // Rethrow to handle it in the main application
  }
};

export default connectDB;
