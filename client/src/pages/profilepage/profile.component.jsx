import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import EditProfile from "../../components/profile/edit-profile/edit-profile.component";
import PicturePlaceholder from '../../components/picture-placeholder/picture-placeholder.component'
import ProfileHeader from "../../components/profile/profile-header/profile-header.component";
import ProfileFollow from '../../components/profile/profile-follow/profile-follow.component'
import ProfileBio from "../../components/profile/profile-bio/profile-bio.component";
import ProfilePane from "../../components/profile/profile-pane/profile-pane.component";

import * as profileSelector from "../../redux/profile/profile.selector";
import { profileInfo } from '../../redux/profile/profile.action';

import "./profile.styles.scss";


const ProfilePage = (
  {match,profileInfo,ProfileUsername,no_photo,no_following,no_followers,bio,avatar,photo,followerLists}
  )=>{
  console.log("match.params.username = " + match.params.username);
  useEffect(() => {
    profileInfo(match.params.username);
  }, [match.params.username,profileInfo]);

    return (
      <Container className="profile-container">
        <Grid>
          <Grid.Column width={10}>
            <Grid.Row stretched>
              <Grid.Column width={4}>
                <Grid columns="equal" textAlign="center">
                  <Grid.Column width={7}>
                    <ProfileHeader name={ProfileUsername}/>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <ProfileFollow list={followerLists} total={no_followers} label="Followers"/>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <ProfileFollow list={followerLists} total={no_following} label="Followings"/>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <ProfileFollow total={no_photo} label="Posts" isPost/>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column width={12}>
                <ProfileBio />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={6}>
            <PicturePlaceholder
              file="https://i.ibb.co/CbYjm3k/woodwatch-7hye-LUn6388-unsplash.jpg"
              isProfile
            />
            <EditProfile />
          </Grid.Column>
        </Grid>
        <ProfilePane />
      </Container>
    );
  }
  const mapStateTopProps = createStructuredSelector({
    ProfileUsername:profileSelector.selectProfileUsername,
    no_photo:profileSelector.selectProfileNoPhoto,
    no_following:profileSelector.selectProfileNoFollowing,
    no_followers:profileSelector.selectProfileNoFollwers,
    bio:profileSelector.selectProfileBio,
    avatar:profileSelector.selectProfileAvatar,
    photo:profileSelector.selectProfilePhoto,
    followerLists: profileSelector.selectProfileFollowers
  })

  const mapDispatchToProps = dispatch => ({
    profileInfo: (username) => dispatch(profileInfo(username))
  })

export default connect(mapStateTopProps,mapDispatchToProps)(ProfilePage);
