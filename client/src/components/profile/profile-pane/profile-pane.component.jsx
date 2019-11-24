import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Tab, Container, Grid } from "semantic-ui-react";

import Picture from '../../Picture/Picture.component'

import { selectCollectionsForPreview } from "../../../redux/data/data.selector";

import "./profile-pane.styles.scss";

const ProfilePane = ({ collections }) => {
  const getPanes = () => {
    return collections.map(data => ({
      menuItem: data.title,
      render: () => (
        <Tab.Pane attached="false" as="div">
          <Container textAlign="center" className="pane-content">
            <Grid relaxed columns={3}>
              {data.items.map(item => (
                <Grid.Column>
                  <Picture key={item.id} item={item} />
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        </Tab.Pane>
      )
    }));
  };

  return (
    <div>
      <Tab menu={{ secondary: true, pointing: true }} panes={getPanes()} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ProfilePane);
