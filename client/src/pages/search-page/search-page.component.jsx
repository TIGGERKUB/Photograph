import React from "react";
import SHOP_DATA from "../data/test-data.js";
import {Container} from "semantic-ui-react"

import SearchBox from "../../components/search-box/search-box.component";
import PopularPreview from "../../components/popular-preview/popular-preview.component";

import "./search-page.styles.scss";

class SearchPage extends React.Component {
  state = {
    PopularPictures: SHOP_DATA
  }
  render() {
    const {PopularPictures} = this.state;
    return (
      <div>
        <SearchBox />
        <h2 className="title-popular">Popular</h2>
        <Container textAlign="center">
          {PopularPictures.map(({ id, ...otherProps }) => (
            <PopularPreview key={id} {...otherProps} />
          ))}
        </Container>
      </div>
    )
  }
};

export default SearchPage;
