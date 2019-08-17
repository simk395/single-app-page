import React, { Component } from "react";
import Discount from "./productDiscount";
import Picture from "./productPicture";
import Colors from "./productColors";
import Title from "./productTitle";
import Price from "./productPrice";
import New from "./productNew";

export class itemCard extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <Picture />
        <Colors />
        <Title title={product.title} />
        <Price variant={product.variants[0]} />
      </div>
    );
  }
}

export default itemCard;
