import express from "express";
import { clerkWebhooks, userCredits } from "../controller/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

// Test route to verify API access
userRouter.get("/test", (req, res) => {
  console.log("Test route accessed");
  res.json({ message: "API endpoint is accessible" });
});

// Protected route for user credits
userRouter.get("/credits", authUser, (req, res, next) => {
  console.log("Credits route accessed with token:", req.headers.token ? "Present" : "Missing");
  next();
}, userCredits);

export default userRouter;
