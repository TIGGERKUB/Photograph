import React from 'react'
import './profile-bio.styles.scss'
const ProfileBio = ({bio}) => (
  <p className="profile-bio">
    {bio}
  </p>
);
export default ProfileBio;