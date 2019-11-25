import React from "react";
import "./button-outline.styles.scss";

const ButtonOutline = ({ children, isFollowing, ...otherProps }) => {
  
  return (
    <button
      className={`${isFollowing ? "following-btn" : ""} outline-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default ButtonOutline;
