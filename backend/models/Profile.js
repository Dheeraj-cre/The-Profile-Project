// Import mongoose library to define schema and interact with MongoDB
import mongoose from "mongoose";

// Define schema for individual work experience entries
const workSchema = new mongoose.Schema({
  company: String,        // Company name where the user worked
  role: String,           // Job role or designation
  startDate: String,      // Work start date (stored as string)
  endDate: String,        // Work end date (stored as string, can be "Present")
  description: String     // Short description of responsibilities/achievements
});

// Define main profile schema
const profileSchema = new mongoose.Schema({

  // User's full name (required field)
  name: {
    type: String,
    required: true        // Ensures name must be provided
  },

  bio: String,            // Short professional bio/summary

  profilePicture: String, // URL or path of profile image

  // Social media links stored as nested object
  socialLinks: {
    github: String,       // GitHub profile URL
    linkedin: String,     // LinkedIn profile URL
    twitter: String       // Twitter/X profile URL
  },

  skills: [String],       // Array of skills (e.g., ["React", "Node.js"])

  workTimeline: [workSchema], // Array of work experience objects (embedded schema)

  themePreference: {
    type: String,
    default: "light"      // Default UI theme preference is light
  }

}, 
{ 
  timestamps: true        // Automatically adds createdAt and updatedAt fields
});

// Create Mongoose model named "Profile" based on profileSchema
const Profile = mongoose.model("Profile", profileSchema);

// Export the model so it can be used in controllers/routes
export default Profile;
