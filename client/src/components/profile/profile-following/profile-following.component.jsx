import React from "react";
import { Modal } from "semantic-ui-react";

import ModalList from "../modal-list/modal-list.component";

import "./profile-following.styles.scss";

const ProfileFollowing = ({ list, total }) => {
  return (
    <div className="profile-following-container">
      <Modal
        centered={false}
        size="tiny"
        trigger={
          <div>
            <div className="profile-following-title">Following</div>
            <p className="profile-following-count">{total}</p>
          </div>
        }
      >
        <Modal.Header>Following</Modal.Header>
        <Modal.Content scrolling>
          <ModalList items={list} />
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default ProfileFollowing;
