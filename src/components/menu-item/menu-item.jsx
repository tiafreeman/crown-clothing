import React from "react";
import { render } from "node-sass";

const MenuItem = ({ title }) => {
  render(
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
