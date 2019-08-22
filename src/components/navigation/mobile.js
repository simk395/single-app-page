import React from "react";

const mobile = () => {
  let svg = [
    { title: "icon-menu", notification: 0 },
    { title: "icon-magnifying-glass", notification: 0 },
    { title: "icon-user", notification: 0 },
    { title: "icon-shopping-cart", notification: 2 }
  ];

  return (
    <div className="account__hub-mobile">
      {svg.map(img => {
        if (img.notification > 0) {
          return (
            <div className="account__hub__item" key={`${img.title}`}>
              <a href="#">
                <svg className="account__hub__icon">
                  <use xlinkHref={`img/sprite.svg#${img.title}`}></use>
                </svg>
                <div className="account__hub__item-alert">
                  <p>{img.notification}</p>
                </div>
              </a>
            </div>
          );
        } else {
          return (
            <a href="#" key={`${img.title}`}>
              <svg className="account__hub__icon">
                <use xlinkHref={`img/sprite.svg#${img.title}`} />
              </svg>
            </a>
          );
        }
      })}
    </div>
  );
};

export default mobile;
