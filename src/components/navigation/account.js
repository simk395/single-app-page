import React from "react";
import Search from "../searchBarMini";

const account = () => {
  let svg = [
    { title: "icon-user", notification: 0, desc: "Account" },
    { title: "icon-shopping-cart", notification: 2, desc: "Cart" }
  ];
  return (
    <div className="account">
      <Search />
      <div className="account__hub">
        {svg.map(img => {
          if (img.notification > 0) {
            return (
              <div className="account__hub__item" key={`${img.title}`}>
                <a className="account__hub__item-anchor" href="#">
                  <svg className="account__hub__icon">
                    <use xlinkHref={`img/sprite.svg#${img.title}`}></use>
                  </svg>
                  <div className="account__hub__item-alert">
                    <p>{img.notification}</p>
                  </div>
                  {img.desc}
                </a>
              </div>
            );
          } else {
            return (
              <div className="account__hub__item" key={`${img.title}`}>
                <a className="account__hub__item-anchor" href="#">
                  <svg className="account__hub__icon">
                    <use xlinkHref={`img/sprite.svg#${img.title}`} />
                  </svg>
                  {img.desc}
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default account;
