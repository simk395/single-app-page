import React from "react";

const price = props => {
  return (
    <div className="product__card__price">
      <div className="product__card__price-discount">
        {props.variant.compare_at_price ? (
          <p>
            {`$${props.variant.compare_at_price}`}{" "}
            <div className="product__card__price-discount-cross"></div>
          </p>
        ) : null}
      </div>
      <div className="product__card__price-retail">
        <p>{`$${props.variant.price}`}</p>
      </div>
    </div>
  );
};

export default price;
