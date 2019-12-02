import React from "react";
import { Container, Grid, Modal, Divider } from "semantic-ui-react";
import { connect } from "react-redux";

import PrivatePane from "../private-pane/private-pane.component";
import PicturePlaceholder from "../../picture-placeholder/picture-placeholder.component";
import ProfileHeader from "../profile-header/profile-header.component";
import ProfileFollow from "../profile-follow/profile-follow.component";
import ButtonOutline from "../../button-outline/button-outline.component";
import ProfilePane from "../profile-pane/profile-pane.component";
import ProfileBio from "../profile-bio/profile-bio.component";

import {
  sendRequested,
  cancelRequested,
  unfollow
} from "../../../redux/follow/follow.action";

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
  followingLists,
  status,
  sendRequest,
  cancelRequest,
  unfollow
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
                    list={followerLists}
                    total={no_followers}
                    label="Followers"
                  />
                </Grid.Column>
                <Grid.Column width={3}>
                  <ProfileFollow
                    list={followingLists}
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
              <ProfileBio bio={bio} />
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={6}>
          {avatar ? (
            <PicturePlaceholder file={avatar} isProfile />
          ) : (
            <PicturePlaceholder isProfilePlaceholder />
          )}
          <div className="status-btn">
            {status === "Following" ? (
              <Modal
                size="mini"
                trigger={<ButtonOutline isFollowing>{status}</ButtonOutline>}
              >
                <Modal.Content>
                  <PicturePlaceholder file={avatar} isProfile />
                  <Divider />
                  <ButtonOutline
                    isUnfollow
                    style={{ margin: "auto" }}
                    onClick={() => unfollow(ProfileUsername)}
                  >
                    Unfollow
                  </ButtonOutline>
                </Modal.Content>
              </Modal>
            ) : status === "Requested" ? (
              <ButtonOutline
                isRequest
                onClick={() => cancelRequest(ProfileUsername)}
              >
                Requested
              </ButtonOutline>
            ) : (
              <ButtonOutline onClick={() => sendRequest(ProfileUsername)}>
                follow
              </ButtonOutline>
            )}
          </div>
        </Grid.Column>
      </Grid>
      {status === "Following" ? <ProfilePane /> : <PrivatePane />}
    </Container>
  );
};
const mapDispatchToProps = dispatch => ({
  sendRequest: anotherUser => dispatch(sendRequested(anotherUser)),
  cancelRequest: anotherUser => dispatch(cancelRequested(anotherUser)),
  unfollow: anotherUser => dispatch(unfollow(anotherUser))
});
export default connect(null, mapDispatchToProps)(Another);
