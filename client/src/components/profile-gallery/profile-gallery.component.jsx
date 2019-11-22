import React from 'react';

import Picture from '../Picture/Picture.component';

import './profile-gallery.styles.scss';

const ProfileGallery = ({ items }) => (
  <div className="gallery-container">
    <div className="gallery-items">
      {items
        .filter((item, index) => index < 3)
        .map(({ id, ...otherItemProps }) => (
          <Picture key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default ProfileGallery;