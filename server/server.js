import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

// Connect to MongoDB
connectDB();

// API ROUTES
app.get("/", (req, res) => {
  res.send("API Working");
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`✅ App is running on:\nhttp://localhost:${PORT}/`);
  });
}

// For Vercel
export default app;
