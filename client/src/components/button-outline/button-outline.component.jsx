import React from "react";
import "./button-outline.styles.scss";

const ButtonOutline = ({
  children,
  isUnfollow,
  isRequest,
  isFollowing,
  onNotificationBox,
  isCancel,
  ...otherProps
}) => {
  return (
    <div>
      {onNotificationBox ? (
        <button className={`${isCancel ? "cancel" : ""} on-notification-box`} {...otherProps}>{children}</button>
      ) : (
        <button
          className={`${isFollowing ? "following-btn" : ""} ${
            isRequest ? "request-btn" : ""
          } ${isUnfollow ? "unfollow" : ""} outline-button`}
          {...otherProps}
        >
          {children}
        </button>
      )}
    </div>
  );
};
export default ButtonOutline;
