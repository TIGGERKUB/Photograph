import React, { useState } from "react";
import {Divider,Icon} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {Redirect,withRouter } from "react-router-dom";
import {IoIosArrowRoundBack} from 'react-icons/io'
import {Link} from 'react-router-dom'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {register} from '../../redux/user/user.actions';

import "./sign-up.styles.scss";

const SignUp = ({register,isAuthenticated,error}) => {
  const [userCredential, setUserCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { username, email, password } = userCredential;
  const handleSubmit = event => {
    event.preventDefault();
    register(email,username, password);
    console.log('sad');
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
   if (isAuthenticated) {
    // authRedirect = console.log('isAuthenticated : ' +isAuthenticated);
       authRedirect = <Redirect to="/feed" />
      // authRedirect.history.push("/feed");
    }
  return (
    <div className="regist-form">
      <Link to="/"><IoIosArrowRoundBack style={{fontSize:32}}/></Link>
      <div className="regist-form-container">
        {errorMessage}
        {authRedirect}

        <h2>Sign Up</h2>
        <p>or sign in with social network</p>
        <div className="social-login">
          <CustomButton type="button" isFacebookSignIn>
            <Icon name="facebook f" className="icon" /> Facebook
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
    register: (email,username, password) => dispatch(register(email,username, password))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp));

