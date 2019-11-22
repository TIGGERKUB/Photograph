import React from 'react'

import Picture from '../Picture/Picture.component';

import "./popular-preview.styles.scss";

const PopularPreview = ({ items }) => (
  <div className="popular-container">
      <div className="popular-preview">
        {items
          .filter((item, index) => index < 3)
          .map(({ id, ...otherItemProps }) => (
            <Picture key={id} {...otherItemProps} />
          ))}
      </div>
  </div>
);
export default PopularPreview;
