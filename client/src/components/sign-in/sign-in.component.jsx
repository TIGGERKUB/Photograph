import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    password: ""
  });
  const { username, password } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    
    setUserCredentials({ username: "", password: "" });
  };
  const handleChange = event => {
    const { value, name } = event.target;
    
    setUserCredentials({ ...userCredential, [name]: value });
  };

  return (
    <div className="login-form">
      <h2 className="login-brand">Photograph</h2>
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
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="login-button">
        <CustomButton type="submit">SIGN IN</CustomButton>
      </div>
      </form>
      <span>Create an account </span>
      <Link className="signup-link" to="/signup">
        Sign up
      </Link>
    </div>
  );
};
export default SignIn;
