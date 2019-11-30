import React from "react";
import "./profile-bio.styles.scss";
const ProfileBio = ({ bio }) => (
  <div className="bio-container">
    {bio ? (
      <span style={{ fontSize: 18, letterSpacing: 0.5 }}>{bio}</span>
    ) : (
      <span style={{ fontSize: 18, letterSpacing: 0.5 }}>
        Tell something about you
      </span>
    )}
  </div>
);
export default ProfileBio;
