import React from 'react'
import './Picture.styles.scss'

const Picture = ({ id, imageUrl}) => (
  <div className="item-container">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
  </div>
);
export default Picture;