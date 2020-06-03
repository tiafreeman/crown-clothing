import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './collection-item.scss';

const CollectionItem = (items) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${items.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{items.name}</span>
      <span className="price">{items.price}</span>
    </div>
    <CustomButton value="Add to Cart" inverted />
  </div>
);

export default CollectionItem;
