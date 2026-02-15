import "./ProfileHeader.css";

function ProfileHeader({ profile }) {
  return (
    <div className="profile-header">

      <img
        src={profile.profilePicture || "https://via.placeholder.com/150"}
        alt="Profile"
        className="profile-header__image"
      />

      <h1 className="profile-header__name">
        {profile.name}
      </h1>

      <p className="profile-header__bio">
        {profile.bio}
      </p>

    </div>
  );
}

export default ProfileHeader;
