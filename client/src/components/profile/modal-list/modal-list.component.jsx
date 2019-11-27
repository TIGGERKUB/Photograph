import React from "react";
import { Link } from "react-router-dom";

import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ButtonOutline from "../../button-outline/button-outline.component";

import "./modal-list.styles.scss";

const ModalList = ({ items }) => {
  return (
    <div className="list-container">
      {items.map(item => (
        <Link to={`/${item.username}`} style={{ color: "black" }} key={item.id}>
          <div className="each-list">
            <div className="avatar-and-name">
              <PicturePlaceholder item={item} isAvatar />
              <span>{item.username}</span>
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
