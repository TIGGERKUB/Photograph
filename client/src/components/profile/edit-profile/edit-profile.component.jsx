import React, { useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ButtonOutline from "../../button-outline/button-outline.component";
import Upload from "../../upload-preview/upload-preview.component";
import CustomButton from "../../custom-button/custom-button.component";

import { editProfile } from "../../../redux/profile/profile.action";
import * as profileSelector from "../../../redux/profile/profile.selector";
import "./edit-profile.styles.scss";

const EditProfile = ({
  editProfile,
  FirstName,
  LastName,
  BirthDay,
  PhoneNumber,
  Bio,
  Avatar
}) => {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    birth: "",
    phone: "",
    bio: "",
    file: null
  });
  console.log(FirstName);
  console.log(LastName);
  console.log(BirthDay);
  console.log(PhoneNumber);
  console.log(Avatar);
  console.log(Bio);

  const { firstname, lastname, birth, phone, bio } = info;
  const handleSubmit = event => {
    event.preventDefault();
    editProfile(info);
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setInfo({ ...info, [name]: value });
  };
  const handleUploadChange = event => {
    setInfo({ ...info, file: event });
  };
  return (
    <div className="profile-edit-btn">
      <Modal size="tiny" trigger={<ButtonOutline>Edit Profile</ButtonOutline>}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Upload
              isUploadProfile="true"
              onUpload={handleUploadChange}
              avatar={Avatar}
            />
            <br />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="firstname"
                value={firstname}
                onChange={handleChange}
                type="text"
                label="First name"
                placeholder={`${FirstName ? FirstName : "First Name"}`}
              />
              <Form.Input
                fluid
                name="lastname"
                value={lastname}
                onChange={handleChange}
                type="text"
                label="Last name"
                placeholder={`${LastName ? LastName : "Last Name"}`}
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
                placeholder={`${BirthDay ? BirthDay : "Birth Date"}`}
              />
              <Form.Input
                fluid
                name="phone"
                value={phone}
                onChange={handleChange}
                type="number"
                label="Phone Number"
                placeholder={`${PhoneNumber ? PhoneNumber : "Phone Number"}`}
              />
            </Form.Group>
            <Form.TextArea
              type="text"
              name="bio"
              value={bio}
              onChange={handleChange}
              label="Bio"
              placeholder={`${Bio ? Bio : "Tell something about you..."}`}
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
const mapStateToProps = createStructuredSelector({
  FirstName: profileSelector.selectProfileFirstName,
  LastName: profileSelector.selectProfileLastName,
  BirthDay: profileSelector.selectProfileBirthDay,
  PhoneNumber: profileSelector.selectProfilePhone,
  Avatar: profileSelector.selectProfileAvatar,
  Bio: profileSelector.selectProfileBio
});
const mapDispatchToProps = dispatch => ({
  editProfile: info => dispatch(editProfile(info))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
