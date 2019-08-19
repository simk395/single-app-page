import React from "react";

const productDiscount = props => {
  return (
    <div className="product-alert">
      <p>Save {props.percent}%</p>
    </div>
  );
};

export default productDiscount;
