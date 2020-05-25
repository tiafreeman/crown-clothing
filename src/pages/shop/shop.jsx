import React, { Component } from "react";
import shopData from "./shopData";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.props = shopData;
  }

  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;
