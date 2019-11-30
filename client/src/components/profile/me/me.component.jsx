import React from "react";
import { Container, Grid } from "semantic-ui-react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import EditProfile from "../edit-profile/edit-profile.component";
import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ProfileHeader from "../profile-header/profile-header.component";
import ProfileFollow from "../profile-follow/profile-follow.component";
import ProfileBio from "../profile-bio/profile-bio.component";
import ProfilePane from "../profile-pane/profile-pane.component";

import * as selectProfile from '../../../redux/profile/profile.selector'

import "./me.styles.scss";

const Me = ({
  ProfileUsername,
  no_photo,
  no_following,
  no_followers,
  bio,
  avatar,
  photo,
  followers,following
}) => {
  return (
    <Container className="profile-container">
      <Grid>
        <Grid.Column width={10}>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <Grid columns="equal" textAlign="center">
                <Grid.Column width={7}>
                  <ProfileHeader name={ProfileUsername} />
                </Grid.Column>
                <Grid.Column width={3}>
                  <ProfileFollow
                    list={followers}
                    total={no_followers}
                    label="Followers"
                  />
                </Grid.Column>
                <Grid.Column width={3}>
                  <ProfileFollow
                    list={following}
                    total={no_following}
                    label="Following"
                  />
                </Grid.Column>
                <Grid.Column width={3}>
                  <ProfileFollow total={no_photo} label="Posts" isPost />
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column width={12}>
              <Container textAlign='right' className="bio-container"><ProfileBio bio={bio} /></Container>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={6}>
          {avatar ? (
            <PicturePlaceholder file={avatar} isProfile />
          ) : (
            <PicturePlaceholder isProfilePlaceholder />
          )}

          <EditProfile />
        </Grid.Column>
      </Grid>
      <ProfilePane />
    </Container>
  );
};
const mapStateToProps = createStructuredSelector({
  followers: selectProfile.selectProfileFollowers,
  following: selectProfile.selectProfileFollowing
})
export default connect(napStateToProps)(Me);
