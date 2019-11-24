import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { selectFeedTotalLikes } from "../../redux/feed/feed.selector";
import { addLike } from "../../redux/feed/feed.action";

import PicturePlaceholder from '../picture-placeholder/picture-placeholder.component'

import "./feed-card.styles.scss";

const FeedCard = ({ item,totalLikes }) => {
  return (
    <div className="card-container">
      <div className="header-container">
        <div className="header">
          <PicturePlaceholder item={item} isAvatar/>
          <span>Musicrvy</span>
          <div className="dots">
            <GoPrimitiveDot />
            <GoPrimitiveDot />
            <GoPrimitiveDot />
          </div>
        </div>
      </div>
      <PicturePlaceholder item={item} isFeed/>
      <div className="footer-container">
        <div className="interaction-container">
          <FaRegHeart className="interaction-icon" />
          <FaRegComment className="interaction-icon" />
        </div>
        <span>{totalLikes}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  totalLikes: selectFeedTotalLikes
});
// const mapDispatchToProps = dispatch => ({
//   addLike: item => dispatch(addLike(item))
// });
export default connect(mapStateToProps)(FeedCard);
