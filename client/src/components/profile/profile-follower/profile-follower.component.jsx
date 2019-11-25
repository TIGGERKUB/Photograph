import React from "react";
import { Modal } from "semantic-ui-react";

import ModalList from "../modal-list/modal-list.component";

import "./profile-follower.styles.scss";

const ProfileFollower = ({ list,total }) => {
  return (
    <div className="profile-follower-container">
      <Modal centered={false}
        size="tiny"
        trigger={
          <div>
            <div className="profile-follower-title">Follower</div>
            <p className="profile-follower-count">{total}</p>
          </div>
        }
      >
        <Modal.Header>Follower</Modal.Header>
        <Modal.Content scrolling>
          <ModalList items={list}/>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default ProfileFollower;
