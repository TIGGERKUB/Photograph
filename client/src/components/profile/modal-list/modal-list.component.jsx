import React from "react";
import { Link } from "react-router-dom";

import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ButtonOutline from "../../button-outline/button-outline.component";

import "./modal-list.styles.scss";

const ModalList = ({ isFollowing, items }) => {
  
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
                  <PicturePlaceholder item={item} isFollowingAvatar />
                  <span>{item.following_username}</span>
                </div>
                {item.status === "following" ? (
                  <ButtonOutline isFollowing>{item.status}</ButtonOutline>
                ) : (
                  <ButtonOutline>follow</ButtonOutline>
                )}
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
                  <PicturePlaceholder item={item} isFollowerAvatar />
                  <span>{item.follower_username}</span>
                </div>
                {item.status === "following" ? (
                  <ButtonOutline isFollowing>{item.status}</ButtonOutline>
                ) : (
                  <ButtonOutline>follow</ButtonOutline>
                )}
              </div>
            </Link>
          ))}
    </div>
  );
};
export default ModalList;
