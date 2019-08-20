import React from "react";

const productPrice = props => {
  return (
    <div className="product__product__price">
      <span>
        {props.variant.compare_at_price} ${props.variant.price}
      </span>
    </div>
  );
};

export default productPrice;
