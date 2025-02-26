import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }

    // Get the token data
    const decoded = jwt.decode(token);
    
    if (!decoded || !decoded.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format",
      });
    }

    // Set clerkId directly from sub claim
    req.clerkId = decoded.sub;
    console.log("Authenticated user clerkId:", req.clerkId);
    
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ 
      success: false, 
      message: "Authentication failed" 
    });
  }
};

export default authUser;
