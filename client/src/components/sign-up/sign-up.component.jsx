import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

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
          <FaFacebookF className="icon"/>  Facebook
        </CustomButton>
        <CustomButton type="button" isTwitterSignIn>
          <FaTwitter className="icon"/>  Twitter
        </CustomButton>
        <CustomButton type="button" isGoogleSignIn>
          <FaGoogle className='icon'/> Google
        </CustomButton>
      </div>
      <Divider className="divider" />
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
      <div className="button">
        <CustomButton type="submit">Sign Up</CustomButton>
      </div>
    </div>
  );
};
export default SignUp;
