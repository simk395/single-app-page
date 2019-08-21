import React, { Component } from "react";
import Items from "../footerItems";
import Nav from "../components/navigation/Footer";
import Newsletter from "../components/newsletter";
import Copyright from "../components/copyright";
import NewsletterMobile from "../components/newsletterMobile";

export class Footer extends Component {
  state = {
    width: window.innerWidth
  };

  // componentDidMount() {
  //   window.addEventListener("resize", e => {
  //     let w = window,
  //       d = document,
  //       documentElement = d.documentElement,
  //       body = d.getElementsByTagName("body")[0],
  //       width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
  //     if (width <= 1200) this.setState({ mobile: true });
  //     else this.setState({ mobile: false });
  //   });
  // }

  // displayFooterItems = w => {
  //   let list = document.querySelectorAll(".footer__nav-list");
  //   if (w < 800) {
  //     for (const item of list) item.style.display = "none";
  //   } else {
  //     for (const item of list) item.style.display = "flex";
  //   }
  // };

  createImg = img => {
    return (
      <svg className="footer__nav-list__item-icon">
        <use xlinkHref={`img/sprite.svg#${img}`}></use>
      </svg>
    );
  };

  render() {
    const { width } = this.state;
    // this.displayFooterItems(width);
    return (
      <footer className="footer">
        <div className="footer__nav bg__gray-2">
          {Items.map(navItem => {
            if (navItem.item.title !== "Newsletter") return <Nav item={navItem} />;
            else return <Newsletter item={navItem} createImg={this.createImg} />;
          })}
          <NewsletterMobile createImg={this.createImg} />
        </div>
        <Copyright createImg={this.createImg} />
      </footer>
    );
  }
}

export default Footer;
