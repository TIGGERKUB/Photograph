import React, { createRef } from "react";
import { Grid, Rail, Ref, Sticky } from "semantic-ui-react";
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux'

import FeedCard from "../../components/feed-card/feed-card.component";
import PostPicture from "../../components/post-picture/post-picture.component";

import {selectFeedPost} from '../../redux/feed/feed.selector'

import "./feedpage.styles.scss";

const Feedpage = ({post}) => {  
  const contextRef = createRef();
  
  return (
    <div>
      <Grid centered columns={3}>
        <Ref innerRef={contextRef}>
          <Grid.Column>
            {post.map(item => (<FeedCard key={item.id} item={item}/>))}
            <Rail position="right">
              <Sticky context={contextRef}>
                <PostPicture />
              </Sticky>
            </Rail>
          </Grid.Column>
        </Ref>
      </Grid>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  post: selectFeedPost
});
export default connect(mapStateToProps)(Feedpage);
