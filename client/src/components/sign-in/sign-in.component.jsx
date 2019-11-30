import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { login } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ login, isAuthenticated, error }) => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    password: "",
    errorMessage: ""
  });

  const { username, password, errorMessage } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      login(username, password);
    }
  };
  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredential, [name]: value });
  };
  const validate = () => {
    let errorMessage = "";
    // if (error) {
    //   errorMessage = "Invalid username or password";
    //   setUserCredentials({ ...userCredential, errorMessage });
    //   return false;
    // }
    return true;
  };
  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/feed" />;
  }
  return (
    <div className="login-form">
      {authRedirect}
      <h2 className="login-brand">Photograph</h2>
      <form onSubmit={handleSubmit}>
        <span style={{color:'red'}}>{errorMessage}</span>
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
      <Link className="signup-link" to="/auth/signup">
        Sign up
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    isAuthenticated: state.user.token !== null,
    authRedirectPath: state.user.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
