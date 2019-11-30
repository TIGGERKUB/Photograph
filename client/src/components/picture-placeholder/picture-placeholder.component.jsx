import React from "react";
import "./picture-placeholder.styles.scss";

const PicturePlaceholder = ({
  file,
  isProfile,
  isFeed,
  isProfilePlaceholder,
  isPlaceholder,
  isAvatar,
  item,
  isFollowingAvatar,
  isFollowerAvatar
}) => {
  return (
    <div>
      {isProfile ? (
        <div className="profile-photo-container">
          <div
            className="profile-photo"
            style={{ backgroundImage: `url(${file})` }}
          />
        </div>
      ) : isProfilePlaceholder ? (
        <div className="profile-placeholder">
          <div
            className="profile-preview"
            style={{ backgroundImage: `url(${file})` }}
          />
        </div>
      ) : isPlaceholder ? (
        <div className="picture-placeholder">
          <div
            className="picture-preview"
            style={{ backgroundImage: `url(${file})` }}
          />
        </div>
      ) : isFeed ? (
        <div className="picture-feed-container">
          <div
            className="feed-picture"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
        </div>
      ) : isAvatar ? (
        <div className="avatar-placeholder">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.avatar})` }}
          />
        </div>
      ) : isFollowingAvatar ? (
        <div className="avatar-placeholder">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.following_avatar})` }}
          />
        </div>
      ) : isFollowerAvatar ? (
        <div className="avatar-placeholder">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.follower_avatar})` }}
          />
        </div>
      ) : null}
    </div>
  );
};
export default PicturePlaceholder;
