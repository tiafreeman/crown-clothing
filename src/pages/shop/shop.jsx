/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import shopData from "./shopData";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
