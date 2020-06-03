import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton value="Go to Checkout" />
  </div>
);

export default CartDropdown;
