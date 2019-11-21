import React, { createRef} from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Grid, Rail, Ref, Sticky } from "semantic-ui-react";

import FeedCard from "../../components/feed-card/feed-card.component";

import "./feedpage.styles.scss";

class Feedpage extends React.Component {
  contextRef = createRef();
  render() {
    return (
      <div>
        <Grid centered columns={3}>
          <Ref innerRef={this.contextRef}>
            <Grid.Column>
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />

              <Rail position="right">
                <Sticky context={this.contextRef}>
                  <IoIosAddCircleOutline className="add" />
                </Sticky>
              </Rail>
            </Grid.Column>
          </Ref>
        </Grid>
      </div>
    );
  }
}
export default Feedpage;
