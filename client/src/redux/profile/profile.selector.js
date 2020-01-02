import { createSelector } from "reselect";
const selectProfile = state => state.profile;

export const selectProfileUsername = createSelector(
  [selectProfile],
  profile => profile.username
);
export const selectProfileNoPhoto = createSelector(
  [selectProfile],
  profile => profile.no_photo
);
export const selectProfileNoFollowing = createSelector(
  [selectProfile],
  profile => profile.no_following
);
export const selectProfileNoFollwers = createSelector(
  [selectProfile],
  profile => profile.no_followers
);
export const selectProfileBio = createSelector(
  [selectProfile],
  profile => profile.bio
);
export const selectProfileAvatar = createSelector(
  [selectProfile],
  profile => profile.avatar
);
export const selectProfilePhoto = createSelector(
  [selectProfile],
  profile => profile.photo
);

export const selectProfileFollowers = createSelector(
  [selectProfile],
  profile => profile.followers
);
export const selectProfileFollowing = createSelector(
  [selectProfile],
  profile => profile.following
);
export const selectProfileStatus = createSelector(
  [selectProfile],
  profile => profile.status
);
export const selectProfileFirstName = createSelector(
  [selectProfile],
  profile => profile.first_name
);
export const selectProfileLastName = createSelector(
  [selectProfile],
  profile => profile.last_name
);
export const selectProfileBirthDay = createSelector(
  [selectProfile],
  profile => profile.birthday
);
export const selectProfilePhone = createSelector(
  [selectProfile],
  profile => profile.phone
);
export const selectProfileLoading = createSelector(
  [selectProfile],
  profile => profile.loading
);
