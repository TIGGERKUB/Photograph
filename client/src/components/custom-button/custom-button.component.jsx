import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isFacebookSignIn,
  isBlue,
  isGoogleSignIn,
  isGreen,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}
    ${isFacebookSignIn ? "facebook-sign-in" : ""}
    ${isBlue ? "blue-btn" : ""}
    ${isGoogleSignIn ? "google-sign-in" : ""} 
    ${isGreen ? "green-btn" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
