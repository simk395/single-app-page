import React, { Component } from "react";
import Picture from "./image";
import Colors from "./colors";
import Title from "./title";
import Price from "./price";

export class Card extends Component {
  state = {
    img: this.props.product.image,
    variant: this.props.product.variants[0],
    //there is probably a syntatic sugar for this
    discount: this.props.product.variants[0].compare_at_price
      ? parseInt(
          Math.abs(
            (this.props.product.variants[0].price -
              this.props.product.variants[0].compare_at_price) /
              this.props.product.variants[0].compare_at_price
          ) * 100
        )
      : 0
  };

  //changes display to selected product
  getVariant = (e, variant) => {
    const { product } = this.props;
    this.setActive(e);
    this.getDiscount(variant);
    let img = product.images.find(image => image.id === variant.image_id);
    this.setState({ variant, img });
  };

  //changes discount/price based on active variant
  getDiscount = variant => {
    if (variant.compare_at_price) {
      let newPrice = variant.price;
      let oldPrice = variant.compare_at_price;
      const discount = parseInt(Math.abs((newPrice - oldPrice) / oldPrice) * 100);
      this.setState({ discount });
    } else this.setState({ discount: 0 });
  };

  //checks for removes all active element for card then assigns active element
  setActive = e => {
    const active = "product__card__colors-active";
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
    const { img, variant, discount } = this.state;
    const tags = product.tags.split(" ");
    const newProduct = tags.includes("new");
    return (
      <div className="product__card">
        <Picture image={img} newProduct={newProduct} discount={discount} />
        <Colors colors={product.variants} handleColor={this.getVariant} />
        <Title title={product.title} />
        <Price variant={variant} />
      </div>
    );
  }
}

export default Card;
