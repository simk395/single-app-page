import React, { Component } from "react";
import Discount from "./productDiscount";
import Picture from "./productPicture";
import Colors from "./productColors";
import Title from "./productTitle";
import Price from "./productPrice";
import New from "./productNew";

export class itemCard extends Component {
  state = {
    img: this.props.product.image,
    variant: this.props.product.variants[0]
  };

  //changes display to selected product
  getVariant = (e, variant) => {
    const { product } = this.props;
    this.setActive(e);
    let img = product.images.find(image => image.id === variant.image_id);
    this.setState({ variant, img });
  };

  //checks for removes all active element for card then assigns active element
  setActive = e => {
    const active = "product-colors-active";
    if (e.target.classList.contains(active)) return null;
    let allSiblings = e.target.parentElement.children;
    for (const element of allSiblings) {
      element.classList.remove(active);
    }
    e.target.classList.add(active);
  };

  render() {
    //colors are not centered properly for css
    const { product } = this.props;
    const { img, variant } = this.state;
    return (
      <div className="product-card">
        <Picture image={img} />
        <Colors colors={product.variants} handleColor={this.getVariant} />
        <Title title={product.title} />
        <Price variant={variant} />
      </div>
    );
  }
}

export default itemCard;
