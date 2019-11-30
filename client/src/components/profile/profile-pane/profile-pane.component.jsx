import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Container, Grid } from "semantic-ui-react";

import Picture from '../../Picture/Picture.component'

import {selectProfilePhoto} from '../../../redux/profile/profile.selector'

import "./profile-pane.styles.scss";

const ProfilePane = ({ photos }) => {
  console.log(photos);
  
  // const getPanes = () => {
  //   return photos.map(data => ({
  //     render: () => (
  //       <Tab.Pane attached="false" as="div">
  //         <Container textAlign="center" className="pane-content">
  //           <Grid relaxed columns={3}>
  //             {data.items.map(item => (
  //               <Grid.Column key={item.id}>
  //                 <Picture item={item} />
  //               </Grid.Column>
  //             ))}
  //           </Grid>
  //         </Container>
  //       </Tab.Pane>
  //     )
  //   }));
  // };

  return (
    <div><Container textAlign="center" className="pane-content">
      <Grid relaxed columns={3}>{photos ? photos.map(item => (
        <Grid.Column key={item.photo_id}>
          <Picture item={item}/>
          </Grid.Column>
      )):null}</Grid>
    </Container></div>
  );
};

const mapStateToProps = createStructuredSelector({
  photos: selectProfilePhoto
});

export default connect(mapStateToProps)(ProfilePane);
