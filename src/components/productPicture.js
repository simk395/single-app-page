import React from "react";
import New from "./productNew";
import Discount from "./productDiscount";

const productPicture = props => {
  return (
    <div className="product__card__image-container">
      {props.newProduct ? <New /> : null}
      {props.discount ? <Discount percent={props.discount} /> : null}
      <img className="product__card__image" src={props.image.src} alt={props.image.alt} />
    </div>
  );
};

export default productPicture;
