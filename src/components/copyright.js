import React from "react";

const copyright = props => {
  const { createImg } = props;
  let svg = ["icon-cc-visa", "icon-mastercard", "icon-cc-paypal", "icon-americanexpress"];
  return (
    <div className="footer__copyright bg__gray-4">
      <p className="footer__copyright__text">
        Copyright &copy; 2018 www.projectvanilla.com | Design and Build by Parkfield Commerce
      </p>
      <div className="footer__nav-list__item-container">{svg.map(img => createImg(img))}</div>
    </div>
  );
};

export default copyright;
