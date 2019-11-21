import React from "react";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="brand" to="/feed">Photograph</Link>
      <div className="options">
        <Link className="option" to="/search">
          <IoIosSearch />
        </Link>
        <Link className="option" to="/feed">
          <IoIosNotificationsOutline />
        </Link>
        <Link className="option" to="/feed">
          <AiOutlineSetting />
        </Link>
        <Link className="option" to="/profile">
          <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
};
export default Header;
