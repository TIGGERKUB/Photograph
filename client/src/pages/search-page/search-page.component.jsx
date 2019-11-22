import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SearchBox from "../../components/search-box/search-box.component";
import Picture from "../../components/Picture/Picture.component";

import { selectPicture } from "../../redux/data/data.selector";

import "./search-page.styles.scss";

const SearchPage = ({ collections }) => {
  return (
    <div>
      <SearchBox />
      <h2 className="title-popular">Popular</h2>
      <Container textAlign="center">
        <Grid relaxed columns={3}>
          {collections.womens.items.map(item => (
            <Grid.Column>
              <Picture key={item.id} item={item} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectPicture
});

export default connect(mapStateToProps)(SearchPage);
