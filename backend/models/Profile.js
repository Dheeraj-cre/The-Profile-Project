import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  company: String,
  role: String,
  startDate: String,
  endDate: String,
  description: String
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bio: String,
  profilePicture: String,
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String
  },
  skills: [String],
  workTimeline: [workSchema],
  themePreference: {
    type: String,
    default: "light"
  }
}, { timestamps: true });

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
