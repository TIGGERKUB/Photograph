import React from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import {FiLogOut} from 'react-icons/fi'
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import NotificationIcon from "../notification-icon/notification-icon.component";
import NotificationDropdown from "../notification-dropdown/notification-dropdown.component";

import "./header.styles.scss";
import { selectNotificationHidden } from "../../redux/notification/notification.selector";
import { connect } from "react-redux";

const Header = ({ hidden }) => {
  return (
    <div className="header">
      <Link className="brand" to="/feed">
        Photograph
      </Link>
      <div className="options">
        <Link className="option" to="/search">
          <IoIosSearch />
        </Link>
        <div className="option">
          <NotificationIcon />
        </div>
        {hidden ? null : <NotificationDropdown />}
        <Link className="option" to="/profile">
          <AiOutlineUser />
        </Link>
        <Link className="option logout" to="/">
          <FiLogOut/>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  hidden: selectNotificationHidden
});
export default connect(mapStateToProps)(Header);
