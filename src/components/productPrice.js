import React from "react";

const productPrice = props => {
  return (
    <div>
      <span>
        {props.variant.compare_at_price} {props.variant.price}
      </span>
    </div>
  );
};

export default productPrice;
