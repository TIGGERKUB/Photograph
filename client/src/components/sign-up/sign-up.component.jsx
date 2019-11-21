import React, { useState } from "react";
import {Divider,Icon} from 'semantic-ui-react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { username, email, password } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    setUserCredentials({ username: "", email: "", password: "" });
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredential, [name]: value });
  };

  return (
    <div className="regist-form">
      <h2>Sign Up</h2>
      <p>or sign in with social network</p>
      <div className="social-login">
        <CustomButton type="button" isFacebookSignIn>
          <Icon name="facebook f" className="icon" /> Facebook
        </CustomButton>
        <CustomButton type="button" isTwitterSignIn>
          <Icon name="twitter" className="icon" /> Twitter
        </CustomButton>
        <CustomButton type="button" isGoogleSignIn>
          <Icon name="google" className="icon" /> Google
        </CustomButton>
      </div>
      <Divider horizontal>Or</Divider>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
      </form>
      <div className="button">
        <CustomButton type="submit">Sign Up</CustomButton>
      </div>
    </div>
  );
};
export default SignUp;
