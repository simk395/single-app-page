import React from "react";

const price = props => {
  return (
    <div className="product__product__price">
      <span>
        {props.variant.compare_at_price} ${props.variant.price}
      </span>
    </div>
  );
};

export default price;
