import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { selectFeedIsLike } from "../../redux/feed/feed.selector";
import { addLike } from "../../redux/feed/feed.action";

import PicturePlaceholder from "../picture-placeholder/picture-placeholder.component";

import "./feed-card.styles.scss";

const FeedCard = ({ item,addLike,isLike}) => {
  return (
    <div className="card-container">
      <div className="header-container">
        <div className="header">
          <PicturePlaceholder item={item} isAvatar />
          <span>{item.username}</span>
        </div>
        <div className="dots">
          <GoPrimitiveDot />
          <GoPrimitiveDot />
          <GoPrimitiveDot />
        </div>
      </div>
      <PicturePlaceholder item={item} isFeed />
      <div className="footer-container">
        <div className="interaction-container">
          {isLike ? (
            <FaHeart
              style={{ color: "#f0134d" }}
              className="interaction-icon"
              onClick={() => addLike(item)}
            />
          ) : (
            <FaRegHeart
              className="interaction-icon"
              onClick={() => addLike(item)}
            />
          )}
          <FaRegComment className="interaction-icon" />
        </div>
        <span style={{ marginLeft: 5 }}>{item.likes} Likes</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isLike: selectFeedIsLike
});
const mapDispatchToProps = dispatch => ({
  addLike: item => dispatch(addLike(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);
