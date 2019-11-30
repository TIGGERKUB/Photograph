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
            style={{ backgroundImage: `url(${item})` }}
          />
        </div>
      ) : null}
    </div>
  );
};
export default PicturePlaceholder;
