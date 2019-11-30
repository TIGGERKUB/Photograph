import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Me from "../../components/profile/me/me.component";
import Another from "../../components/profile/another/another.component";

import * as profileSelector from "../../redux/profile/profile.selector";
import * as userSelector from "../../redux/user/user.selectors";
import { profileInfo } from "../../redux/profile/profile.action";

import "./profile.styles.scss";

const ProfilePage = ({
  match,
  profileInfo,
  ProfileUsername,
  no_photo,
  no_following,
  no_followers,
  bio,
  avatar,
  photo,
  followerLists,
  status,
  currentUser
}) => {
  useEffect(() => {
    profileInfo(match.params.username);
  }, [match.params.username,profileInfo]);
  const user = match.params.username;
  console.log(ProfileUsername);
  
  
  return (
    <div>
      {currentUser === user ? (
        <Me
          ProfileUsername={ProfileUsername}
          no_photo={no_photo}
          no_following={no_following}
          no_followers={no_followers}
          bio={bio}
          avatar={avatar}
          photo={photo}
          followerLists={followerLists}
        />
      ) : (
        <Another
          ProfileUsername={ProfileUsername}
          no_photo={no_photo}
          no_following={no_following}
          no_followers={no_followers}
          bio={bio}
          avatar={avatar}
          photo={photo}
          followerLists={followerLists}
          status={status}
        />
      )}
    </div>
  );
};
const mapStateTopProps = createStructuredSelector({
  ProfileUsername: profileSelector.selectProfileUsername,
  no_photo: profileSelector.selectProfileNoPhoto,
  no_following: profileSelector.selectProfileNoFollowing,
  no_followers: profileSelector.selectProfileNoFollwers,
  bio: profileSelector.selectProfileBio,
  avatar: profileSelector.selectProfileAvatar,
  photo: profileSelector.selectProfilePhoto,
  followerLists: profileSelector.selectProfileFollowers,
  status: profileSelector.selectProfileStatus,
  currentUser: userSelector.selectUsername
  
});

const mapDispatchToProps = dispatch => ({
  profileInfo: username => dispatch(profileInfo(username))
});

export default connect(mapStateTopProps, mapDispatchToProps)(ProfilePage);
