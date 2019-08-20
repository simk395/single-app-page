import React from "react";

const productDiscount = props => {
  return (
    <div className="product__card__notice">
      <p className="product__card__notice-text">Save {props.percent}%</p>
    </div>
  );
};

export default productDiscount;
