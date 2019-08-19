import React, { Component } from "react";
import Search from "./searchBar";

export class NavAccount extends Component {
  render() {
    return (
      <div className="account">
        <p className="account-search">Hello</p>
        <div className="account-hub">
          <div className="account-profile">
            <svg className="account-profile-icon">
              <use xlinkHref="img/sprite.svg#icon-user"></use>
            </svg>{" "}
            <p>Account</p>
          </div>
          <div className="account-cart">
            <svg className="account-cart-icon">
              <use xlinkHref="img/sprite.svg#icon-shopping-cart"></use>
            </svg>{" "}
            cart
          </div>
        </div>
      </div>
    );
  }
}

export default NavAccount;
