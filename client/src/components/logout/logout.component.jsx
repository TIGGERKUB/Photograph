import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {logout} from '../../redux/user/user.actions';
import {clearState} from '../../redux/profile/profile.action';

const Logout = props => {
  const { logout,clearState} = props;

  useEffect(() => {
    logout();
    clearState();
  }, [logout,clearState]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearState: () => dispatch(clearState())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
