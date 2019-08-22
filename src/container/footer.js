import React from "react";
import Items from "../footerItems";
import Nav from "../components/navigation/Footer";
import Newsletter from "../components/newsletter";
import Copyright from "../components/copyright";
import NewsletterMobile from "../components/newsletterMobile";

const footer = () => {
  let createImg = img => {
    return (
      <svg className="footer__nav-list__item-icon" key={`${img}`}>
        <use xlinkHref={`img/sprite.svg#${img}`}></use>
      </svg>
    );
  };

  return (
    <footer className="footer">
      <div className="footer__nav bg__gray-2">
        {Items.map(navItem => {
          if (navItem.item.title !== "Newsletter")
            return <Nav item={navItem} key={`${navItem.item.title}`} />;
          else
            return (
              <Newsletter item={navItem} createImg={createImg} key={`${navItem.item.title}`} />
            );
        })}
        <NewsletterMobile createImg={createImg} />
      </div>
      <Copyright createImg={createImg} />
    </footer>
  );
};

export default footer;
