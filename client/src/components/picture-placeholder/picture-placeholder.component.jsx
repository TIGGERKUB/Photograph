import React from "react";
import "./picture-placeholder.styles.scss";

const PicturePlaceholder = ({
  file,
  isProfile,
  isAvatar,
  isProfilePlaceholder,
  isPlaceholder
}) => (
  <div>
    {isProfile ? (
      <div
        className="profile-photo"
        style={{ backgroundImage: `url(${file})` }}
      />
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
    ) : null}
  </div>
);
export default PicturePlaceholder;
