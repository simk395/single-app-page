import React, { Component } from "react";
import Discount from "./productDiscount";
import Picture from "./productPicture";
import Colors from "./productColors";
import Title from "./productTitle";
import Price from "./productPrice";
import New from "./productNew";

export class itemCard extends Component {
  state = {
    image: this.props.product.image
  };
  render() {
    const { product } = this.props;
    const { image } = this.state;
    return (
      <div className="product-card">
        <Picture image={image} />
        <Colors colors={product.variants} />
        <Title title={product.title} />
        <Price variant={product.variants[0]} />
      </div>
    );
  }
}

export default itemCard;
