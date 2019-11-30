import React from "react";
import { Container, Grid } from "semantic-ui-react";

import PrivatePane from '../private-pane/private-pane.component'
import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ProfileHeader from "../profile-header/profile-header.component";
import ProfileFollow from "../profile-follow/profile-follow.component";
import ProfileBio from "../profile-bio/profile-bio.component";
import ButtonOutline from "../../button-outline/button-outline.component";
import ProfilePane from "../profile-pane/profile-pane.component";

import "./another.styles.scss";

const Another = ({
  ProfileUsername,
  no_photo,
  no_following,
  no_followers,
  bio,
  avatar,
  photo,
  followerLists,
  status
}) => {
  console.log(status);
  
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
                    list={followerLists}
                    total={no_followers}
                    label="Followers"
                  />
                </Grid.Column>
                <Grid.Column width={3}>
                  <ProfileFollow
                    list={followerLists}
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
              <ProfileBio bio={bio}/>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={6}>
          <PicturePlaceholder
            file={avatar}
            isProfile
          />
          <div className="status-btn">
            {status === "following" ? (
              <ButtonOutline isFollowing>{status}</ButtonOutline>
            ) : status === "request" ? (
              <ButtonOutline isRequest>Requested</ButtonOutline>
            ) : (
              <ButtonOutline>follow</ButtonOutline>
            )}
          </div>
        </Grid.Column>
      </Grid>
      {status === "following" ? <ProfilePane/> : <PrivatePane/>}
    </Container>
  );
};
export default Another;
