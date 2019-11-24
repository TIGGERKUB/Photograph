import React from 'react'
import './profile-header.styles.scss'
import {profileInfo} from '../../../redux/profile/profile.action';
import { connect } from 'react-redux';

const ProfileHeader = ({profileInfo}) => (
    <h2 className="profile-header" onClick={profileInfo}>tiger.zg</h2>
)

const mapDispatchToProps = dispatch => {
    return {
        profileInfo: () => dispatch(profileInfo())
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(ProfileHeader);
  