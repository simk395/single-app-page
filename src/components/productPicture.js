import React from "react";

const productPicture = props => {
  return <img className="product-image" src={props.image.src} alt={props.image.alt} />;
};

export default productPicture;
