import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PicturePlaceholder from "../picture-placeholder/picture-placeholder.component";
import { selectNoticationAllRequest } from "../../redux/notification/notification.selector";
import { toggleNotificationHidden } from "../../redux/notification/notification.action";
import { allRequested } from "../../redux/notification/notification.action";
import { acceptRequested } from "../../redux/follow/follow.action";
import "./notification-dropdown.styles.scss";
import ButtonOutline from "../button-outline/button-outline.component";

const NotificationDropdown = ({
  users,
  allRequested,
  acceptRequest,
  toggleNotificationHidden
}) => {
  useEffect(() => {
    allRequested();
  }, [allRequested]);
  console.log(users);

  return (
    <div className="notification-dropdown">
      <div className="notification-items">
        {users ? (
          users.map(item => (
            <div className="each-notification" key={item.user_id}>
              <div className="avatar-name">
                <PicturePlaceholder item={item.user_avatar} isAvatar />
                <span>{item.user_username}</span>
              </div>
              <div className="btn-notification-box">
                <ButtonOutline
                  onNotificationBox
                  onClick={() => {acceptRequest(item.user_username)
                  toggleNotificationHidden()}}
                >
                  Accept
                </ButtonOutline>
                <ButtonOutline isCancel onNotificationBox>
                  Cancel
                </ButtonOutline>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <span style={{ fontSize: 18 }}>You don't have notification</span>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  users: selectNoticationAllRequest
});
const mapDispatchToProps = dispatch => ({
  allRequested: () => dispatch(allRequested()),
  acceptRequest: anotherUser => dispatch(acceptRequested(anotherUser)),
  toggleNotificationHidden: () => dispatch(toggleNotificationHidden())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationDropdown);
