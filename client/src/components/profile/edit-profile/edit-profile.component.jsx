import React, { useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import ButtonOutline from "../../button-outline/button-outline.component";
import Upload from "../../upload-preview/upload-preview.component";
import CustomButton from "../../custom-button/custom-button.component";

import { editProfile } from "../../../redux/profile/profile.action";

import "./edit-profile.styles.scss";

const EditProfile = ({ editProfile }) => {
  const [info, setInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
    birth: "",
    phone: "",
    bio: ""
  });
  const { username, firstname, lastname, birth, phone, bio } = info;
  const handleSubmit = event => {
    event.preventDefault();
    editProfile(info);
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div className="profile-edit-btn">
      <Modal size="tiny" trigger={<ButtonOutline>Edit Profile</ButtonOutline>}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content>
          <Upload isUploadProfile="true" />
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              name="username"
              value={username}
              onChange={handleChange}
              type="text"
              label="Username"
              placeholder="Username"
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="firstname"
                value={firstname}
                onChange={handleChange}
                type="text"
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                fluid
                name="lastname"
                value={lastname}
                onChange={handleChange}
                type="text"
                label="Last name"
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="birth"
                value={birth}
                onChange={handleChange}
                type="date"
                label="Birth Date"
                placeholder="Birth Date"
              />
              <Form.Input
                fluid
                name="phone"
                value={phone}
                onChange={handleChange}
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.TextArea
              type="text"
              name="bio"
              value={bio}
              onChange={handleChange}
              label="Bio"
              placeholder="Tell everyone more about you..."
            />
            <br />
            <CustomButton type="submit" isGreen>
              SAVE
            </CustomButton>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  editProfile: info => dispatch(editProfile(info))
});
export default connect(null, mapDispatchToProps)(EditProfile);
