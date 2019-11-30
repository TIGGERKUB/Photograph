import React from "react";
import "./button-outline.styles.scss";

const ButtonOutline = ({ children,isUnfollow,isRequest, isFollowing, ...otherProps }) => {
  
  return (
    <button
      className={`${isFollowing ? "following-btn" : ""} ${isRequest ? "request-btn" : ""} ${isUnfollow ? "unfollow" : ""} outline-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default ButtonOutline;
