import React from "react";
import "./button-outline.styles.scss";

const ButtonOutline = ({ children, ...otherProps }) => (
  <button
    className={`outline-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default ButtonOutline;
