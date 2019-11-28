import React, { useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { connect } from "react-redux";

import Upload from "../upload-preview/upload-preview.component";
import CustomButton from "../custom-button/custom-button.component";
import { createPost } from "../../redux/feed/feed.action";

import "./post-picture.styles.scss";

const PostPicture = ({ createPost }) => {
  const [post, setPost] = useState({
    caption: "",
    file: null
  });
  const { caption } = post;
  const handleSubmit = event => {
    event.preventDefault();
    createPost(post);
    window.location.reload()
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setPost({ ...post, [name]: value });
  };
  const handleUploadChange = event => {
    setPost({ ...post, file: event });
  };

  return (
    <Modal size="tiny" trigger={<IoIosAddCircleOutline className="add" />}>
      <Modal.Header>New Post</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Upload onUpload={handleUploadChange} />
          <br />
          <Form.TextArea
            label="Caption"
            placeholder="Write a caption...."
            name="caption"
            value={caption}
            onChange={handleChange}
          />
          <CustomButton type="submit">Post</CustomButton>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPost(newPost))
});
export default connect(null, mapDispatchToProps)(PostPicture);
