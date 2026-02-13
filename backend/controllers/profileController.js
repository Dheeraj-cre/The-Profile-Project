import Profile from "../models/Profile.js";


// GET Profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// CREATE or UPDATE Profile
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }

    const savedProfile = await profile.save();
    res.json(savedProfile);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
