import React from 'react'
import './popular-picture.styles.scss'

const PopularPicture = ({ id, imageUrl}) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
  </div>
);
export default PopularPicture;