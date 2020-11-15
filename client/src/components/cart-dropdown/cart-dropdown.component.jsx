import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartDropdownEmptyMessage,
  CartDropdownItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropdownContainer>
      <CartDropdownItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <CartDropdownEmptyMessage>
            Your cart is empty
          </CartDropdownEmptyMessage>
        )}
      </CartDropdownItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
