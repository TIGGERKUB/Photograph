import React from 'react'
import './popular-preview.styles.scss'
import PopularPicture from '../popular-picture/popular-picture.component';

const PopularPreview = ({ items }) => (
  <div className="collection-preview">
      <div className="preview">
        {items
          .filter((item, index) => index < 3)
          .map(({ id, ...otherItemProps }) => (
            <PopularPicture key={id} {...otherItemProps} />
          ))}
      </div>
  </div>
);
export default PopularPreview;
