import { useEffect, useState } from "react";
import API from "../services/api";

import ProfileHeader from "../components/ProfileHeader";
import SkillsSection from "../components/SkillsSection";
import TimelineSection from "../components/TimelineSection";
import EditForm from "../components/EditForm";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  /* Load Profile (Clean Pattern) */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await API.get("/profile");
        setProfile(res.data);
        setFormData(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    loadProfile();
  }, []);

  /* Handle Input Change */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /*Save Updated Profile*/
  const handleSave = async () => {
    try {
      await API.put("/profile", formData);
      setEditMode(false);

      // Re-fetch updated data
      const res = await API.get("/profile");
      setProfile(res.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  /* Loading State */
  if (!profile) {
    return <div className="loading">Loading profile...</div>;
  }

  /* Render */
  return (
    <div className="container">
      <div className={`profile-card ${editMode ? "edit-mode" : ""}`}>

        {!editMode ? (
          <>
            {/* LEFT SIDEBAR */}
            <div className="profile-sidebar">
              <ProfileHeader profile={profile} />
              <SkillsSection skills={profile.skills || []} />

              <button
                className="edit-btn"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </div>

            {/* RIGHT CONTENT */}
            <div className="profile-main">
              <TimelineSection
                workTimeline={profile.workTimeline || []}
              />
            </div>
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
