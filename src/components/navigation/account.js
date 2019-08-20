import React from "react";
import Search from "../searchBar";

const account = () => {
  return (
    <div className="account">
      <p className="account__search">Hello</p>
      <div className="account__hub">
        <div className="account__hub__profile">
          <svg className="account__hub__profile-icon">
            <use xlinkHref="img/sprite.svg#icon-user"></use>
          </svg>
          <p>Account</p>
        </div>
        <div className="account__hub__cart">
          <svg className="account__hub__cart-icon">
            <use xlinkHref="img/sprite.svg#icon-shopping-cart"></use>
          </svg>
          <div className="account__hub__cart-alert">
            <p>2</p>
          </div>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default account;
