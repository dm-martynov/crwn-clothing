import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionFooterContainer,
  CollectionItemButton,
  CollectionItemContainer,
  CollectionItemImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CollectionItemButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
