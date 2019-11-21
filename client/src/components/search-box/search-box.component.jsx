import React from "react";
import { FaSearch } from "react-icons/fa";

import "./search-box.styles.scss";

const SearchBox = props => (
  <div className="search-box-container">
    <input
      className="search-box"
      type="search"
      placeholder="Search"
      onChange={props.onSearchChange}
    />
    <FaSearch />
  </div>
);
export default SearchBox;
