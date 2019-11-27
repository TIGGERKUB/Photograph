import React from "react";
import "./button-outline.styles.scss";

const ButtonOutline = ({ children,isRequest, isFollowing, ...otherProps }) => {
  
  return (
    <button
      className={`${isFollowing ? "following-btn" : ""} ${isRequest ? "request-btn" : ""} outline-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default ButtonOutline;
