import React, { useState } from "react";
import { Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

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
  Avatar,
  history
}) => {
  
  const [info, setInfo] = useState({
    firstname: FirstName,
    lastname: LastName,
    birth: BirthDay,
    phone: PhoneNumber,
    bio: Bio,
    file: null,
    firstnameError: "",
    lastnameError: ""
  });
  const {
    firstname,
    lastname,
    birth,
    phone,
    bio,
    firstnameError,
    lastnameError
  } = info;
  const handleSubmit = async event => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      await editProfile(info, Avatar);
      window.location.reload();
    }
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setInfo({ ...info, [name]: value });
  };
  const handleUploadChange = event => {
    setInfo({ ...info, file: event });
  };

  const validate = () => {
    let firstnameError = "";
    let lastnameError = "";

    if (firstname) {
      if (!firstname.match(/^[a-zA-Z]+$/)) {
        firstnameError = "Letters only";
      }
    }
    if (lastname) {
      if (!lastname.match(/^[a-zA-Z]+$/)) {
        lastnameError = "Letters only";
      }
    }

    if (firstnameError || lastnameError) {
      setInfo({
        ...info,
        firstnameError,
        lastnameError
      });
      return false;
    }
    return true;
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
              {firstnameError ? (
                <Form.Input
                  fluid
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  type="text"
                  label="First name"
                  placeholder={`${firstname ? firstname : "First Name"}`}
                  error={{
                    content: firstnameError,
                    pointing: "below"
                  }}
                />
              ) : (
                <Form.Input
                  fluid
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  type="text"
                  label="First name"
                  placeholder={`${firstname ? firstname : "First Name"}`}
                />
              )}
              {lastnameError ? (
                <Form.Input
                  fluid
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  type="text"
                  label="Last name"
                  placeholder={`${lastname ? lastname : "Last Name"}`}
                  error={{
                    content: lastnameError,
                    pointing: "below"
                  }}
                />
              ) : (
                <Form.Input
                  fluid
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  type="text"
                  label="Last name"
                  placeholder={`${lastname ? lastname : "Last Name"}`}
                />
              )}
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="birth"
                value={birth}
                onChange={handleChange}
                type="date"
                label="Birth Date"
              />
              <Form.Input
                fluid
                name="phone"
                value={phone}
                onChange={handleChange}
                type="number"
                label="Phone Number"
                placeholder={`${phone ? phone : "Phone Number"}`}
              />
            </Form.Group>
            <Form.TextArea
              type="text"
              name="bio"
              value={bio}
              onChange={handleChange}
              label="Bio"
              placeholder={`${bio ? bio : "Tell something about you..."}`}
            />
            <br />
            <CustomButton type="submit" isGreen style={{margin:'auto'}}>
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
  editProfile: (info, avatar) => dispatch(editProfile(info, avatar))
});
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditProfile);
