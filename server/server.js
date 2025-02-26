import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://removedotbg.vercel.app"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// Test routes
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Mount user routes
app.use("/api/user", userRouter);

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`✅ App is running on:\nhttp://localhost:${PORT}/`);
  });
}

export default app;
