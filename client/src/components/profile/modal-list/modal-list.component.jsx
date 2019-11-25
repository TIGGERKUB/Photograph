import React from "react";

import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ButtonOutline from "../../button-outline/button-outline.component";

import "./modal-list.styles.scss";

const ModalList = ({ items }) => {
  
  return (
    <div className="list-container">
      {items.map(item => (
        <div className="each-list" key={item.id}>
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
      ))}
    </div>
  );
};
export default ModalList;
