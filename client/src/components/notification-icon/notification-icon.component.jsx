import React from "react";
import {connect} from "react-redux"
import { ReactComponent as BellIcon } from "../../assets/notification.svg";

import {toggleNotificationHidden} from '../../redux/notification/notification.action'

import "./notification-icon.styles.scss";

const NotificationIcon = ({ toggleNotificationHidden }) => (
    <div className="bell-icon" onClick={toggleNotificationHidden}>
      <BellIcon className="icon"/>
    </div>
  );
const mapDispatchToProps = dispatch => ({
  toggleNotificationHidden: () => dispatch(toggleNotificationHidden())
})
export default connect(null,mapDispatchToProps)(NotificationIcon);
