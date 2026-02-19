// Import Express framework to create server and handle routes
import express from "express";

// Import Mongoose to interact with MongoDB database
import mongoose from "mongoose";

// Import CORS middleware to allow cross-origin requests
import cors from "cors";

// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Import custom database connection function
import connectDB from "./config/db.js";

// Import profile-related route handlers
import profileRoutes from "./routes/profileRoutes.js";


// Load environment variables from .env file into process.env
dotenv.config();

// Establish connection to MongoDB database
connectDB();


// Create Express application instance
const app = express();


// Enable Cross-Origin Resource Sharing (CORS)
// Allows frontend (different port/domain) to access backend APIs
app.use(cors());

// Middleware to parse incoming JSON requests
// Allows us to read req.body in API requests
app.use(express.json());


// Register profile routes under "/api/profile"
// Example: GET /api/profile, POST /api/profile
app.use("/api/profile", profileRoutes);


// Root route to verify server is running
app.get("/", (req, res) => {
  res.send("API is running...");
});


// Define server port
// Use PORT from environment variable if available, otherwise default to 5000
const PORT = process.env.PORT || 5000;


// Start server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
