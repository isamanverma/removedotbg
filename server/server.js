import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";

// APP CONFIG
const PORT = process.env.PORT | 4000;
const app = express();
await connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// API ROUTES
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`✅ App is running on:\nhttp://localhost:${PORT}/`);
});
