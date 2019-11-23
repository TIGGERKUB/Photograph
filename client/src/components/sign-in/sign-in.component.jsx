import React, { useState } from "react";
import { Link,Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {login} from '../../redux/user/user.actions';

import "./sign-in.styles.scss";

const SignIn = ({login,isAuthenticated,error}) => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    password: ""
  });

 
  const { username, password } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    login(username, password);
    
  };
  const handleChange = event => {
    const { value, name } = event.target;
    
    setUserCredentials({ ...userCredential, [name]: value });
  };

  let errorMessage = null;
    if ( error ) {
        errorMessage = (
           <p>{error.message}</p>
        );
    }
  let authRedirect = null;
    if ( isAuthenticated ) {
        authRedirect = <Redirect to="/feed" />
    }
  return (
    <div className="login-form">
      {authRedirect}
      {errorMessage}
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

