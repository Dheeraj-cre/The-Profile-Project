function ProfileHeader({ profile }) {
  return (
    <>
      <img
        src={profile.profilePicture || "https://via.placeholder.com/150"}
        alt="Profile"
        className="profile-img"
      />

      <h1>{profile.name}</h1>
      <p className="bio">{profile.bio}</p>
    </>
  );
}

export default ProfileHeader;
