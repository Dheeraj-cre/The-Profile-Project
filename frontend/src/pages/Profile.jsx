import { useEffect, useState } from "react";
import API from "../services/api";

import ProfileHeader from "../components/ProfileHeader";
import SkillsSection from "../components/SkillsSection";
import TimelineSection from "../components/TimelineSection";
import EditForm from "../components/EditForm";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/profile");
      setProfile(res.data);
      setFormData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await API.put("/profile", formData);
      setEditMode(false);
      fetchProfile();
    } catch (error) {
      console.error(error);
    }
  };

  if (!profile) return <div className="loading">Loading profile...</div>;

  return (
    <div className="container">
      <div className="profile-card">

        {!editMode ? (
          <>
            <ProfileHeader profile={profile} />
            <SkillsSection skills={profile.skills} />
            <TimelineSection workTimeline={profile.workTimeline} />

            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          <EditForm
            formData={formData}
            handleChange={handleChange}
            handleSave={handleSave}
            cancelEdit={() => setEditMode(false)}
          />
        )}

      </div>
    </div>
  );
}

export default Profile;
