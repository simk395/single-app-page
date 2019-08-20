import React, { Component } from "react";
import Items from "../footerItems";
import Nav from "../components/footerNav";
import Newsletter from "../components/newsletter";
import Copyright from "../components/copyright";

export class footer extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", e => {
      let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName("body")[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
      this.setState({ width });
    });
  }

  displayFooterItems = w => {
    let list = document.querySelectorAll(".footer-list-unordered");
    if (w < 800) {
      for (const item of list) item.style.display = "none";
    } else {
      for (const item of list) item.style.display = "flex";
    }
  };

  render() {
    const { width } = this.state;
    this.displayFooterItems(width);
    return (
      <footer className="footer">
        <div className="footer-nav">
          {Items.map(navItem => {
            if (navItem.item.title !== "Newsletter") return <Nav item={navItem} />;
            else return <Newsletter item={navItem} />;
          })}
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default footer;
