import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";

import ButtonOutline from "../../components/button-outline/button-outline.component";
import ProfileImg from "../../components/profile-img/profile-img.component";
import ProfileHeader from "../../components/profile-header/profile-header.component";
import ProfileFollower from "../../components/profile-follower/profile-follower.component";
import ProfileFollwing from "../../components/profile-following/profile-following.component";
import ProfileBio from "../../components/profile-bio/profile-bio.component";

import "./profile.styles.scss";

const ProfilePage = () => (
  <Container>
    <Grid>
      <Grid.Column width={10}>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <Grid columns="equal" textAlign="center">
              <Grid.Column width={6}>
                <ProfileHeader />
              </Grid.Column>
              <Grid.Column width={5}>
                <ProfileFollower />
              </Grid.Column>
              <Grid.Column width={5}>
                <ProfileFollwing />
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={12}>
            <ProfileBio />
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={6}>
        <ProfileImg />
        <div className="edit-profile-btn">
          <ButtonOutline>edit profile</ButtonOutline>
        </div>
      </Grid.Column>
    </Grid>

    <Divider></Divider>
  </Container>
);
export default ProfilePage;
