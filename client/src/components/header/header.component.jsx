import React from "react";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="brand" to="/feeds">Photograph</Link>
      <div className="options">
        <Link className="option" to="/feeds">
          <IoIosSearch />
        </Link>
        <Link className="option" to="/feeds">
          <IoIosNotificationsOutline />
        </Link>
        <Link className="option" to="/feeds">
          <AiOutlineSetting />
        </Link>
        <Link className="option" to="/feeds">
          <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
};
export default Header;
