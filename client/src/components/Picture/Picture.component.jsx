import React from 'react'

import './Picture.styles.scss'

const Picture = ({item}) => {
  const {photo} = item
  return(
  <div className="item-container">
    <div className="image" style={{ backgroundImage: `url(${photo})` }} />
  </div>
)};

export default Picture;