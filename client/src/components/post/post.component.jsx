import React from "react";
import { Modal, Form, TextArea, Container } from "semantic-ui-react";
import { IoIosAddCircleOutline } from "react-icons/io";

import Upload from "../upload-preview/upload-preview.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./post.styles.scss";

const Post = () => (
  <form>
    <Modal trigger={<IoIosAddCircleOutline className="add" />}>
        <Modal.Header>New Post</Modal.Header>
        <Modal.Content image scrolling>
          <Upload />
          <Modal.Description className="post-form">
            <h2>Write something about this picture</h2>
            <Form>
              <TextArea
                style={{ minHeight: 150 }}
                placeholder="Write a caption...."
              />
            </Form>
            <div className="post-btn-container">
              <CustomButton>Post</CustomButton>
            </div>
          </Modal.Description>
        </Modal.Content>
    </Modal>
  </form>
);
export default Post;
