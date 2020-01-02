import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { Modal, Form } from "semantic-ui-react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import Upload from "../upload-preview/upload-preview.component";
import CustomButton from "../custom-button/custom-button.component";
import { createPost } from "../../redux/profile/profile.action";
import {selectUsername} from "../../redux/user/user.selectors";

import "./post-picture.styles.scss";

const PostPicture = ({ createPost,history,currentUser }) => {
  const [post, setPost] = useState({
    caption: "",
    file: null
  });
  const { caption } = post;
  const handleSubmit = async event => {
    event.preventDefault();
    await createPost(post);
    history.push("/"+currentUser)
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

const mapStateToProps =  createStructuredSelector({
  currentUser: selectUsername
})

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPost(newPost))
});
export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(PostPicture);
