import React from "react";
import { Container, Grid } from "semantic-ui-react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import EditProfile from "../../components/profile/edit-profile/edit-profile.component";
import PicturePlaceholder from '../../components/picture-placeholder/picture-placeholder.component'
import ProfileHeader from "../../components/profile/profile-header/profile-header.component";
import ProfileFollower from "../../components/profile/profile-follower/profile-follower.component";
import ProfileFollwing from "../../components/profile/profile-following/profile-following.component";
import ProfileBio from "../../components/profile/profile-bio/profile-bio.component";
import ProfilePane from "../../components/profile/profile-pane/profile-pane.component";

import { selectProfileFollowers } from "../../redux/profile/profile.selector";

import "./profile.styles.scss";


const ProfilePage = ({followerLists})=>{
  
    return (
      <Container className="profile-container">
        <Grid>
          <Grid.Column width={10}>
            <Grid.Row stretched>
              <Grid.Column width={4}>
                <Grid columns="equal" textAlign="center">
                  <Grid.Column width={6}>
                    <ProfileHeader />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <ProfileFollower list={followerLists} total="40 K" />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <ProfileFollwing list={followerLists} total="100"/>
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
    followerLists: selectProfileFollowers
  })
export default connect(mapStateTopProps)(ProfilePage);
