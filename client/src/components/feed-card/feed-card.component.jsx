import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { GoPrimitiveDot } from "react-icons/go";

import "semantic-ui-css/semantic.min.css";
import "./feed-card.styles.scss";

const FeedCard = () => {
  return (
    <div className="card-container">
      <div className="header-container">
        <div className="header">
          <img
            src="https://i.ibb.co/1mJrMgn/alex-harvey-y0-I85-D5-QKvs-unsplash.jpg"
            className="avatar"
          />
          <span>Musicrvy</span>
          <a className="option">
            <GoPrimitiveDot />
            <GoPrimitiveDot />
            <GoPrimitiveDot />
          </a>
        </div>
      </div>
      <Image src="https://i.ibb.co/h7W260X/pixasquare-4ojhpg-Kp-S68-unsplash.jpg" />
      <div className="footer-container">
        <Icon name="heart outline" size="large" className="love"/>
        <Icon name="comment outline" size="large" className="comment"/>
      </div>
    </div>
  );
};
export default FeedCard;
