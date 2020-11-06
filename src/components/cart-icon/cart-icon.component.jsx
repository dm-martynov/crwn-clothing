import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
