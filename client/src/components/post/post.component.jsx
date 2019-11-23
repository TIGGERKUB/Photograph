import React from "react";
import { Modal } from "semantic-ui-react";
import { IoIosAddCircleOutline } from "react-icons/io";

import Upload from "../upload-preview/upload-preview.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./post.styles.scss";

const Post = () => (
  <Modal trigger={<IoIosAddCircleOutline className="add" />}>
    <Modal.Header>New Post</Modal.Header>
    <Modal.Content image scrolling>
      <Upload />
      <Modal.Description className="post-form">
        <form className="caption-container">
          <h2>Write something about this picture</h2>
          <textarea rows="6" className="caption-box" placeholder="Write a caption...." />
          <div className="post-btn-container">
            <CustomButton>Post</CustomButton>
          </div>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);
export default Post;
