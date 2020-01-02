import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import _ from "lodash";

import SearchBox from "../../components/search-box/search-box.component";
import Picture from "../../components/Picture/Picture.component";
import ModalList from "../../components/profile/modal-list/modal-list.component";

import { selectPicture } from "../../redux/data/data.selector";
import {
  selectSearchUsers,
  selectSearchCharacter,
  selectSearchLoading
} from "../../redux/search/search.selector";
import { allUser } from "../../redux/search/search.action";

import "./search-page.styles.scss";

const SearchPage = ({ collections, users, character, allUser }) => {
  useEffect(() => {
    allUser();
  }, [allUser]);

  const userFiltered = users.filter(user =>
    _.toLower(user.username).includes(character)
  );

  return (
    <div>
      <SearchBox />
      {character === "" ? null : (
        <div className="list-container">
          <ModalList items={userFiltered} isSearch />
        </div>
      )}
      <h2 className="title-popular">Popular</h2>
      <Container textAlign="center">
        <Grid relaxed columns={3}>
          {collections.womens.items.map(item => (
            <Grid.Column key={item.id}>
              <Picture item={item} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectPicture,
  users: selectSearchUsers,
  character: selectSearchCharacter,
  loading: selectSearchLoading
});

const mapDispatchToProps = dispatch => ({
  allUser: () => dispatch(allUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
