import React from "react";
import { Modal } from "semantic-ui-react";

import ModalList from "../modal-list/modal-list.component";

import "./profile-follow.styles.scss";

const ProfileFollow = ({ list, total, label, isPost }) => {
  return (
    <div className="profile-container">
      {isPost ? (
        <div className="post-title-container">
          <div className="profile-title">{label}</div>
          <p className="profile-count">{total}</p>
        </div>
      ) : (
        <Modal
          centered={false}
          size="tiny"
          trigger={
            <div className="follow-title-container">
              <div className="profile-title">{label}</div>
              <p className="profile-count">{total}</p>
            </div>
          }
        >
          <Modal.Header>{label}</Modal.Header>
          <Modal.Content scrolling>
            <ModalList items={list} />
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};
export default ProfileFollow;
