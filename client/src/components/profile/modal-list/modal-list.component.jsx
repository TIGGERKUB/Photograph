import React from "react";
import { Link } from "react-router-dom";

import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";

import "./modal-list.styles.scss";

const ModalList = ({ isSearch,isFollowing, items }) => {
  
  return (
    <div className="list-container">
      {isFollowing
        ? items.map(item => (
            <Link
              to={`/${item.following_username}`}
              style={{ color: "black" }}
              key={item.following_id}
            >
              <div className="each-list">
                <div className="avatar-and-name">
                  <PicturePlaceholder item={item.user_avatar} isAvatar />
                  <span>{item.following_username}</span>
                </div>
              </div>
            </Link>
          ))
        : isSearch
        ? items.map(item => (
            <Link
              to={`/${item.username}`}
              style={{ color: "black" }}
              key={item.user_id}
            >
              <div className="each-list">
                <div className="avatar-and-name">
                  <PicturePlaceholder item={item.profile_pic} isAvatar />
                  <span>{item.username}</span>
                </div>
              </div>
            </Link>
          ))
        : items.map(item => (
            <Link
              to={`/${item.follower_username}`}
              style={{ color: "black" }}
              key={item.follower_id}
            >
              <div className="each-list">
                <div className="avatar-and-name">
                  <PicturePlaceholder item={item.follower_avatar} isAvatar />
                  <span>{item.follower_username}</span>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};
export default ModalList;
