import React from "react";
import { Modal, Form } from "semantic-ui-react";

import ButtonOutline from "../../button-outline/button-outline.component";
import Upload from "../../upload-preview/upload-preview.component";
import CustomButton from "../../custom-button/custom-button.component";

import "./edit-profile.styles.scss";

const EditProfile = () => {
  // const handleSubmit = event => {
  //   event.preventDefault();
  // };
  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setUserCredentials({ ...userCredential, [name]: value });
  // };
  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" }
  ];
  return (
    <div className="profile-edit-btn">
      <Modal size="tiny" trigger={<ButtonOutline>Edit Profile</ButtonOutline>}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content>
          <Upload isUploadProfile="true" />
          <br />
          <Form>
            <Form.Input
              fluid
              name="username"
              type="text"
              label="Username"
              placeholder="Username"
            />
           <Form.Group widths='equal'>
              <Form.Input
                fluid
                name="firstname"
                type="text"
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                fluid
                name="lastname"
                type="text"
                label="Last name"
                placeholder="Last name"
              />
           </Form.Group>
            <Form.Group widths='equal'>
              <Form.Select
                fluid
                name="gender"
                label="Gender"
                options={options}
                placeholder="Gender"
              />
              <Form.Input
                fluid
                name="birth"
                type="date"
                label="Birth Date"
                placeholder="Birth Date"
              />
            </Form.Group>
            <Form.Input
              fluid
              name="phone"
              type="number"
              label="Phone Number"
              placeholder="Phone Number"
            />
            <Form.TextArea
            name="bio"
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
export default EditProfile;
