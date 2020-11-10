import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainerContainer,
  ItemsCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainerContainer onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemsCountContainer>{itemCount}</ItemsCountContainer>
    </CartIconContainerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
