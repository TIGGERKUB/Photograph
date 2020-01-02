import React, { useState } from "react";
import { Divider, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { register } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signup, isAuthenticated, error }) => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: ""
  });
  const {
    username,
    email,
    password,
    usernameError,
    emailError,
    passwordError
  } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      signup(email, username, password);
    }
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredential, [name]: value });
  };
  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    if (username.length < 5) {
      usernameError = "Username must be more than 5 character";
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailError = "Invalid email";
    }
    if (password.length < 8) {
      passwordError = "Password must be more than 8 characters or more";
    }

    if (emailError || usernameError || passwordError) {
      setUserCredentials({
        ...userCredential,
        emailError,
        usernameError,
        passwordError
      });
      return false;
    }

    return true;
  };

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/feed" />;
  }

  return (
    <div className="regist-form">
      <Link to="/">
        <IoIosArrowRoundBack style={{ fontSize: 32 }} />
      </Link>
      <div className="regist-form-container">
        {authRedirect}
        <h2>Sign Up</h2>
        <span>or sign in with social network</span>
        <div className="social-login">
          <CustomButton type="button" isFacebookSignIn>
            <Icon name="facebook f" className="icon" /> Facebook
          </CustomButton>
          <CustomButton type="button" isGoogleSignIn>
            <Icon name="google" className="icon" /> Google
          </CustomButton>
        </div>
        <Divider horizontal>Or</Divider>
        {error ? <span style={{color:'red'}}>{error}</span>:null}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            value={username}
            handleChange={handleChange}
            label="Username"
            error={usernameError}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            error={emailError}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            error={passwordError}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
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
    signup: (email, username, password) =>
      dispatch(register(email, username, password))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
