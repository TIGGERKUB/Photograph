import React from "react";
import {connect} from 'react-redux'
import { FaSearch } from "react-icons/fa";

import { onSearchChange } from "../../redux/search/search.action";

import "./search-box.styles.scss";

const SearchBox = ({searchChange}) => (
  <div className="search-box-container">
    <input
      className="search-box"
      type="search"
      placeholder="Search"
      onChange={event => searchChange(event.target.value)}
    />
    <FaSearch />
  </div>
);
const mapDispatchToProps = dispatch => ({
  searchChange: word => dispatch(onSearchChange(word))
});
export default connect(null,mapDispatchToProps)(SearchBox);
