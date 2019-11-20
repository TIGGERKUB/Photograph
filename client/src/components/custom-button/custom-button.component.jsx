import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isFacebookSignIn,
  isTwitterSignIn,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}
    ${isFacebookSignIn ? "facebook-sign-in" : ""}
    ${isTwitterSignIn ? "twitter-sign-in" : ""}
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
